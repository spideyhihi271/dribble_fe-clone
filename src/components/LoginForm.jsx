import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/CRUD";
import { useDispatch, useSelector } from "react-redux";
import { loginClear } from "../redux/authSlice";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginState = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    login(data, dispatch, navigate);
  };
  // Clear
  useEffect(() => {
    dispatch(loginClear());
  }, []);
  return (
    <div className="login_form">
      <Link to={""} className="login_logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <p className="login_title">Chào mừng bạn trở lại</p>
        <p className="login_description">
          Chào mừng trở lại, vui lòng nhập thông tin của bạn để tiếp tục.
        </p>
        <p className={`login_error ${loginState.error ? "active" : ""}`}>
          {" "}
          Sai tài khoản hoặc mật khẩu vui lòng kiểm tra lại.
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className={`form_item ${errors.email?.message ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Đây là thông tin bắt buộc",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Email không đúng định dạng.",
                },
              })}
            />
            <p className="error_msg">{`${errors.email?.message ? errors.email?.message : "."
              }`}</p>
          </div>
          <div
            className={`form_item ${errors.password?.message ? "error" : ""}`}
          >
            <input
              type="password"
              placeholder="Mật khẩu"
              {...register("password", {
                required: "Đây là thông tin bắt buộc",
              })}
            />
            <p className="error_msg">{`${errors.password?.message ? errors.password?.message : "."
              }`}</p>
          </div>
          <div className="login_more">
            <div className="remember_check">
              <label class="container">
                <input type="checkbox" id="remember" defaultChecked="true" />
                <div class="checkmark"></div>
              </label>
              <label htmlFor="remember">Nhớ tôi</label>
            </div>
            <Link to={""} className="forgot_pass">
              Quên mật khẩu
            </Link>
          </div>
          <button type="submit" className="login_btn" disabled={loginState.fetching}>
            {loginState.fetching ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
          <p className="no_account">
            Chưa có tài khoản?{" "}
            <Link to={"/signup"} className="sign_up-link">
              Đăng kí ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
