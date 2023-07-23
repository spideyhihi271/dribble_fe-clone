import React from "react";

function Loader({ loader }) {
  return (
    <div className={`loader_layer ${loader ? "active" : ""}`}>
      <div className="loader_container">
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default Loader;
