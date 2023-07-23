import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCollectionHeader from "../components/DetailCollectionHeader";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllCollectionById } from "../utils/CRUD";

function DetailColllection() {
  const [collection, setCollections] = useState({});
  const [change, setChange] = useState(0);
  const [loader, setLoader] = useState(true);
  let idProject = useParams().id;
  useEffect(() => {
    let getData = async () => {
      const res = await getAllCollectionById(idProject);
      setCollections(res.data);
      setLoader(false);
    };
    getData();
  }, [change]);
  return (
    <>
      <Header />
      <div className="wrapper">
        {loader ? (
          <>
            <p>Loader...</p>
          </>
        ) : (
          <>
            <DetailCollectionHeader data={collection} setChange={setChange} change={change}/>
            <ProjectList arr={collection.shorts} setChange={setChange} change={change} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailColllection;
