import React from "react";

function UploadLoader({ progress }) {
  console.log(progress);
  return (
    <div className="upload_input-loader">
      <div className="container">
        <div class="loader"></div>
        <div className="progress">
          <div
            className="progress_line"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UploadLoader;
