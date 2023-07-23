import React from "react";
import { Link } from "react-router-dom";
import { formatUnit } from "../utils/formatUnit";
import { useSelector } from "react-redux";

function ProjectItem({ obj, setOpenModel, setSelectedShort }) {
  let isLogin = useSelector((state) => state.auth.login.currentAccount);
  return (
    <>
      <div className="project_item">
        <div to={"/detail"} className="project_thumbnail">
          <img src={obj.contents[0].contents} alt="" />
          <div className="project_actions">
            <Link to={`/detail/${obj._id}`} className="project_name">
              {obj.name}
            </Link>
            {isLogin && (
              <button
                className="project_save"
                onClick={() => {
                  setOpenModel(true);
                  setSelectedShort(obj._id);
                }}
              >
                <i class="fa-solid fa-folder-plus"></i>
              </button>
            )}
          </div>
        </div>
        <div className="project_info">
          <Link to={""} className="info_aside">
            <div className="info_avt">
              <img src={obj.avtOwner} alt="" />
            </div>
            <p className="info_name">{obj.nameOwner}</p>
          </Link>
          <div className="info_main">
            <button className="info_save">
              <i class="fa-solid fa-heart"></i>
              <span>{formatUnit(obj.likes.length)}</span>
            </button>
            <button className="info_like">
              <i class="fa-solid fa-eye"></i>
              <span>{formatUnit(obj.views)}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
