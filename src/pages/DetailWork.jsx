import React, { useEffect, useState } from 'react'
import BannerHeader from '../components/BannerHeader'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DetailJob from '../components/DetailJob'
import { useParams } from 'react-router-dom'
import { getJobById } from '../utils/CRUD'

function DetailWork() {
  let bannerData = {
    background:
      "https://cdn.dribbble.com/userupload/6648895/file/original-e6b1f2207943f1c213abf8490c4d2543.jpg?compress=1&resize=1200x800&vertical=center",
    title: "Công việc sáng tạo",
    description: "Discover your next career move, freelance gig, or internship",
  };
  const [job, setJob] = useState(null);
  const [fetch, setFetch] = useState(false);
  const idJob = useParams().id;
  useEffect(() => {
    const getData = async () => {
      const res = await getJobById(idJob);
      setJob(res.data);
      setFetch(true)
    };
    getData();
  }, [fetch]);
  return (
    <>
    <Header/>
    <BannerHeader obj={bannerData}/>
    <div className="wrapper">
      {
        fetch &&
          <DetailJob obj={job}/>
      }
    </div>
    <Footer/>
  </>
  )
}

export default DetailWork