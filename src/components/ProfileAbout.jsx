import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatUnit";

function ProfileAbout({ profile }) {
  let socialList = [
    "fa-solid fa-earth-americas",
    "fa-brands fa-twitter",
    "fa-brands fa-square-facebook",
    "fa-brands fa-instagram",
    "fa-brands fa-square-behance",
    "fa-brands fa-square-dribbble",
  ];
  const date = new Date(profile.createdAt);
  
  return (
    <div className="profile_about">
      <div className="about_main">
        <div className="about_item">
          <p className="about_title">Tiểu sử</p>
          <p className="about_content">{profile.bio}</p>
        </div>
        <div className="about_item">
          <p className="about_title">Kĩ năng</p>
          <div className="skill_list">
            {profile.creativeField.map((item) => (
              <div className="skill_item">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="about_aside">
        <div className="about_item">
          <p className="about_title">Thông tin cá nhân</p>
          <div className="about_more-list">
            <div className="about_more-item spec">
              <i class="fa-solid fa-location-dot"></i>
              {profile.address?.name}
            </div>
            <div className="about_more-item spec">
              <i class="fa-solid fa-address-card"></i> Thành viên của Dribbble từ {formatDate(profile.createdAt)}
            </div>
          </div>
        </div>
        <div className="about_item">
          <p className="about_title">Mạng xã hội</p>
          <div className="about_more-list">
            {socialList.map((item, idx) => (
              <a
                href={profile.socialNetworks[idx].link}
                className={`about_more-item spec ${
                  profile.socialNetworks[idx].link.length == 0 ? "hidden" : ""
                }`}
              >
                <i class={item}></i>
                {profile.socialNetworks[idx].link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
