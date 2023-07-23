import React, { useState } from "react";
import Model from "./Model";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function JobItem({ obj, setOpenModel, setSelected }) {
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const [isLogin, setIsLogin] = useState(false);
  const handelClickApply = () => {
    setSelected(obj._id);
    setOpenModel(true);
  };
  useEffect(() => {
    if (currentUser) setIsLogin(true);
  });
  return (
    <>
      <div to={"/detailwork"} className="jobItem_container">
        <div className="jobItem_header">
          <div className="job_header-aside">
            <img src={obj.avtCom} alt="" />
          </div>
          <div className="job_header-main">
            <Link to={`/detailwork/${obj._id}`} className="job_main-name">
              {obj.name}
            </Link>
            <div className="job_main-location">
              <i class="fa-light fa-location-dot"></i>
              <span>{obj.city.name}</span>
            </div>
          </div>
          <div className="job_header-actions">
            {isLogin && (
              <>
                <button className="job_header-active">
                  <i class="fa-regular fa-ellipsis-vertical"></i>
                </button>
                <div className="actions_nav-list">
                  <button className="action_nav-item">Lưu</button>
                  <button className="action_nav-item" onClick={handelClickApply}>
                    Ứng tuyển
                  </button>
                  <button className="action_nav-item">Báo cáo</button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="jobItem_main">
          <p className="jobItem_name">{obj.nameJob}</p>
          <p className="jobItem_description">{obj.contents[0].contents}</p>
          <p className="jobItem_public">{obj.public}</p>
        </div>
      </div>
    </>
  );
}

export default JobItem;
