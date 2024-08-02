// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import JobCard from './JobCard'; // Make sure the path to JobCard is correct
import axios from 'axios';



function CardHolder() {
    
   const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://172.17.15.233:5001/user/getJobs").then(
            (response) => {
                setData(response.data);
                console.log(response.data,"api call ");
            }
            );
    },[]);

    
return (
<div className='flex flex-wrap'>
{data?.map((job, index) => {
    console.log(job.job_desc);
    return (<>
        <JobCard
            key={index} // Use a unique key if possible
            role={job.job_role}
            company={job.company_id}
            reqSkills={job.job_desc}
            />
        <JobCard
            key={index} // Use a unique key if possible
            role={job.job_role}
            company={job.company_id}
            reqSkills={job.job_desc}
            />
            </>
    );
})}
{/* <JobCard role={"fullstack"} company={"miracle"} reqSkills={"mkjdtgy"}></JobCard> */}
</div>
);
}

export default CardHolder;