import React from "react";
import { Link } from "react-router-dom";

function HireItem({ obj }) {
  
  return (
    <div className="hire_item">
      <div className="hire_header">
        <div className="header_avt">
          <img src={obj.urlAvt} alt="" />
        </div>
        <div className="header_info">
          <Link to={`/profile/${obj._id}`} className="header_info-name">
            {obj.name}
          </Link>
          <p className="header_info-location">{obj.address?.name}</p>
        </div>
        <div className="header_hire">
          <Link to={`/profile/${obj._id}`} className="hire_btn">
            Chi tiết
          </Link>
        </div>
      </div>
      <div className="hire_main">
        {obj.shorts.map((item, idx) => (
          <div className="hire_image" key={idx}>
            {item.length > 0 && <img src={item} alt=""  />}
          </div>
        ))}
      </div>
      <div className="hire_footer">
        <p className="hire_title">Following: </p>
        <p className="hire_value"> {obj.folllows.length}</p>
      </div>
    </div>
  );
}

export default HireItem;
