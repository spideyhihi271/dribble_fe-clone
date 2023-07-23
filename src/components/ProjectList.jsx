import React, { useState } from "react";
import Model from "./Model";
import ProjectItem from "./ProjectItem";

function ProjectList({ arr, setChange, change }) {
  const [openModel, setOpenModel] = useState(false);
  const [selectedShort, setSelectedShort] = useState(0);
 
  return (
    <>
      {arr?.length > 0 ? (
        <>
          {openModel && (
            <Model
              option={2}
              open={openModel}
              setOpen={setOpenModel}
              handleSubmitModel={() => {}}
              varOptional={selectedShort}
              setChange={setChange}
              change={change}
            />
          )}
          <div className="project_list">
            {arr?.map((item, idx) => (
              <ProjectItem
                key={idx}
                obj={item}
                setOpenModel={setOpenModel}
                setSelectedShort={setSelectedShort}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="not_have-value">
          Không có gì để hiển thị. Vui lòng kiểm tra lại sau.
        </p>
      )}
    </>
  );
}

export default ProjectList;
