import React, { useState } from "react";
import ProjectList from "./ProjectList";
import DiscoverCollectionList from "./DiscoverCollectionList";
import ProfileAbout from "./ProfileAbout";
import { useEffect } from "react";
import { getAllCollections, getShorts } from "../utils/CRUD";
import { createVariableApi } from "../utils/createVariableApi";

function ProfileWorkSpace({ profile }) {
  let profileField = [
    "Các shorts của tôi",
    "Bộ sưu tập",
    "Các shorts đã thích",
    "Thông tin cá nhân",
  ];
  let sortList = [
    {
      name: "Tất cả",
      code: 0,
    },
    {
      name: "Yêu thích",
      code: 1,
    },
    {
      name: "Nổi bật",
      code: 2,
    },
  ];
  const [viewCase, setViewCase] = useState(0);
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [sort, setSort] = useState(0);
  useEffect(() => {
    const getData = async () => {
      let res, variable;
      switch (viewCase) {
        case 0:
          variable = createVariableApi({ idOwner: profile?._id, sort });
          res = await getShorts(variable);
          setData(res.data.reverse());
          break;
        case 1:
          variable = createVariableApi({ idOwner: profile?._id });
          res = await getAllCollections(variable);
          setData(res.data.reverse());
          break;
        case 2:
          variable = createVariableApi({ lover: profile?._id, sort });
          res = await getShorts(variable);
          setData(res.data.reverse());
          break;
        default:
          setData(profile);
          break;
      }
     
      setFetching(true);
    };
    getData();
  }, [viewCase, fetching]);
  return (
    <div className="profile_main">
      <div className="profile_workspace">
        <div className="workspace_header">
          <div className="workspace_nav">
            {profileField.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setViewCase(idx);
                  setFetching(false);
                }}
                className={`workspace_nav-item ${
                  idx === viewCase ? "active" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="workspace_sort">
            <select
              className="sort_input"
              onChange={(e) => setSort(e.target.value)}
            >
              {sortList.map((item) => (
                <option value={item.code}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="workspace_main">
          <div className="work_space">
            {fetching && (
              <>
                {viewCase === 0 && <ProjectList arr={data} />}
                {viewCase === 1 && <DiscoverCollectionList arr={data} />}
                {viewCase === 2 && <ProjectList arr={data} />}
                {viewCase === 3 && <ProfileAbout profile={profile} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWorkSpace;
