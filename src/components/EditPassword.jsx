import React, { useState } from "react";
import { useEffect } from "react";
import { updatePassword } from "../utils/CRUD";

function EditPassword({ setRefeshData, axiosJWT, token }) {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [valid, setValid] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handelChange = async (e) => {
    e.preventDefault();
    setLoader(true);
    let data = {oldPass, newPass};
    const res = await updatePassword(data, axiosJWT, token);
    console.log(res);
    setError(true);
    if(res.data.code == 0) setMessage('Sai mật khẩu cũ. Vui lòng kiểm tra lại!')
    else if(res.data.code == 1) setMessage('Mật khẩu mới giống mật khẩu cũ. Vui lòng kiểm tra lại!')
    else {
        setMessage('Đổi mật khẩu thành công. Vui lòng đăng nhập lại');
        setError(false);
    }
    setOldPass('');
    setNewPass('');
    setLoader(false);
  }
  useEffect(() => {
    if(oldPass.length > 0 && newPass.length >= 6) setValid(true);
  }, [oldPass, newPass, message])
  return (
    <div className="edit_model">
        {
            message.length > 0 &&
            <p className={`message ${error ? 'failure' : '' }`}>{message}</p>
        }
      <form action="" className="edit_form">
        <div className="edit_form-item">
          <label htmlFor="">Mật khẩu cũ</label>
          <input type="text" onChange={(e) => setOldPass(e.target.value)}/>
        </div>
        <div className="edit_form-item">
          <label htmlFor="">Mật khẩu mới</label>
          <input type="text" onChange={(e) => setNewPass(e.target.value)}/>
          <p className="input_description">Mật khẩu phải có ít nhất 6 kí tự</p>
        </div>
        <div className="edit_form-btns">
          <button disabled={!valid} onClick={(e) => handelChange(e)}>
            {
                loader ? 'Đang lưu...' : 'Lưu thay đổi'
            }
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPassword;
