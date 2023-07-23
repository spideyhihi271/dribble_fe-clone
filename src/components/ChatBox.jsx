import React from "react";
import { Link } from "react-router-dom";

function ChatBox() {
  return (
    <div className="chat_box">
      <Link to={""} className="chat_box-header">
        <div className="chat_box-avt">
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-19/193213826_187238719961746_4364778621606328177_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kSo5ycQO15EAX-Ek0qE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCd7nsz7f0QZavppDCRc4Sv9r16MGMMlcl7NE7ypkwa0Q&oe=64C31ED7"
            alt=""
          />
        </div>
        <div className="chat_box-info">
          <p className="chat_info-name">Kepa Arrizabalaga Revueta</p>
          <p className="chat_info-status">Online</p>
        </div>
      </Link>
      <div className="check_box-main">
        <div className="message_list">
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item send">
          <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quia veritatis facere quam obcaecati culpa quisquam
                  accusamus natus libero! Maiores rem minima aliquam quae
                  delectus vero in repudiandae quod soluta.
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
          <div className="message_item receive">
            <div className="message_container">
                <Link className="message_content-avt">
                  <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg" alt="" />
                </Link>
              <div className="message_content">
                <p className="message_content-main">
                  Mới gửi!
                </p>
                <p className="message_content-public">Tin nhắn được gửi 1 phút trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat_box-footer">
        <input type="text" placeholder="Nhắn tin..." />
        <button className="send_btn">
          <i class="fa-thin fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
