import React, { useEffect, useState } from "react";
import { deleteElement, swapElement } from "../utils/ArrayOperation";
import { uploadFile } from "../utils/CRUD";
import { scrollingToBottom } from "../utils/scrollingToBottom";
import UploadLoader from "./UploadLoader";
import UploadTextAreaAutoSize from "./UploadTextAreaAutoSize";

function UploadProMain({ setOpenNav, setName, contents, update, setContents, setRender }) {
  const [selected, setSelected] = useState(null);
  const [progress, setUpdateProgress] = useState(0);
  useEffect(() => {
    if (!update) scrollingToBottom();
  }, [contents]);
  const handelChangeFile = async (e, idx) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    const res = await uploadFile(formData, setUpdateProgress);
    handelChangeContents(
      {
        contents: res.data.downloadURL,
        type: 0,
      },
      idx
    );
  };
  const handelChangeContents = (data, idx) => {
    let arr = [...contents];
    arr[idx] = data;
    setContents(arr);
  };
  const handelSwap = (idx, option) => {
    setRender(false);
    const newContents = [...contents]; 
    const result = swapElement(newContents, idx, option);
    setContents(result);
  };
  const handelDeleted = (idx) => {
    const newContents = [...contents];
    const result = deleteElement(newContents, idx);
    setContents(result);
  }
  return (
    <>
      <div className="upload_pro-main">
        <div className="upload_pro-name">
          <input type="text" placeholder="Cho tôi một cái tên" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="upload_input-list">
          {contents.map((item, idx) => (
            <div
              className={`upload_input-item ${
                selected === idx ? "active" : ""
              }`}
              key={idx}
            >
              {idx != 0 && (
                <div className="input_item-actions">
                  <button
                    className="actions_item"
                    onClick={() => handelSwap(idx, 0)}
                    disabled={idx == 1}
                  >
                    <i class="fa-light fa-arrow-up"></i>
                  </button>
                  <button
                    className="actions_item"
                    onClick={() => handelSwap(idx, 1)}
                    disabled={idx == contents.length - 1}
                  >
                    <i class="fa-light fa-arrow-down"></i>
                  </button>
                  <div className="actions_line"></div>
                  <button className="actions_item" onClick={() => handelDeleted(idx)}>
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              )}
              {item.type == 0 ? (
                <>
                  {progress > 0 ? (
                    <>
                      <UploadLoader progress={progress} />
                    </>
                  ) : (
                    <>
                      <div className="upload_input-type1">
                        <input
                          type="file"
                          hidden
                          id={`image_uploader-${idx}`}
                          className="image_uploader"
                          onChange={(e) => handelChangeFile(e, idx)}
                        />
                        {item.contents != null ? (
                          <img
                            onClick={() => setSelected(idx)}
                            className="image_uploader-firstview"
                            src={item.contents}
                            alt=""
                          />
                        ) : (
                          <label
                            htmlFor={`image_uploader-${idx}`}
                            className="bg"
                          >
                            <div className="notice">
                              <div className="notice_icon">
                                <img
                                  src="https://dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png"
                                  alt=""
                                />
                              </div>
                              <p className="notice_content title">
                                Tải hình ảnh lên. <span>Duyệt qua</span>
                              </p>
                              <p className="notice_content normal">
                                Nên sử dụng hình ảnh có chiều rộng 1600px. Để có
                                chất lượng tốt nhất
                              </p>
                              <div className="notice_content-list">
                                <p className="content_item">
                                  Hình ảnh có độ phân giải cao
                                </p>
                                <p className="content_item">
                                  Hình ảnh có độ phân giải cao
                                </p>
                                <p className="content_item">
                                  Hình ảnh có độ phân giải cao
                                </p>
                                <p className="content_item">
                                  Hình ảnh có độ phân giải cao
                                </p>
                              </div>
                            </div>
                          </label>
                        )}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div
                  className="upload_input-type2"
                  onClick={() => setSelected(idx)}
                >
                  <UploadTextAreaAutoSize
                    value={item.contents}
                    autoFocus={idx == contents.length - 1}
                    contents={contents}
                    setContents={setContents}
                    index={idx}
                    type={item.type}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="add_block-btn" onClick={() => setOpenNav(true)}>
        <div className="line"></div>
        <div className="content">
          <button>Thêm một khối mới</button>
        </div>
      </div>
    </>
  );
}

export default UploadProMain;
