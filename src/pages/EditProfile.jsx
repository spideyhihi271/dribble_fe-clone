import React, { useEffect, useState } from "react";
import EditProfileContainer from "../components/EditProfileContainer";
import EditProfileHeader from "../components/EditProfileHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EditProfileNav from "../components/EditProfileNav";
import { getProfileById } from "../utils/CRUD";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

function EditProfile() {
  const [caseView, setCaseView] = useState(0);
  const [fetch, setFetch] = useState(false);
  const [profile, setProfile] = useState({});
  const currentUser = useSelector((state) => state.auth.login.currentAccount);
  const dispath = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const res = await getProfileById(currentUser?._id);
      dispath(loginSuccess(Object.assign(res.data, currentUser)));
      setProfile(res.data);
      setFetch(true);
    };
    if (!fetch) getData();
  }, [fetch]);
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="edit_profile">
          <EditProfileHeader profile={profile}/>
          <div className="edit_profile-workspace">
            <EditProfileNav caseView={caseView} setCaseView={setCaseView} />
            <EditProfileContainer
              caseView={caseView}
              profile={profile}
              setFetch={setFetch}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
