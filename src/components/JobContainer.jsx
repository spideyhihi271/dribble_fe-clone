import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../utils/CRUD';
import JobFilter from './JobFilter';
import JobList from './JobList';

function JobContainer({cities, creativeFields, setOpenUploadJob}) {
  const [variable, setVariable] = useState('?type=1');
  const [jobList, setJobList] = useState([]);
 
  useEffect(() => {
    const getData = async () => {
      const res = await getAllJobs(variable);
      setJobList(res.data);
    }
    getData();
  }, [variable])
  return (
    <div className="job_container">
        <JobFilter setVariable={setVariable} cities={cities} creativeFields={creativeFields}/>
        <JobList arr={jobList} setOpenUploadJob={setOpenUploadJob}/>
    </div>
  )
}

export default JobContainer