import React from "react";

function EditProfileNav({ caseView, setCaseView }) {
  const editFields = [
    "Chỉnh sửa hồ sơ",
    "Mật khẩu",
    "Hồ sơ xã hội",
  ];
  return (
    <div className="edit_profile-nav">
      {editFields.map((item, idx) => (
        <button
          key={idx}
          className={`nav_item ${idx == caseView ? "active" : ""}`}
          onClick={() => setCaseView(idx)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default EditProfileNav;
