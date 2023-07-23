import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllAddress, updateInfo, uploadFile } from "../utils/CRUD";

function EditShort({ profile, setRefeshData, axiosJWT, token }) {
  const [address, setAddress] = useState([]);
  const [urlAvt, setUrlAvt] = useState("");
  const [selected, setSelected] = useState(0);
  const [loader, setLoader] = useState(false);
  const [fetch, setFetch] = useState(true);
  const [progress, setUpdateProgress] = useState(0);
  const [message, setMessage] = useState('');
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: profile.name,
      address: profile.address?._id,
      introdution: profile.introdution,
      bio: profile.bio,
    },
  });
  const onSubmit = async (data) => {
    setLoader(true);
    data = Object.entries(data);
    let newData = data.filter((item) => item[1].length > 0);
    newData = Object.fromEntries(newData);
    if (urlAvt.length > 0) newData = { ...newData, urlAvt };
    const res = await updateInfo(newData, axiosJWT, token);
    setLoader(false);
    setMessage('Thay đổi thông tin thành công. Làm mới trong giây lát để xem thông tin mới của bạn.')
    setRefeshData(false);
  };
  const handelChangeAvt = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    const res = await uploadFile(formData, setUpdateProgress);
    setUrlAvt(res.data.downloadURL);
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getAllAddress();
      // Check selected
      res.data.map((item, idx) => {
        if(item._id === profile.address?._id) setSelected(idx)
      })
      setAddress(res.data);
      setFetch(false);
    };
    if (fetch) getData();
  });
  return (
    <div className="edit_model">
      {
        message.length > 0 && <p className="message">{message}</p>
      }
      <form action="" className="edit_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="edit_form-image">
          <div className="edit_form-firstview">
            <input
              type="file"
              id="upload_new-avt"
              hidden
              onChange={(e) => handelChangeAvt(e)}
            />
            {progress > 0 ? (
              <i class="fa-regular fa-circle-notch fa-spin"></i>
            ) : (
              <img src={urlAvt.length == 0 ? profile.urlAvt : urlAvt} alt="" />
            )}
          </div>
          <div className="edit_form-actions">
            <label htmlFor="upload_new-avt">Tải lên hình ảnh</label>
            <button>Deleted</button>
          </div>
        </div>
        <div className="edit_form-item">
          <label htmlFor="">Tên của bạn: </label>
          <input
            type="text"
            {...register("name")}
            defaultValue={profile.name}
          />
        </div>
        <div className="edit_form-item">
          <label htmlFor="">Địa chỉ</label>
          <select name="" id="" {...register("address")}>
            {address.map((item, idx) => (
              <option value={item._id} key={idx} selected={idx == selected}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="edit_form-item">
          <label htmlFor="">Giới thiệu ngắn</label>
          <textarea
            type="text"
            {...register("introdution")}
            defaultValue={profile.introdution}
          />
        </div>
        <div className="edit_form-item">
          <label htmlFor="">Bio</label>
          <textarea
            type="text"
            {...register("bio")}
            defaultValue={profile.bio}
          />
        </div>
        <div className="edit_form-btns">
          <button disabled={loader}>
            {loader ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditShort;
