import React from "react";
import { Link } from "react-router-dom";

function ChatInfo() {
  return (
    <div className="chat_info">
      <Link to={""} className="chat_header">
        <div className="chat_header-avt">
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
            alt=""
          />
        </div>
        <p className="chat_header-name">Leonard Campbell</p>
        <p className="chat_header-address">Rio De Gianero</p>
      </Link>
      <div className="chat_info-apply">
        <div className="apply_title">Ứng tuyển công việc</div>
        <div className="apply_list">
          <Link to={""} className="apply_item">
            <p className="apply_job-name">Senior Product Designer</p>
            <p className="appy_job-short">Toàn thời gian - Yokohama, Japan</p>
          </Link>
        </div>
      </div>
      <div className="chat_detail-info">
        <p className="detail_info-title">Thông tin liên hệ</p>
        <div className="detail_info-list">
          <div className="detail_info-item">
            <div className="detail_info-icon">
              <i class="fa-regular fa-inboxes"></i>
            </div>
            <div className="detail_info-content">
              <p className="info_content-title">Email</p>
              <p className="info_content-value">nguyenlt2713@gmail.com</p>
            </div>
          </div>
          <div className="detail_info-item">
            <div className="detail_info-icon">
              <i class="fa-regular fa-light fa-location-dot"></i>
            </div>
            <div className="detail_info-content">
              <p className="info_content-title">Địa chỉ</p>
              <p className="info_content-value">Yokohama, Japan</p>
            </div>
          </div>
          <div className="detail_info-item">
            <div className="detail_info-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="detail_info-content">
              <p className="info_content-title">Facebook</p>
              <p className="info_content-value">ronasit.dribbble.com</p>
            </div>
          </div>
          <div className="detail_info-item">
            <div className="detail_info-icon">
              <i class="fa-brands fa-behance"></i>
            </div>
            <div className="detail_info-content">
              <p className="info_content-title">Behance</p>
              <p className="info_content-value">nguyenlt2713@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
