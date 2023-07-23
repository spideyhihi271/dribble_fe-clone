import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../utils/CRUD";
import { useEffect } from "react";
import { loginClear, registerClear } from "../redux/authSlice";

function Signupform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerState = useSelector((state) => state.auth.register);
  const loginState =  useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    signup(data, dispatch, navigate);
  };
  useEffect(() => {
    dispatch(registerClear());
    dispatch(loginClear());
  },[])
  return (
    <div className="signup_form">
      <Link to={""} className="login_logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <p className="login_title">Đăng kí tài khoản mới</p>
        <p className="login_description">
          Đăng kí tài khoản để tiếp tục sử dụng các dịch vụ của chúng tôi.
        </p>
        <p className={`login_error ${registerState.error ? "active" : ""}`}>
            Địa chỉ email đã được sử dụng. Vui lòng sử dụng email khác.
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className={`form_item ${errors.name?.message ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Tên của bạn"
              {...register("name", {
                required: "Đây là thông tin bắt buộc",
              })}
            />
            <p className="error_msg">{`${
              errors.name?.message ? errors.name?.message : "."
            }`}</p>
          </div>
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
            <p className="error_msg">{`${
              errors.email?.message ? errors.email?.message : "."
            }`}</p>
          </div>
          <div
            className={`form_item ${errors.password?.message ? "error" : ""}`}
          >
            <input
              type="text"
              placeholder="Mật khẩu"
              {...register("password", {
                required: "Đây là thông tin bắt buộc",
                minLength: {
                  value: 6,
                  message: "Độ dài mật khẩu phải từ 8 kí tự",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Mật khẩu phải có ít nhất một chữ cái và một số",
                },
              })}
            />
            <p className="error_msg">{`${
              errors.password?.message ? errors.password?.message : "."
            }`}</p>
          </div>
          <button type="submit" className="login_btn" disabled={registerState.fetching || loginState.fetching}>
            {registerState.fetching || loginState.fetching ? 'Vui lòng chờ...' : 'Đăng kí'}
          </button>
          <p className="no_account">
            Đã có tài khoản?
            <Link to={"/login"} className="sign_up-link">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signupform;
