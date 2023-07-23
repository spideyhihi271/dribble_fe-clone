import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TagAndFilter from "../components/TagAndFilter";
import ProjectList from "../components/ProjectList";
import { getShorts } from "../utils/CRUD";

function HomePage() {
  const [loader, setLoader] = useState(true);
  const [variable, setVariable] = useState("");
  const [shorts, setShorts] = useState([]);
  const [status, setStatus] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setStatus(1);
      const res = await getShorts(variable);
      setStatus(res.status);
      setShorts(res.data);
    };
    getData();
  }, [variable]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <TagAndFilter setVariable={setVariable} />
        <ProjectList arr={shorts} setChange={setChange} change={change} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
