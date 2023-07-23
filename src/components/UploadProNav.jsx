import React, { useState } from "react";

function UploadProNav({ openNav, setOpenNav, setContents, contents, }) {
  let butList = [
    {
      icon: "fa-solid fa-image",
      title: "Hình ảnh",
    },
    {
      icon: "fa-solid fa-font",
      title: "Tiêu đề",
    },
    {
      icon: "fa-solid fa-quote-left",
      title: "Đoạn văn bản",
    },
  ];
  const handelClick = (idx) => {
    let result = {
      contents: null,
      type: 0,
    };
    if (idx > 0)
      result = {
        contents: `${
          idx == 1
            ? "Nhập vào đây tiêu đề của bạn..."
            : "Nhập vào đây nội dung của bạn.."
        }`,
        type: idx,
      };
    let newContent = contents;
    newContent.push(result);
    setOpenNav(false);
    setContents(newContent);
  };

  return (
    <div className={`upload_pro-nav ${openNav ? "active" : ""}`}>
      <div className="upload_pro-content">
        <button className="close_model" onClick={() => setOpenNav(false)}>
          Đóng
        </button>
        <p className="model_title">Chèn khối</p>
        <div className="block_list">
          {butList.map((item, idx) => (
            <button
              className="block_item-btn"
              key={idx}
              onClick={() => handelClick(idx)}
            >
              <i class={item.icon}></i>
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="upload_pro-layer" onClick={() => setOpenNav(false)}></div>
    </div>
  );
}

export default UploadProNav;
