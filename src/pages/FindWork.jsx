import React, { useEffect, useState } from "react";
import BannerHeader from "../components/BannerHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JobContainer from "../components/JobContainer";
import { getAllAddress, getAllCreativeField, refeshToken } from "../utils/CRUD";
import UploadWorkModel from "../components/UploadWorkModel";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginSuccess } from "../redux/authSlice";

function FindWork() {
  let bannerData = {
    background:
      "https://floridaprodesign.com/wp-content/uploads/2022/01/aefb1-web-agency-bg-4.jpg",
    title: "Công việc sáng tạo",
    description:
      "Khám phá bước chuyển nghề nghiệp tiếp theo của bạn, hợp đồng biểu diễn tự do hoặc thực tập",
  };
  const [cities, setCities] = useState([]);
  const [creativeFields, setCreativeFields] = useState();
  const [fetching, setFetching] = useState(false);
  const [openUploadJob, setOpenUploadJob] = useState(false);
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

  useEffect(() => {
    const getData = async () => {
      const resCities = await getAllAddress();
      const resCreative = await getAllCreativeField();
      setCities(resCities.data);
      setCreativeFields(resCreative.data);
      setFetching(true);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <BannerHeader obj={bannerData} />
      <div className="wrapper">
        {fetching && (
          <JobContainer cities={cities} creativeFields={creativeFields} setOpenUploadJob={setOpenUploadJob}/>
        )}
        {openUploadJob && (
          <UploadWorkModel
            axiosJWT={axiosJWT}
            token={currentUser?.accessToKen}
            setOpenUploadJob={setOpenUploadJob}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default FindWork;
