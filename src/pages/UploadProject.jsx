import React, { useEffect, useState } from "react";
import UploadProHeader from "../components/UploadProHeader";
import UploadProMain from "../components/UploadProMain";
import UploadProNav from "../components/UploadProNav";
import UploadProModel from "../components/UploadProModel";
function UploadProject() {
  const [openNav, setOpenNav] = useState(false);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [contents, setContents] = useState([
    {
      contents: null,
      type: 0,
    },
  ]);
  const [finalModel, setFinalModel] = useState(false);
  const [render, setRender] = useState(true);
  useEffect(() => {
    setRender(true);
  }, [contents, render]);
  return (
    <div className="upload_project">
      <UploadProHeader
        setFinalModel={setFinalModel}
        contents={contents}
        name={name}
      />
      {render && (
        <UploadProMain
          setOpenNav={setOpenNav}
          setName={setName}
          contents={contents}
          update={update}
          setContents={setContents}
          setRender={setRender}
        />
      )}
      <UploadProNav
        openNav={openNav}
        setOpenNav={setOpenNav}
        setContents={setContents}
        contents={contents}
        setUpdate={setUpdate}
      />
      {finalModel && (
        <UploadProModel
          setOpenModel={setFinalModel}
          name={name}
          contents={contents}
        />
      )}
    </div>
  );
}

export default UploadProject;
