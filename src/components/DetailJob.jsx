import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getShorts, refeshToken, updateApplyJob } from "../utils/CRUD";
import Model from "./Model";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";

function DetailJob({ obj }) {
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const [isLogin, setIsLogin] = useState(false);
  const [fetch, setFecth] = useState(false);
  const [applier, setApplier] = useState(null);
  const [openModel, setOpenModel] = useState(false);

  // Axios interceptor
  const dispath = useDispatch();
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
  const handelSubmit = async () => {
    const res = await updateApplyJob(
      obj._id,
      axiosJWT,
      currentUser?.accessToKen
    );
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getShorts(`?idOwner=${currentUser?._id}`);
      const data = { shorts: res.data.splice(0, 3), ...currentUser };
      setApplier(data);
      setFecth(true);
    };
    if (!fetch) getData();
    if (currentUser) setIsLogin(true);
  });
  return (
    <>
      {openModel && (
        <Model
          option={4}
          open={openModel}
          setOpen={setOpenModel}
          handleSubmitModel={handelSubmit}
          defaultValue={applier}
        />
      )}
      <div className="detail_job-container">
        <div className="detail_job-header">
          <div className="detail_job-avt">
            <img src={obj.avtCom} alt="" />
          </div>
          <p className="detail_jon-name">{obj.name}</p>
          <div className="detail_job-more">
            <p className="detail_job-nameCom">{obj.location}</p>
            <p className="detail_job-location">- {obj.city.name}</p>
          </div>
          <div className="detail_job-action">
            {isLogin && (
              <>
                <button
                  htmlFor="activeAppli"
                  className="button button_apply"
                  onClick={() => setOpenModel(true)}
                >
                  Ứng tuyển ngay
                </button>
                <button className="button button_save">Lưu</button>
              </>
            )}
          </div>
        </div>
        <div className="detail_job-content">
          <div className="detail_job-main">
            {obj.contents.map((item) => (
              <p
                className={`job_description ${
                  item.type == 1 ? "title" : "normal"
                }`}
              >
                {item.contents}{" "}
              </p>
            ))}
          </div>
          <div className="detail_job-aside">
            <div className="detail_job-short">
              <div className="detail_short-box">
                <p className="detail_short-key">Phân loại </p>
                <p className="detail_short-value">{obj.jobType}</p>
              </div>
              <div className="detail_short-box">
                <p className="detail_short-key">Địa chỉ </p>
                <p className="detail_short-value">{`${obj.location}, ${obj.city.name}`}</p>
              </div>
              <div className="detail_short-box">
                <p className="detail_short-key">
                  Bắt buộc làm việc tại công ty{" "}
                </p>
                <p className="detail_short-value">{obj.onSiteRequired}</p>
              </div>
              <div className="detail_short-box">
                <p className="detail_short-key">Ngày đăng tải </p>
                <p className="detail_short-value">{obj.public}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailJob;
