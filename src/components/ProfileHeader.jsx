import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateFollowing } from "../utils/CRUD";
import { Link, useParams } from "react-router-dom";

function ProfileHeader({ data, setChange, change, axiosJWT }) {
  const params = useParams();
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const [wasFollow, setWasFollow] = useState(
    data?.folllows.includes(currentUser?._id)
  );
  const onClickFollow = async () => {
    const res = await updateFollowing(
      data._id,
      axiosJWT,
      currentUser?.accessToKen
    );
    setWasFollow(!wasFollow);
    setChange(change + 1);
  };
  return (
    <div className="profile_header">
      <div className="profile_info">
        <div className="profile_avt">
          <img src={data?.urlAvt} alt="" />
        </div>
        <p className="profile_name">{data?.name}</p>
        <p className="profile_short">{data?.introdution}</p>
        <div className="profile_action-list">
          {currentUser?._id == params.id ? (
            <>
              <Link to={`/edit/${currentUser._id}`} className="button profile_action-item hire">
                Chỉnh sửa thông tin
              </Link>
            </>
          ) : (
            <>
              <button className="button profile_action-item" onClick={onClickFollow}>
                {wasFollow ? (
                  "Đang theo dõi"
                ) : (
                  <>
                    <i class="fa-solid fa-plus"></i> Theo dõi
                  </>
                )}
              </button>
              <button className="button profile_action-item hire">
                <i class="fa-solid fa-envelope"></i>
                Hire Me
              </button>
            </>
          )}
        </div>
      </div>
      <div className="profile_banner">
        <div className="profile_bg"></div>
        <div className="profile_yourImage">
          <img src={data?.urlBanner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
