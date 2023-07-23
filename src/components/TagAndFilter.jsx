import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createVariableApi } from "../utils/createVariableApi";
import { useEffect } from "react";
import { getAllTags } from "../utils/CRUD";

function TagAndFilter({ setVariable }) {
  const [keyword, setKeyword] = useState("");
  const [timeframe, setTimeframe] = useState(0);
  const [hex, setHex] = useState("");
  const [view, setView] = useState(0);
  const [sort, setSort] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [creative, setCreative] = useState("");
  const timeFrames = ["Loại hiển thị", "Ngày này", "Tháng này", "Năm này"];
  const views = [
    "Loại hiển thị",
    "Đang theo dõi",
    "Phổ biến",
    "Mới và đáng chú ý",
  ];
  const sorts = [
    "Sắp xếp theo",
    "Lượt xem nhiều nhất",
    "Được yêu thích nhiều nhất",
  ];
  const handelSubmit = (e) => {
    e.preventDefault();
    let data = {
      keyword,
      timeframe,
      sort,
      hex,
      view,
    };
    let variable = createVariableApi(data);
    setVariable(variable);
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getAllTags();
      setTagList(res.data.slice(0, 18));
    };
    getData();
  }, []);
  return (
    <div className="tagandfilter_container">
      <div className="tag_container">
        <p className="tag_title">
          Tất cả nội dung bạn cần, <span>ở một nơi</span>
        </p>
        <p className="tag_description">
          <b>+10.000</b> của công việc thiết kế tốt nhất, thiết kế, minh họa và
          các yếu tố đồ họa.
        </p>
        <ul className="tags_list">
          {tagList.map((item, idx) => (
            <li
              className="tags_item"
              key={idx}
              onClick={() => setCreative(item._id)}
            >
              <div className="tag_item-link">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter_container">
        <form className="filter_form" onSubmit={handelSubmit}>
          <div className="filter_list">
            <div className="filter_item fisrt">
              <label htmlFor="" className="filter_item-lable">
                <div className="filter_lable-icon">
                  <i class="fa-regular fa-grid-2"></i>
                </div>
                <span className="filter_lable-title">Bộ lọc</span>
              </label>
              <div className="filter_input-container">
                <input
                  type="text"
                  placeholder="Nhập để tìm kiếm"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">
                  <i class="fa-regular fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div className="filter_item">
              <label htmlFor="" className="filter_item-lable">
                <div className="filter_lable-icon">
                  <i class="fa-regular fa-clock"></i>
                </div>
                <span className="filter_lable-title">Thời gian</span>
              </label>
              <div className="filter_input-container">
                <select
                  name="timeframe"
                  id="timeframe"
                  onChange={(e) => setTimeframe(e.target.value)}
                >
                  {timeFrames.map((item, idx) => (
                    <option key={idx} value={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="filter_item">
              <label htmlFor="" className="filter_item-lable">
                <div className="filter_lable-icon">
                  <i class="fa-regular fa-droplet"></i>
                </div>
                <span className="filter_lable-title">Màu sắc</span>
              </label>
              <div className="filter_input-container">
                <input
                  type="text"
                  placeholder="Nhập vào mã hex"
                  onChange={(e) => setHex(e.target.value)}
                />
              </div>
            </div>
            <div className="filter_item">
              <label htmlFor="" className="filter_item-lable">
                <div className="filter_lable-icon">
                  <i class="fa-regular fa-eye"></i>
                </div>
                <span className="filter_lable-title">Hiển thị</span>
              </label>
              <div className="filter_input-container">
                <select
                  name="view"
                  id="view"
                  onChange={(e) => setView(e.target.value)}
                >
                  {views.map((item, idx) => (
                    <option key={idx} value={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="filter_item">
              <label htmlFor="" className="filter_item-lable">
                <div className="filter_lable-icon">
                  <i class="fa-sharp fa-light fa-sort"></i>
                </div>
                <span className="filter_lable-title">Sắp xếp</span>
              </label>
              <div className="filter_input-container">
                <select
                  name="sort"
                  id="sort"
                  onChange={(e) => setSort(e.target.value)}
                >
                  {sorts.map((item, idx) => (
                    <option key={idx} value={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TagAndFilter;
