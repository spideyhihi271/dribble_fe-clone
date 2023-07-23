import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginSuccess } from "../redux/authSlice";
import { deleteCollectionById, refeshToken, updateInfoCollectionById } from "../utils/CRUD";
import Model from "./Model";

function DetailCollectionHeader({ data, setChange, change }) {
  let currentUser = useSelector((state) => state.auth.login.currentAccount);
  const params = useParams();
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  let axiosJWT = axios.create();
  const dispath = useDispatch();
  // Axios interceptor
  axiosJWT.interceptors.request.use(
    async (config) => {
      let now = new Date();
      const tokenDecoded = jwtDecode(currentUser?.accessToKen);
      if (tokenDecoded.exp < now / 1000) {
        const newToken = await refeshToken(currentUser?.accessToKen);
        console.log(newToken);
        let newData = {
          ...currentUser,
          accessToKen: newToken.data.accessToKen,
        };
        dispath(loginSuccess(newData));
        config.headers["Authorization"] = `Bearer ${newToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject();
    }
  );
  // Handle Submit
  const onSubmit = async (data) => {
    const res = await updateInfoCollectionById(
      params.id,
      data,
      axiosJWT,
      currentUser.accessToKen
    );
    setChange(change + 1);
  };
  // Handle Delete 
  const onDelete = async () => {
    const res = await deleteCollectionById(
      params.id,
      axiosJWT,
      currentUser.accessToKen,
    );
    navigate('/collection');
  }
  // Check ouwner
  useEffect(() => {
    if (currentUser?._id === data.idOwner) {
      setIsOwner(true);
    }
  }, []);
  return (
    <>
      {openEdit && (
        <Model
          option={0}
          defaultValue={data}
          open={openEdit}
          setOpen={setOpenEdit}
          handleSubmitModel={onSubmit}
        />
      )}

      {openDelete && (
        <Model
          option={1}
          defaultValue={data}
          open={openDelete}
          setOpen={setOpenDelete}
          handleSubmitModel={onDelete}
        />
      )}
      <div className="detail_collection-header">
        <div className="header_name-share">
          <p className="header_name-col">{data.name}</p>
          <div className="header_share-list">
            <Link to="" className="header_share-item">
              <i class="fa-brands fa-square-facebook"></i>
              <span>Share</span>
            </Link>
            <Link to="" className="header_share-item">
              <i class="fa-brands fa-twitter"></i>
              <span>Tweet</span>
            </Link>
            <Link to="" className="header_share-item">
              <i class="fa-solid fa-link"></i>
              <span>Copy</span>
            </Link>
          </div>
        </div>
        <div className="header_more-info">
          <div className="header_info-total">
            <div className="total_short-update">
              <p>{data.shorts.length} Short </p>
              <i class="fa-solid fa-circle"></i>
              <p>Lần cập nhật cuối: {data.updated} </p>
            </div>
            <div className="total_short-description">{data.description}</div>
            <Link to={`/profile/${data.idOwner}`} className="info-owner">
              <div className="info_owner-avt">
                <img src={data.avtOwner} alt="" />
              </div>
              <p className="info_owner-name">{data.nameOwner}</p>
            </Link>
          </div>
          {isOwner && (
            <div className="header_info-actions">
              <button onClick={() => setOpenEdit(true)}>Chỉnh sửa</button>
              <button onClick={() => setOpenDelete(true)}>Xóa</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailCollectionHeader;
