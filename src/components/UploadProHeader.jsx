import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadProHeader({ setFinalModel, contents, name }) {
  const [canUpload, setCanUpload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let valid = true;
    if (name.length == 0) valid = false;
    contents.map((item) => {
      if (item.contents == null || item.contents.length == 0) valid = false;
    });
    setCanUpload(valid);
  }, [contents, name]);
  return (
    <div className="upload_pro-header">
      <button className="upload_btn-cancel" onClick={() => navigate('/')}>Hủy</button>
      <button className="upload_btn-save" disabled={!canUpload} onClick={() => setFinalModel(true)}>
        Tiếp tục
      </button>
    </div>
  );
}

export default UploadProHeader;
