import { useState } from "react";
import PropTypes, { any } from "prop-types";

function JobCard({ role, company, reqSkills }) {
  
  console.log(role, company, reqSkills);
  const [applied, setApplied] = useState(false);
  const [btnData, setBtnData] = useState("Apply Now");
  return (
    <div className="card bg-base-100 m-5 w-96 shadow-xl bg-slate-200 ">
      <div className="card-body p-10 text-black">
       <center> <h2 className="card-title font-bold">{role}!</h2></center>
        {/* <p>Company: {company}</p> */}
        <p>Description : {reqSkills}</p>
        <div className="card-actions justify-end pt-3">
          <button
            className={`border-solid rounded-md w-28 h-12 ${
              !applied ? "text-cyan-50 bg-blue-950" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => {
              console.log("clicked");
              setApplied(true);
              setBtnData("Applied");
            }}
          >
            {btnData}
          </button>
        </div>
      </div>
    </div>
  );
}
JobCard.propTypes = {
  role: any,
  company: any,
  reqSkills: any
};
export default JobCard;
