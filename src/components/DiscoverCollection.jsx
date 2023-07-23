import React from "react";
import { Link } from "react-router-dom";
import DiscoverCollectionList from "./DiscoverCollectionList";

function DiscoverCollection({ arr }) {
  return (
    <div className="discover_collections">
      <div className="collection_header">
        <div className="header_main">
          <p className="collection_title">
            Bộ sưu tập thịnh hành để thúc đẩy ý tưởng của bạn
          </p>
          <p className="collection_description">
            Khám phá các bộ sưu tập thời thượng nhất của Freepik và tìm hình ảnh
            hoàn hảo.
          </p>
        </div>
      </div>
      <DiscoverCollectionList arr={arr} />
    </div>
  );
}

export default DiscoverCollection;
