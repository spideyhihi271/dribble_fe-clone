import React, { useEffect, useState } from "react";
import { getAllTags, postNewShort, refeshToken } from "../utils/CRUD";
import { filterElementByKeyword } from "../utils/ArrayOperation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function UploadProModel({ name, contents, setOpenModel }) {
  const [data, setData] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const [selected, setSelected] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // Current Account
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const dispath = useDispatch();
  // Axios interceptor
  let axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      let now = new Date();
      const tokenDecoded = jwtDecode(currentUser?.accessToKen);
      if (tokenDecoded.exp < now / 1000) {
        const newToken = await refeshToken(currentUser?.accessToKen);
        let newData = {
          ...currentUser,
          accessToKen: newToken.data.accessToKen,
        };
        dispath(loginSuccess(newData));
        config.headers["Authorization"] = `Bearer ${newToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject();
    }
  );
  useEffect(() => {
    console.log(contents);
    const getData = async () => {
      const res = await getAllTags();
      setData(res.data);
      setFetch(true);
    };
    if (!fetch) getData();
  });
  const handelChangeKeyword = (keyword) => {
    let result = filterElementByKeyword([...data], keyword);
    setSuggest(result);
  };
  const handelChangeSelected = (item) => {
    let selectList = [...selected];
    let isExist = false;
    selectList.map((select) => {
      if (select._id == item._id) isExist = true;
    });
    if (isExist)
      selectList = selectList.filter((select) => select._id != item._id);
    else selectList.push(item);
    setSelected(selectList);
  };
  const handelUploadProject = async () => {
    setLoader(true);
    // Lọc name tags
    let tags = selected;
    tags.forEach((item) => {
      delete item.name;
    });
    let data = {
      name,
      contents,
      tags,
      hex: "",
    };
    const res = await postNewShort(data, axiosJWT, currentUser.accessToKen);
    setLoader(false);
    navigate(`/profile/${currentUser._id}`);
  };

  return (
    <div className="upload_final-model">
      <div className="contents">
        <p className="contents_title">Lần chỉnh sửa cuối cùng</p>
        <div className="contents_container">
          <div className="contents_aside">
            <div className="upload_project">
              <p className="aside_title">Xem trước hình thu nhỏ</p>
              <div className="project_thumb">
                <img src={contents[0].contents} alt="" />
              </div>
              <div className="project_total">
                <div className="total_list">
                  <div className="total_item">
                    <i class="fa-duotone fa-heart"></i>
                    54
                  </div>
                  <div className="total_item">
                    <i class="fa-duotone fa-eye"></i>
                    1029
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contents_main">
            <p className="main_title">Thẻ liên kết</p>
            <div className="add_tags-container">
              <div className="add_tags-search">
                <input
                  type="text"
                  className="add_tags-input"
                  placeholder="Tìm kiếm thẻ..."
                  defaultValue={""}
                  onChange={(e) => handelChangeKeyword(e.target.value)}
                />
                <div className="tags_suggest-list">
                  {suggest.map((item, idx) => (
                    <button
                      className="tags_suggest-item"
                      onClick={() => handelChangeSelected(item)}
                      key={idx}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="tags_seleted-list">
                {selected.map((item, idx) => (
                  <div className="tag_selected-item" key={idx}>
                    {item.name}
                    <button onClick={() => handelChangeSelected(item)}>
                      <i class="fa-regular fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className="tags_suggest">
                <p className="tags_suggest-title">Đề xuất: </p>
                {data.slice(0, 10).map((item, idx) => (
                  <button
                    className="tags_item"
                    key={idx}
                    onClick={() => handelChangeSelected(item)}
                  >
                    {item.name},
                  </button>
                ))}
              </div>
            </div>
            <div className="add_tags-actions">
              <button
                className="actions_cancel"
                onClick={() => setOpenModel(false)}
              >
                Hủy
              </button>
              <button
                className="actions_upload"
                onClick={handelUploadProject}
                disabled={loader}
              >
                {loader ? "Đang tải lên..." : "Tải lên ngay bây giờ"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="layer" onClick={() => setOpenModel(false)}></div>
    </div>
  );
}

export default UploadProModel;
