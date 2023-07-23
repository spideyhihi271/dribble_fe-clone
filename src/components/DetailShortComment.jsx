import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCommentByIdShort, postNewComment } from "../utils/CRUD";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";

function DetailShortComment({ project, axiosJWT }) {
  const [comments, setComments] = useState([]);
  const [loaderComment, setLoaderComment] = useState(false);
  const [content, setContents] = useState("");
  const [fetch, setFetch] = useState(false);
  const [validComment, setValidComment] = useState(false);
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const handelComment = async () => {
    setLoaderComment(true);
    const res = await postNewComment(
      { 
        idShort: project._id, content },
      axiosJWT,
      currentUser?.accessToKen
    );
    setLoaderComment(false);
    setContents('');
    setFetch(false)
  };

  useEffect(() => {
    // Check Content
    if (content.length > 1 && currentUser != null) setValidComment(true);
    // Get Data
    const getData = async () => {
      const res = await getCommentByIdShort(project._id);
      setComments(res.data);
      setFetch(true);
    };
    if (!fetch) getData();
  }, [fetch, content]);
  return (
    <div className="detail_short-comments">
      <p className="detail_short-title">Feedback</p>
      <div className="detail_comment-box">
        <div className="comment-content">
          <TextareaAutosize
            className="input"
            placeholder={"Hãy cho chúng tôi biết suy nghĩ của bạn..."}
            onChange={(e) => setContents(e.target.value)}
            minRows={1}
            maxRows={10}
          />
        </div>
        <div className="comment-btns">
          <button onClick={() => handelComment()} disabled={!validComment}>
            {loaderComment ? "Đang đăng..." : "Đăng bình luân"}
          </button>
        </div>
      </div>
      <div className="comment_list">
        {comments.map((item, idx) => (
          <div className="comment_item" key={idx}>
            <Link to={`/profile/${item.idOwner}`} className="comment_avt">
              <img src={item.avtOwner} alt="" />
            </Link>
            <div className="comment_info">
              <p className="comment_info-owner">{item.nameOwner}</p>
              <p className="comment_contents">{item.content}</p>
              <p className="comment_public">{item.public}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailShortComment;
