import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetailShortHeader from "../components/DetailShortHeader";
import DetailShortContents from "../components/DetailShortContents";
import DetailShortFooter from "../components/DetailShortFooter";
import DetailShortAside from "../components/DetailShortSide";
import DetailShortComment from "../components/DetailShortComment";
import ProjectListWithHeader from '../components/ProjectListWithHeader';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProfileById,
  getShortById,
  getShorts,
  refeshToken,
  updateFollowing,
  updateLikeShort,
} from "../utils/CRUD";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";

function Detail() {
  const [project, setProject] = useState({});
  const [owner, setOwner] = useState({});
  const [fetch, setFetch] = useState(false);
  const [short, setShort] = useState([]);
  const [first, setFirst] = useState(true);
  const [change, setChange] = useState(0);
  const idProject = useParams().id;

  // Current Account
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const dispath = useDispatch();
  // Axios interceptor
  let axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      let now = new Date();
      const tokenDecoded = jwtDecode(currentUser?.accessToKen);
      if (tokenDecoded.exp < now / 1000) {
        const newToken = await refeshToken(currentUser?.accessToKen);
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

  const handelLike = async () => {
    const res = await updateLikeShort(
      idProject,
      axiosJWT,
      currentUser?.accessToKen
    );
    setFetch(false);
  };
  const handelFollowing = async () => {
    const res = await updateFollowing(
      owner._id,
      axiosJWT,
      currentUser?.accessToKen
    );
    setFetch(false);
  };
  useEffect(() => {
    const getData = async () => {
      const resProject = await getShortById(idProject);
      const resOwner = await getProfileById(resProject.data.idOwner);
      // console.log(resProject.data);
      // console.log(resOwner.data);
      setProject(resProject.data);
      setOwner(resOwner.data);
      setFetch(true);
    };
    if (!fetch) getData();
    const getShortByOwner = async () => {
      const res = await getShorts(`?idOwner=${owner._id}`);
      const shortFilter = res.data.filter(item => item._id != idProject);
      setShort(shortFilter);
    }
    if(first) getShortByOwner();
  }, [fetch]);
  return (
    <>
      <Header />
      <div className="wrapper">
        {fetch && (
          <div className="detail_short-flex">
            <div className="detail_short-main">
              <DetailShortHeader
                project={project}
                owner={owner}
                setProject={setProject}
                handelLike={handelLike}
                handelFollowing={handelFollowing}
                shortOfOwner={short}
              />
              <DetailShortContents project={project} />
              <DetailShortFooter owner={owner} />
              <ProjectListWithHeader arr={short} nameOwner={owner.name} link={`/profile/${owner._id}`}/>
            </div>
            <div className="detail_short-aside">
              <div className="detail_short-side">
                <DetailShortAside project={project} handelLike={handelLike}/>
                <DetailShortComment project={project} axiosJWT={axiosJWT} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
