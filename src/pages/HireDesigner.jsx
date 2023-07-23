import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerHeader from "../components/BannerHeader";
import HireList from "../components/HireList";
import HireFilter from "../components/HireFilter";
import { getAllAddress, getAllCreativeField, getAllHire } from "../utils/CRUD";

function HireDesigner() {
  let bannerData = {
    background:
      "https://cdn.dribbble.com/userupload/6648895/file/original-e6b1f2207943f1c213abf8490c4d2543.jpg?compress=1&resize=1200x800&vertical=center",
    title: "Hire Creatives",
    description: "Find the perfect freelancer for your next project",
  };
  const [variable, setVariable] = useState({});
  const [address, setAddress] = useState([]);
  const [creative, setCreative] = useState([]);
  const [data, setData] = useState("");
  const [fetch, setFetch] = useState(false);
  const [defaultVar, setDefaultVar] = useState(false);

  useEffect(() => {
    setFetch(false);
    const getDefaulData = async () => {
      const resAddress = await getAllAddress();
      const resCreative = await getAllCreativeField();
      setAddress(resAddress.data);
      setCreative(resCreative.data);
      setDefaultVar(true);
    };
    if (!defaultVar) getDefaulData();
    const getData = async () => {
      const res = await getAllHire(variable);
      setData(res.data);
      setFetch(true);
    };
    
    getData();
  }, [variable]);
  return (
    <>
      <Header />
      <BannerHeader obj={bannerData} />
      <div className="wrapper">
        <div className="flex_layout">
          <HireFilter
            setVariable={setVariable}
            address={address}
            creatives={creative}
          />
          {fetch && <HireList data={data} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HireDesigner;
