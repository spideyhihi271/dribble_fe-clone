import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Model from "./Model";

function DetailSideHeader({project, handelLike}) {
  const [change, setChange] = useState(0)
  const [like, setLike] = useState(false);
  const [loaderLike, setLoaderLike] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const currentUser = useSelector(state => state.auth.login.currentAccount);
  useEffect(() => {
    // Check save
    const wasLike = project.likes?.includes(currentUser?._id);
    setLike(wasLike);
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
    <div className="detail_side-header">
      <div className="side_header-btns">
        <button onClick={() => setOpenModel(true)}>
          <i class="fa-solid fa-folder-plus"></i>
        </button>
        <button className={like ? 'active' : ''} onClick={ async () => {
           setLoaderLike(true);
           await handelLike();
           setLoaderLike(false);
        }}>
          {
            loaderLike ? <i class="fa-solid fa-circle-notch fa-spin"></i> : <i class="fa-sharp fa-solid fa-heart"></i>
          }
        </button>
      </div>
      <div className="side_header-btns">
        <button>
          <i class="fa-solid fa-diamond-exclamation"></i>
          Chi tiết
        </button>
      </div>
    </div>
    </>
    
  );
}

export default DetailSideHeader;
