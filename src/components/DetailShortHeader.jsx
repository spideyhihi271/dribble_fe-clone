import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Model from "./Model";

function DetailShortHeader({ project, owner, handelLike, handelFollowing, shortOfOwner }) {
  const [openModel, setOpenModel] = useState(false);
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);
  const [change, setChange] = useState(0);
  const [loaderLike, setLoaderLike] = useState(false);
  const [loaderFollow, setLoaderFollow] = useState(false);
  const currentUser = useSelector((state) => state.auth.login.currentAccount);

  useEffect(() => {
    // Check save
    const wasLike = project.likes?.includes(currentUser?._id);
    setLike(wasLike);
    // Check follow
    const wasFollow = owner.folllows?.includes(currentUser?._id);
    setFollow(wasFollow);
  }, []);
  return (
    <>
      {openModel && (
        <Model
          option={2}
          open={openModel}
          setOpen={setOpenModel}
          handleSubmitModel={() => {}}
          varOptional={project._id}
          setChange={setChange}
          change={change}
        />
      )}
      <div className="detail_short-header">
        <div className="detail_short_info">
          <div className="detail_short-avt">
            <div className="avt_container">
              <img src={owner.urlAvt} alt="" />
            </div>
            <div className="avt_container-hover">
              <div className="hover_header">
                <div className="hover_info">
                  <div className="hover_avt">
                    <img src={owner.urlAvt} alt="" />
                  </div>
                  <div className="hover_info-owner">
                    <p className="hover_info-name">{owner.name}</p>
                    <p className="hover_info-address">{owner.address?.name}</p>
                  </div>
                </div>
                <button
                  className="hover_follow"
                  onClick={async () => {
                    setLoaderFollow(true)
                    await handelFollowing()
                    setLoaderFollow(false)
                  }}
                >
                  {
                    loaderFollow && <i class="fa-brands fa-dribbble fa-bounce"></i>
                  }
                  <span>
                    {
                      follow ? 'Đang theo dõi' : 'Theo dõi'
                    } 
                  </span>
                  
                </button>
              </div>
              <div className="hover_short-list">
                {shortOfOwner.slice(0,3).map((item, idx) => (
                  <div className="short_item" key={idx}>
                    <img src={item?.contents[0].contents} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="detail_info-contents">
            <p className="info_short-name">{project.name}</p>
            <div className="info_short-more">
              <Link to={""} className="info_more nameOwner">
                {owner.name}
              </Link>
              <i class="fa-duotone fa-circle"></i>
              <button
                className="info_more fl"
                onClick={() => {
                  handelFollowing()
                }}
              >
                 {
                    loaderFollow && <i class="fa-brands fa-dribbble fa-bounce"></i>
                  }
                  <span>
                    {
                      follow ? 'Đang theo dõi' : 'Theo dõi'
                    } 
                  </span>
              </button>
              <i class="fa-duotone fa-circle"></i>
              <button className="info_more hire">Hire Me</button>
            </div>
          </div>
        </div>
        <div className="detail_short_btns">
          <button onClick={() => setOpenModel(true)}>Lưu</button>
          <button
            className={`like_btn ${like ? "active" : ""}`}
            onClick={async () => {
              setLoaderLike(true);
              await handelLike();
              setLoaderLike(false);
            }}
          >
            {loaderLike ? (
              <>
                <i class="fa-regular fa-circle-notch fa-spin"></i>
              </>
            ) : (
              <>
                <i class="fa-solid fa-heart"></i>
                {like ? project.likes.length : "Thích"}
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailShortHeader;
