import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import { useParams } from "react-router-dom";
import { getProfileById } from "../utils/CRUD";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import axios from "axios";
import ProfileWorkSpace from "../components/ProfileWorkSpace";

function Profile() {
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const [data, setData] = useState(null);
  const [change, setChange] = useState(0);
  const params = useParams();
  const dispath = useDispatch();
  // Axios interceptor
  const axiosJWT = axios.create();
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

  useEffect(() => {
    const getData = async () => {
      const res = await getProfileById(params.id);
      setData(res.data);
    };
    getData();
  }, [change]);
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="profile_container">
          {data && (
            <>
              <ProfileHeader
                data={data}
                change={change}
                setChange={setChange}
                axiosJWT={axiosJWT}
              />
              <ProfileWorkSpace profile={data} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
