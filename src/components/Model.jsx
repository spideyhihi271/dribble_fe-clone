import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getAllCollectionById,
  getAllCollections,
  login,
  postNewCollections,
  refeshToken,
  updateShortInCollectionById,
} from "../utils/CRUD";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";

function Model({
  option,
  defaultValue,
  open,
  setOpen,
  handleSubmitModel,
  varOptional,
  setChange,
  change,
}) {
  const [caseView, setCaseView] = useState(option);
  const [data, setData] = useState(defaultValue);
  const [content, setContent] = useState(null);
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState([]);
  const [fetchData, setFecthData] = useState(false);
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
  // Handle Selected
  const handelSelected = async (id) => {
    setLoader(true);
    let selectList = selected;
    let isExist = false;
    // Kiểm tra đã tồn tại chưa
    selectList.map((selected) => {
      if (selected == id) {
        isExist = true;
      }
    });
    // Handel View
    if (isExist) selectList = selectList.filter((item) => item != id);
    else selectList = [...selected, id];
    // Process
    setSelected(selectList);
    // Call Api
    const res = await updateShortInCollectionById(
      id,
      { id: varOptional },
      axiosJWT,
      currentUser.accessToKen
    );
    setFecthData(false);
    setChange(change + 1);
    setLoader(false);
  };
  // Handel Create Collection
  const handelCreateCollection = async (data) => {
    setLoader(true);
    const res = await postNewCollections(
      data,
      axiosJWT,
      currentUser.accessToKen
    );
    setLoader(false);
    setFecthData(false);
    setCaseView(2);
  };
  // Handel Submit
  const submitProcess = async (data) => {
    setLoader(true);
    const res = await handleSubmitModel(data);
    setLoader(false);
    setOpen(false);
  };

  useEffect(() => {
    if (!fetchData && caseView == 2 && open) {
      const getData = async () => {
        let variable = `?idOwner=${currentUser._id}`;
        let res = await getAllCollections(variable);
        setData(res.data);
        setFecthData(true);
      };
      getData();
    }
    // Render Content
    let render = "";
    if (caseView == 0 && open) {
      render = (
        <div className="model_content">
          <p className="model_title">Chỉnh sửa bộ sưu tập</p>
          <button className="exist_btn" onClick={() => setOpen(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <form
            action=""
            className="model_form"
            onSubmit={handleSubmit(submitProcess)}
          >
            <div className="model_form-item">
              <label htmlFor="">Tên bộ sưu tập</label>
              <input
                type="text"
                {...register("name")}
                defaultValue={defaultValue.name}
              />
            </div>
            <div className="model_form-item">
              <label htmlFor="">Mô tả</label>
              <textarea
                {...register("description")}
                defaultValue={defaultValue.description}
              ></textarea>
            </div>
            <div className="model_form-btns">
              <button
                type="submit"
                className="form_submit-btn"
                disabled={loader}
              >
                {loader ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
              <button
                className="form_cancel-btn"
                onClick={() => setOpen(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      );
    } else if (caseView == 1 && open) {
      render = (
        <div className="model_content">
          <p className="model_title">Xóa bộ sưu tập</p>
          <button className="exist_btn" onClick={() => setOpen(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <form
            action=""
            className="model_form"
            onSubmit={handleSubmit(submitProcess)}
          >
            <div className="model_form-item">
              <p className="message">
                Bộ sưu tập: <span>{defaultValue.name} </span> sẽ bị xóa. Tiếp
                tục?
              </p>
              <p className="warning">Lưu ý: Thao tác này không thể phục hồi!</p>
            </div>
            <div className="model_form-btns">
              <button
                type="submit"
                className="form_submit-btn"
                disabled={loader}
              >
                {loader ? "Đang xóa..." : "Xóa"}
              </button>
              <button
                className="form_cancel-btn"
                onClick={() => setOpen(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      );
    } else if (caseView == 2 && open) {
      render = (
        <div className="model_container">
          <div className="model_content">
            <p className="model_title">Lưu shorts vào bộ sưu tập </p>
            <button className="exist_btn" onClick={() => setOpen(false)}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <form
              action=""
              className="model_form"
              onSubmit={handleSubmit(submitProcess)}
            >
              <div className="model_col-list">
                {data?.map((item, idx) => (
                  <button
                    type="button"
                    className={`model_col-item ${
                      selected.indexOf(item._id) != -1 ? "selected" : ""
                    }`}
                    key={idx}
                    onClick={() => handelSelected(item._id)}
                    disabled={loader}
                  >
                    <div className="model_col-aside">
                      <img src={item.shorts[0]?.image} alt="" />
                    </div>
                    <div className="model_col-main">
                      <p className="col_main-name">{item.name}</p>
                      <p className="col_main-short">
                        {item.shorts.length} shorts
                      </p>
                      <p className="col_main-update">
                        Lần cập nhật cuối: {item.updatedAt}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="model_form-btns">
                <button type="submit" className="form_submit-btn">
                  Xong
                </button>
                <button
                  className="form_cancel-btn"
                  type="button"
                  onClick={() => setCaseView(3)}
                >
                  Thêm mới bộ sưu tập
                </button>
              </div>
            </form>
          </div>
          <div className="model_layer"></div>
        </div>
      );
    } else if (caseView == 3 && open) {
      render = (
        <div className="model_content">
          <p className="model_title">Tạo bộ sưu tập mới</p>
          <button className="exist_btn" onClick={() => setOpen(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <form
            action=""
            className="model_form"
            onSubmit={handleSubmit(handelCreateCollection)}
          >
            <div className="model_form-item">
              <label htmlFor="">Tên bộ sưu tập</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Tên bộ sưu tập"
              />
            </div>
            <div className="model_form-item">
              <label htmlFor="">Mô tả</label>
              <textarea
                {...register("description")}
                placeholder="Mô tả bộ sưu tập"
              ></textarea>
            </div>
            <div className="model_form-btns">
              <button
                type="submit"
                className="form_submit-btn"
                disabled={loader}
              >
                {loader ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
              <button
                className="form_cancel-btn"
                onClick={() => setCaseView(2)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      );
    } else if (caseView == 4 && open) {
      render = (
        <div className="model_content">
          <button className="exist_btn" onClick={() => setOpen(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <form className="model_apply" onSubmit={handleSubmit(submitProcess)}>
            <p className="model_apply-header">Ứng tuyển công việc</p>
            <div className="model_apply-body">
              <p className="apply_body-title">
                Ứng tuyển với Hồ sơ Dribbble của bạn
              </p>
              <p className="apply_body-description">
                Đơn đăng ký của bạn sẽ được gửi cùng với bản xem trước Hồ sơ
                Behance của bạn và các dự án gần đây nhất.
              </p>
              <div className="apply_info">
                <div className="apply_project-list">
                  {defaultValue.shorts.map((item) => (
                    <div className="apply_project-item">
                      <img src={item.contents[0].contents} alt="" />
                    </div>
                  ))}
                </div>
                <div className="apply_detail-info">
                  <div className="apply_info-avt">
                    <img src={defaultValue.urlAvt} alt="" />
                  </div>
                  <div className="apply_info-more">
                    <p className="apply_info-name">{defaultValue.name}</p>
                    <p className="apply_info-address">{defaultValue.bio}</p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="apply_btn"
                disabled={loader}
              >
                {loader ? "Đang ứng tuyển..." : "Ứng tuyển ngay"}
              </button>
            </div>
          </form>
        </div>
      );
    }

    setContent(render);
  }, [selected, data, fetchData, loader, caseView]);

  return (
    <div className="model">
      <div className="model_container">
        {content}
        <div className="model_layer" onClick={() => setOpen(false)}></div>
      </div>
    </div>
  );
}

export default Model;
