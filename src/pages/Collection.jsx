import React, { useEffect, useState } from "react";
import DiscoverCategory from "../components/DiscoverCategory";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DiscoverCollection from "../components/DiscoverCollection";
import { getAllCollections } from "../utils/CRUD";

function Collection() {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllCollections("");
      setCollections(res.data.sort((a, b) => b.views - a.views));
      console.log(res.data.sort((a, b) => b.views - a.views));
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <DiscoverCategory arr={collections.slice(0, 5)} />
        <DiscoverCollection arr={collections.slice(5, collections.length)} />
      </div>
      <Footer />
    </>
  );
}

export default Collection;
