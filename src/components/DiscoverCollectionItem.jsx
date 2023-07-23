import React from "react";
import { Link } from "react-router-dom";
import { formatUnit } from "../utils/formatUnit";

function DiscoverCollectionItem({ obj }) {
  let imageList = [0, 1, 2, 3];
  return (
    <Link to={`/collection/${obj._id}`} className="collection_item">
      <div className="colllection_shot-list">
        {imageList.map((item, idx) => (
          <div className="collection_shot-item" key={idx}>
            <img src={obj.shorts[idx] ? obj.shorts[idx].image : '' } />
          </div>
        ))}
      </div>
      <div className="collection_info">
        <p className="collection_name">{obj.name}</p>
        <div className="collection_total">
          <p className="collection_value"> {formatUnit(obj.shorts.length) } Short </p>
          <i class="fa-solid fa-circle"></i>
          <p className="collection_value"> {obj.nameOwner} </p>
        </div>
      </div>
    </Link>
  );
}

export default DiscoverCollectionItem;
