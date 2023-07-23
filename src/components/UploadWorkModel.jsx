import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getAllAddress,
  getAllCreativeField,
  postNewJobs,
  uploadFile,
} from "../utils/CRUD";
import UploadTextAreaAutoSize from "./UploadTextAreaAutoSize";
import { useNavigate } from "react-router-dom";

function UploadWorkModel({ axiosJWT, token, setOpenUploadJob }) {
  const [data, setData] = useState([]);
  const [contents, setContents] = useState([
    {
      contents: "Nhập vào đây nội dung của bạn...",
      type: 0,
    },
  ]);
  const [logo, setLogo] = useState(null);
  const [cities, setCities] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [progress, setUpdateProgress] = useState(0);
  const [select, setSelected] = useState(0);
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoader(true)
    const dataJob = {
      ...data,
      onSiteRequired: Boolean(data.onSiteRequired),
      jobType: Boolean(data.jobType),
      avtCom: logo,
      contents,
    };
    const res = await postNewJobs(dataJob, axiosJWT, token);
    navigate(`/detailwork/${res.data._id}`);
  };
  const handelUploadLogo = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    const res = await uploadFile(formData, setUpdateProgress);
    setLogo(res.data.downloadURL);
  };
  const handelAddContent = (idx) => {
    let newContents = [...contents];
    newContents.splice(idx + 1, 0, {
      contents: "Nhập vào đây nội dung của bạn...",
      type: 0,
    });
    setContents(newContents);
  };
  useEffect(() => {
    const getData = async () => {
      const resCity = await getAllAddress();
      const resCreative = await getAllCreativeField();
      setCities(resCity.data);
      setCreatives(resCreative.data);
      setFetch(false);
    };
    if (fetch) getData();
  }, []);

  return (
    <div className="upload_model">
      <div className="contents">
        <p className="contents_title">Đăng tuyển</p>
        <form
          action=""
          className="contents_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contents_form-item">
            <p className="form_item-title">Thông tin công ti của bạn</p>
            <div className="form_item-company">
              <input
                type="file"
                id="avt_company"
                onChange={(e) => handelUploadLogo(e)}
                hidden
              />
              <div className="company_avt">
                {logo != null ? (
                  <div className="company_avt-container">
                    <img src={logo} alt="" />
                  </div>
                ) : (
                  <label htmlFor="avt_company">
                    <div className="border_line">
                      {progress > 0 ? (
                        <i class="fa-solid fa-spinner-third fa-spin"></i>
                      ) : (
                        <i class="fa-regular fa-upload"></i>
                      )}
                    </div>
                  </label>
                )}
              </div>
              <div className="company_info">
                <input
                  type="text"
                  className="form_item-input"
                  placeholder="Tên công ty của bạn"
                  {...register("nameCom")}
                />
                <input
                  type="text"
                  className="form_item-input"
                  placeholder="https://"
                  {...register("siteCom")}
                />
                <label htmlFor="avt_company">Tải lên biểu trưng</label>
              </div>
            </div>
          </div>
          <div className="contents_form-item">
            <p className="form_item-title">Chi tiết công việc</p>
            <div className="form_input-list">
              <div className="form_input-item">
                <label htmlFor="">Tiêu đề</label>
                <input
                  type="text"
                  placeholder="VD: Nhà thiết kế đồ họa, làm trình viên Front-end,.."
                  {...register("name")}
                />
              </div>
              <div className="form_input-item">
                <label htmlFor="">Kiểu việc làm</label>
                <select {...register("jobType")}>
                  <option value={1}>Toàn thời gian</option>
                  <option value={0}>Làm nghề tự do</option>
                </select>
              </div>
              <div className="form_input-item">
                <label htmlFor="">Trường sáng tạo</label>
                <select {...register("creativeField")}>
                  {creatives.map((item, idx) => (
                    <option value={item._id} key={idx}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form_input-item">
                <label htmlFor="">Địa chỉ</label>
                <div className="form_input-flex">
                  <input
                    type="text"
                    placeholder="Địa chỉ cụ thể"
                    {...register("location")}
                  />
                  <select {...register("city")}>
                    {cities.map((item, idx) => (
                      <option value={item._id} key={idx}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="contents_form-item">
            <p className="form_item-title">Bài đăng công khai</p>
            <div className="form_input-list">
              <div className="form_input-item">
                <label htmlFor="">Yêu cầu làm việc tại chỗ</label>
                <select {...register("onSiteRequired")}>
                  <option value={1}>Bắt buộc</option>
                  <option value={0}>Không bắt buộc - có thể làm từ xa</option>
                </select>
              </div>
              <div className="form_input-item form_input-contents">
                <label htmlFor="">Nội dung bài đăng</label>
                {contents.map((item, idx) => (
                  <div
                    className={`form_contents-item ${
                      idx === select ? "active" : ""
                    }`}
                    key={idx}
                    onClick={() => setSelected(idx)}
                  >
                    <div className="form_contents_actions">
                      <button
                        type="button"
                        onClick={() => handelAddContent(idx)}
                      >
                        <i class="fa-regular fa-plus"></i>
                      </button>
                      <button type="button" disabled={contents.length === 1}>
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                    <div className="upload_contents">
                      <UploadTextAreaAutoSize
                        value={item.contents}
                        autoFocus={idx == contents.length - 1}
                        contents={contents}
                        setContents={setContents}
                        index={idx}
                        type={item.type}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="contents_btns">
            <button disabled={loader}>
              {
                loader ? 
                'Đang tải lên...':'Đăng công việc'
              }
            </button>
          </div>
        </form>
      </div>
      <div className="layer" onClick={() => setOpenUploadJob(false)}></div>
    </div>
  );
}

export default UploadWorkModel;
