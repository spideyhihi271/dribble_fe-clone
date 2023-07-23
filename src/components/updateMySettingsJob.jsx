import React from "react";
import { useState } from "react";
import {
  getAllCreativeField,
  getProfileById,
  refeshToken,
  updateSkills,
} from "../utils/CRUD";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";
function updateMySettingsJob({ id, setOpenModel }) {
  const typeJobs = [
    {
      name: "Tắt tìm việc",
      code: 0,
    },
    {
      name: "Toàn thời gian",
      code: 1,
    },
    {
      name: "Làm việc tự do / hợp đồng",
      code: 2,
    },
  ];
  const [creatives, setCreatives] = useState([]);
  const [creativesSelected, setCreativesSelected] = useState([]);
  const [type, setType] = useState(0);
  const [profile, setProfile] = useState({});
  const [fetch, setFetch] = useState(false);
  const [loader, setLoader] = useState(false);
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
  const onChangeCreatives = (id) => {
    let data = [...creativesSelected];
    let isExist = data.includes(id);
    if (isExist) data = data.filter((selected) => selected != id);
    else data.push(id);
    console.log(data);
    setCreativesSelected(data);
  };

  const handelUpdateWork = async () => {
    setLoader(true);
    const data = {
      availability: type,
      creativeField: creativesSelected,
    };
    const res = await updateSkills(data, axiosJWT, currentUser?.accessToKen);
    setLoader(false);
    setOpenModel(false);
  };
  useState(async () => {
    const getData = async () => {
      const res = await getAllCreativeField();
      const resProfile = await getProfileById(id);
      setCreatives(res.data);
      setProfile(resProfile.data);
      setType(resProfile.data.availability);

      let filterCreative = [];
      resProfile.data.creativeField.map((item) =>
        filterCreative.push(item._id)
      );
      setCreativesSelected(filterCreative);
    };
    if (!fetch) getData();
  }, [type, creativesSelected]);
  return (
    <div className="update_settings">
      <div className="contents">
        <p className="contents_title">Chỉnh sửa tùy chọn công việc</p>
        <p className="contents_description">
          Để giúp bạn luôn sẵn sàng và sắp xếp cho bạn những cơ hội phù hợp,
          trước tiên, chúng tôi cần một số thông tin bổ sung.
        </p>
        <div className="contents_form">
          <div className="contents_form-item">
            <p className="form_item-title">Công việc của bạn là gì ?</p>
            {typeJobs.map((item, idx) => (
              <button className="input_checkbox" key={idx}>
                <input
                  type="radio"
                  id={`type_${item.code}`}
                  name="type"
                  hidden
                  checked={item.code === type}
                  onChange={() => setType(idx)}
                />
                <label htmlFor={`type_${item.code}`} className="input_icon">
                  <i class="fa-regular fa-check"></i>
                </label>
                <label htmlFor={`type_${item.code}`} className="input_name">
                  {item.name}
                </label>
              </button>
            ))}
          </div>
          <div className="contents_form-item">
            <p htmlFor="" className="form_item-title">
              Chọn tối đa 3 chuyên ngành của bạn
            </p>
            {creatives.map((item, idx) => (
              <button className="input_checkbox" key={idx}>
                <input
                  type="checkbox"
                  id={`creative_${idx}`}
                  name="creative"
                  hidden
                  checked={creativesSelected.includes(item._id)}
                  onChange={() => onChangeCreatives(item._id)}
                />
                <label htmlFor={`creative_${idx}`} className="input_icon">
                  <i class="fa-regular fa-check"></i>
                </label>
                <label htmlFor={`creative_${idx}`} className="input_name">
                  {item.name}
                </label>
              </button>
            ))}
          </div>
          <div className="contents_form-footer">
            <button onClick={() => setOpenModel(false)}>Hủy bỏ</button>
            <button onClick={() => handelUpdateWork()}>Lưu</button>
          </div>
        </div>
      </div>
      <div className="layer" onClick={() => setOpenModel(false)}></div>
    </div>
  );
}

export default updateMySettingsJob;
