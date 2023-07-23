import React, { useEffect, useState } from "react";
import { updateSocials } from "../utils/CRUD";

function EditSocial({ profile, axiosJWT, token, setRefeshData }) {
  let socialNames = [
    "Website cá nhân",
    "Twitter",
    "Facebook",
    "Instagram",
    "Behance",
    "Dribbble",
  ];
  const [socials, setSocials] = useState([]);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    let socialDefault = [];
    profile.socialNetworks.map((item, idx) => {
      socialDefault.push(item);
    });
    setSocials(socialDefault);
  }, []);
  const onChange = (e, idx) => {
    let result = [...socials];
    result[idx].link = e.target.value;
    setSocials(result);
  };
  const handelChange = async (e) => {
    e.preventDefault();
    setLoader(false);
    const res = await updateSocials(socials, axiosJWT, token);
    setMessage("Cập nhật thành công");
    setRefeshData(false);
  };
  return (
    <div className="edit_model">
      {message.length > 0 && <p className="message">{message}</p>}
      <form className="edit_form">
        {socials.map((item, idx) => (
          <div className="edit_form-item" key={idx}>
            <label htmlFor="">{socialNames[idx]}</label>
            <input
              type="text"
              defaultValue={item.link}
              onChange={(e) => onChange(e, idx)}
            />
          </div>
        ))}
        <div className="edit_form-btns">
          <button onClick={(e) => handelChange(e)} disabled={loader}>
            {loader ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSocial;
