import React from "react";
import { Link } from "react-router-dom";

function DiscoverCategory({ arr }) {
  return (
    <div className="discover_category">
      <div className="discover_header">
        <p className="header_title">
          <span>Các bộ sưu tập được đề xuất </span> để duy trì cảm hứng cho bạn
        </p>
        <p className="header_description">
          Đi trước đường con sáng tạo với các danh mục tùy chỉnh phù hợp với sở
          thích của bạn.
        </p>
      </div>
      <div className="discover_cate-list">
        {arr.map((item, idx) => (
          <Link to={`/collection/${item._id}`} className="discover_cate-item" key={idx}>
            <div className="discover_cate-bg">
              <img
                src={item.shorts[0]?.image}
                alt=""
              />
            </div>
            <div className="discover_cate-name">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DiscoverCategory;
