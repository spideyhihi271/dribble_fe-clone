import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import { Link } from "react-router-dom";
import Model from "./Model";
import { useDispatch, useSelector } from "react-redux";
import { getShorts, refeshToken, updateApplyJob } from "../utils/CRUD";
import axios from "axios";
import { loginSuccess } from "../redux/authSlice";
import jwtDecode from "jwt-decode";

function JobList({ arr, setOpenUploadJob }) {
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const [isLogin, setIsLogin] = useState(false);
  const [fetch, setFecth] = useState(false);
  const [applier, setApplier] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [selected, setSelected] = useState("");
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
      selected,
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
      <div className="jobList_container">
        <div className="jobList_header">
          <p className="header_title">{arr.length} Công việc</p>
          {currentUser && (
            <button
              className="upload_job"
              onClick={() => setOpenUploadJob(true)}
            >
              Đăng tin tuyển dụng
            </button>
          )}
        </div>
        <div className="jobList_main">
          {arr.length > 0 ? (
            <>
              {arr.map((item, idx) => (
                <JobItem
                  key={idx}
                  obj={item}
                  setOpenModel={setOpenModel}
                  setSelected={setSelected}
                />
              ))}
            </>
          ) : (
            <>
              <p className="nothing-title">
                {" "}
                Chưa có công việc phù hợp hãy kiểm tra lại sau !{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default JobList;
