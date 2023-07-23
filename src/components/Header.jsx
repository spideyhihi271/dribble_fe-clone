import React from "react";
import UpdateMySettingsJob from "./updateMySettingsJob";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const loginState = useSelector((state) => state.auth.login);
  const avtNotLogger =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png";
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      {openModel && (
        <UpdateMySettingsJob
          id={loginState.currentAccount?._id}
          setOpenModel={setOpenModel}
        />
      )}
      <div className="header_lg-container">
        <div className="header_logo">
          <Link to={"/"} className="header_logo-link">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
              alt=""
            />
          </Link>
        </div>
        <div className="header_logo-nav">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to={"/"} className="nav_item-link">
                Dành cho bạn
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/collection"} className="nav_item-link">
                Bộ sưu tập
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/findwork"} className="nav_item-link">
                Công việc
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/hire"} className="nav_item-link">
                Thuê Designer
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_logo-search">
          <form className="search_container">
            <button className="search_btn">
              <i class="fa-regular fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              className="search_input"
              placeholder="Tìm kiếm..."
            />
            <button type="reset" className="search_clear">
              <i class="fa-regular fa-xmark"></i>
            </button>
          </form>
        </div>
        {loginState.currentAccount != null ? (
          <>
            <div className="header_logo-actions">
              <div className="actions_list">
                <div className="actions_item">
                  <Link className="actions_link" to={"/apply"}>
                    <i class="fa-regular fa-briefcase-blank"></i>
                  </Link>
                </div>
                <div className="actions_item">
                  <Link className="actions_link">
                    <i class="fa-regular fa-heart"></i>
                  </Link>
                </div>
                <div className="actions_item">
                  <Link className="actions_link" to={"/chat"}>
                    <i class="fa-regular fa-envelope"></i>
                  </Link>
                </div>
                <div className="actions_item action_logger">
                  <div className="action_logger-lable">
                    <img src={loginState.currentAccount.urlAvt} alt="" />
                  </div>
                  <div className="action_logger-nav">
                    <div className="logger_nav-info">
                      <Link className="logger_info-avt">
                        <div className="outline">
                          <img src={loginState.currentAccount.urlAvt} alt="" />
                        </div>
                      </Link>
                      <p className="logger_username">
                        {loginState.currentAccount.name}
                      </p>
                      <p className="loggger_email">
                        {loginState.currentAccount.email}
                      </p>
                    </div>
                    <ul className="logger_nav-list">
                      <li className="logger_nav-item">
                        <Link
                          to={`/profile/${loginState.currentAccount._id}`}
                          className="logger_nav-link"
                        >
                          Thông tin của tôi
                        </Link>
                      </li>
                      <li className="logger_nav-item">
                        <div className="logger_nav-link" onClick={() => setOpenModel(true)}>
                          Sở thích công viêc
                        </div>
                      </li>
                      <li className="logger_nav-item">
                        <Link className="logger_nav-link">Cài đặt</Link>
                      </li>
                      <li className="logger_nav-item">
                        <Link className="logger_nav-link">Trợ giúp</Link>
                      </li>
                    </ul>
                    <ul className="logger_nav-list">
                      <li className="logger_nav-item">
                        <Link className="logger_nav-link" to={"/login"}>
                          Đăng xuất
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="actions_item action_upload">
                  <Link to={"/uploadproject"} className="upload_but">
                    Upload
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header_logo-notlog">
              <Link to={"/login"} className="notlog_log-btn btn">
                {" "}
                <span>Đăng nhập</span>
              </Link>
              <i class="fa-solid fa-circle"></i>
              <Link to={"/signup"} className="notlog_sign-btn btn">
                <span>Đăng kí</span>
              </Link>
              <Link to={"/hire"} className="notlog_hire-btn btn">
                <span>Thuê Designer</span>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="header_small-container">
        <div className="header_sml-nav">
          <div className="header_nav-item">
            <div className="header_nav-sidebar">
              <input type="checkbox" hidden id="sidebar_active" />
              <label htmlFor="sidebar_active">
                <i class="fa-regular fa-bars active"></i>
                <i class="fa-regular fa-xmark unactive"></i>
              </label>
              <div className="sidebar_container">
                <div className="sidebar_nav-list">
                  <Link to={"/"} className="sidebar_nav-item">
                    Dành cho bạn
                  </Link>
                  <Link to={"/collection"} className="sidebar_nav-item">
                    Bộ sưu tập
                  </Link>
                  <Link to={"/findwork"} className="sidebar_nav-item">
                    Công việc
                  </Link>
                  <Link to={"/hire"} className="sidebar_nav-item">
                    Thuê Designer
                  </Link>
                </div>
                <label
                  htmlFor="sidebar_active"
                  className="sidebar_nav-layer"
                ></label>
              </div>
            </div>
            <div className="header_nav-logo">
              <Link to={""} className="nav_logo-item">
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="header_nav-item">
            <Link to={""} className="header_nav-search">
              <i class="fa-regular fa-magnifying-glass"></i>
            </Link>
            <div className="header_nav-user">
              <input type="checkbox" id="user_sml" hidden />
              <label htmlFor="user_sml" className="user_sml-lable">
                <img
                  src={
                    loginState.currentAccount == null
                      ? avtNotLogger
                      : loginState.currentAccount.urlAvt
                  }
                  alt=""
                />
              </label>
              <div className="user_nav-container">
                <div className="user_nav-list">
                  <div className="user_nav-info">
                    <Link
                      className="user_info-container"
                      to={`${
                        !loginState.currentAccount
                          ? "/login"
                          : `/profile/${loginState.currentAccount._id}`
                      }`}
                    >
                      <div className="user_info-avt">
                        <img
                          src={
                            loginState.currentAccount == null
                              ? avtNotLogger
                              : loginState.currentAccount.urlAvt
                          }
                          alt=""
                        />
                      </div>
                      <p className="user_info-name">
                        {!loginState.currentAccount
                          ? ""
                          : loginState.currentAccount.name}
                      </p>
                    </Link>
                    <Link
                      className="upload_pro-link"
                      to={`${
                        !loginState.currentAccount ? "/login" : "/uploadproject"
                      }`}
                    >
                      <span>{`${
                        !loginState.currentAccount ? "Đăng nhập" : "Tải lên"
                      }`}</span>
                    </Link>
                  </div>
                  <div className="user_link-list">
                    {!loginState.currentAccount ? (
                      <>
                        <Link to={"/hire"} className="user_link-item">
                          Thuê Designer
                        </Link>
                        <Link to={"/signup"} className="user_link-item">
                          Đăng kí
                        </Link>
                        <Link to={"/login"} className="user_link-item">
                          Đăng nhập
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link  to={`/profile/${loginState.currentAccount._id}`} className="user_link-item">
                          Thông tin của tôi
                        </Link>
                        <div className="user_link-item" onClick={() => setOpenModel(true)}>
                          Sở thích công việc
                        </div>
                        <Link to={""} className="user_link-item">
                          Cài đặt
                        </Link>
                        <Link to={""} className="user_link-item">
                          Trợ giúp
                        </Link>
                        <Link to={"/login"} className="user_link-item">
                          Đăng xuất
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <label htmlFor="user_sml" className="user_nav-layer"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
