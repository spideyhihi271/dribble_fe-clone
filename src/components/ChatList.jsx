import React from "react";
import { Link } from "react-router-dom";

function ChatList() {
  return (
    <div className="chat_list">
      <div className="chat_list-header">
        <div className="chat_nav">
          <p className="chat_title">Tin nhắn</p>
          <button className="chat_new-btn">
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
        </div>
        <div className="search_box">
          <button>
            <i class="fa-thin fa-magnifying-glass"></i>
          </button>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
      </div>
      <div className="chat_list-main">
          <Link to={''} className="chat-list-item">
              <div className="chat_item-aside">
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/193213826_187238719961746_4364778621606328177_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kSo5ycQO15EAX-Ek0qE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCd7nsz7f0QZavppDCRc4Sv9r16MGMMlcl7NE7ypkwa0Q&oe=64C31ED7" alt="" />
              </div>
              <div className="chat_item-main">
                  <div className="chat_main-content">
                      <p className="chat_name">Kepa Arrizabalaga Revuelta</p>
                      <div className="chat_content">
                          <p className="chat_lasted">Gửi cho tôi bản thiết kế mới nhất ngay nhé</p>
                          <i class="fa-solid fa-circle"></i>
                          <p className="chat_public">1 phút trước</p>
                      </div>
                  </div>
              </div>
          </Link>
          <Link to={''} className="chat-list-item">
              <div className="chat_item-aside">
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/193213826_187238719961746_4364778621606328177_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kSo5ycQO15EAX-Ek0qE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCd7nsz7f0QZavppDCRc4Sv9r16MGMMlcl7NE7ypkwa0Q&oe=64C31ED7" alt="" />
              </div>
              <div className="chat_item-main">
                  <div className="chat_main-content">
                      <p className="chat_name">Kepa Arrizabalaga Revuelta</p>
                      <div className="chat_content">
                          <p className="chat_lasted">Gửi cho tôi bản thiết kế mới nhất ngay nhé</p>
                          <i class="fa-solid fa-circle"></i>
                          <p className="chat_public">1 phút trước</p>
                      </div>
                  </div>
              </div>
          </Link>
          <Link to={''} className="chat-list-item">
              <div className="chat_item-aside">
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/193213826_187238719961746_4364778621606328177_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kSo5ycQO15EAX-Ek0qE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCd7nsz7f0QZavppDCRc4Sv9r16MGMMlcl7NE7ypkwa0Q&oe=64C31ED7" alt="" />
              </div>
              <div className="chat_item-main">
                  <div className="chat_main-content">
                      <p className="chat_name">Kepa Arrizabalaga Revuelta</p>
                      <div className="chat_content">
                          <p className="chat_lasted">Gửi cho tôi bản thiết kế mới nhất ngay nhé</p>
                          <i class="fa-solid fa-circle"></i>
                          <p className="chat_public">1 phút trước</p>
                      </div>
                  </div>
              </div>
          </Link>
      </div>

    </div>
  );
}

export default ChatList;
