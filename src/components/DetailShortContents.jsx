import React from "react";

function DetailShortContents({ project }) {
  return (
    <div className="detail_short-contents">
      {project.contents.map((item, idx) => (
        <div className="contents_item" key={idx}>
          {item.type == 0 ? (
            <div className="contents_image">
              <img
                src={item.contents}
                alt=""
              />
            </div>
          ) : (
            <div className="contents_item">
              <p className={`content_item-normal ${item.type == 1 ? 'title' : ''}`}>{item.contents}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DetailShortContents;
