import React from "react";
import TextareaAutosize from "react-textarea-autosize";

function UploadTextAreaAutoSize({
  value,
  setContents,
  contents,
  index,
  type,
  autoFocus,
}) {
  const onChange = (e) => {
    let arr = [...contents];
    arr[index] = {
      contents: e.target.value,
      type,
    };
    setContents(arr)
  };
  return (
    <>
      <TextareaAutosize
        className="text_area"
        placeholder={value}
        onChange={(e) => onChange(e)}
        minRows={1}
        maxRows={10}
        autoFocus={autoFocus}
      />
    </>
  );
}

export default UploadTextAreaAutoSize;
