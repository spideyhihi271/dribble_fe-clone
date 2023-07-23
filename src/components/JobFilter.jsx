import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createVariableApi } from "../utils/createVariableApi";

function JobFilter({ setVariable, cities, creativeFields }) {
  // Default
  const caseView = ["Full-time", "Freelance"];
  const [select, setSelect] = useState(1);
  const [filter, setFilter] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilter(data);
  };
  // Effect
  useEffect(() => {
    // Handle
    const handelChange = () => {
      let filterVariable = createVariableApi({ ...filter, type: select });
      setVariable(filterVariable);
    };
    handelChange();
  }, [select, filter]);
  return (
    <div className="job_filter">
      <div className="job_type-list">
        {caseView.map((item, idx) => (
          <div
            className={`job_type-item ${select === idx + 1 ? "active" : ""}`}
            onClick={() => setSelect(idx + 1)}
          >
            {item}
          </div>
        ))}
      </div>
      <form className="job_search" onSubmit={handleSubmit(onSubmit)}>
        <div className="job_search-keyword">
          <button className="search_but">
            <i class="fa-regular fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            placeholder="Tìm việc theo từ khóa"
            {...register("keyword")}
          />
        </div>
        <div className="job_search-location">
          <select className="job_select-input" {...register("city")}>
            <option value={0}>Tất cả</option>
            {cities.map((item) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="job_search-career">
          <select className="job_select-input" {...register("creativeField")}>
            <option value={0}>Tất cả</option>
            {creativeFields.map((item) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default JobFilter;
