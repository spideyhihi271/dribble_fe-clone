import React from "react";
import DiscoverCollectionItem from "./DiscoverCollectionItem";

function DiscoverCollectionList({arr}) {
  return (
    <div className="collection_list">
      {
        arr.map((item, idx )=> (
          <DiscoverCollectionItem key={idx} obj={item}/>
        ))
      }
    </div>
  );
}

export default DiscoverCollectionList;
