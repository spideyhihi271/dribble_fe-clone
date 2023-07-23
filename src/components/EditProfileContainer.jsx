import React from "react";
import EditPassword from "./EditPassword";
import EditShort from "./EditShort";
import EditSocial from "./EditSocial";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { refeshToken } from "../utils/CRUD";
import { loginSuccess } from "../redux/authSlice";

function EditProfileContainer({ caseView, profile, setFetch }) {
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
  return (
    <div className="edit_profile-container">
      {caseView == 0 && (
        <EditShort
          profile={profile}
          setRefeshData={setFetch}
          axiosJWT={axiosJWT}
          token={currentUser?.accessToKen}
        />
      )}
      {caseView == 1 && (
        <EditPassword
          axiosJWT={axiosJWT}
          token={currentUser?.accessToKen}
          setRefeshData={setFetch}
        />
      )}
      {caseView == 2 && (
        <EditSocial profile={profile} axiosJWT={axiosJWT} token={currentUser?.accessToKen} setRefeshData={setFetch} />
      )}
    </div>
  );
}

export default EditProfileContainer;
