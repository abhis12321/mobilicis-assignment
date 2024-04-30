"use client";
import React, { useEffect, useState } from "react";

const preJobs = [
    {
        "company_name": "Prenlyn Automotive Group",
        "formatted_relative_time": "3 days ago",
        "id": "bcfebc9d0c9a0d3b",
        "link": "/job/bcfebc9d0c9a0d3b?locality=us",
        "locality": "us",
        "location": "Springfield, PA 19064",
        "pub_date_ts_milli": 1714107600000,
        "salary": {},
        "title": "Midas Store Manager, $900 - $1,200/week Plus Bonuses!"
    },
    {
        "company_name": "RF INSTALLATIONS LLC",
        "formatted_relative_time": "30+ days ago",
        "id": "f3121153967b1caa",
        "link": "/job/f3121153967b1caa?locality=us",
        "locality": "us",
        "location": "Seattle, WA",
        "pub_date_ts_milli": 1711083600000,
        "salary": {
            "max": 65000,
            "min": 0,
            "type": "yearly"
        },
        "title": "Field Manager"
    },
    {
        "company_name": "TLC - The Lube Center",
        "formatted_relative_time": "18 days ago",
        "id": "f82751ef276942ea",
        "link": "/job/f82751ef276942ea?locality=us",
        "locality": "us",
        "location": "Roanoke, VA 24018",
        "pub_date_ts_milli": 1712811600000,
        "salary": {},
        "title": "Service Manager/Technician"
    },
    {
        "company_name": "1-Stop",
        "formatted_relative_time": "27 days ago",
        "id": "007c1eaddcee8bf5",
        "link": "/job/007c1eaddcee8bf5?locality=us",
        "locality": "us",
        "location": "Mount Morris, MI 48458",
        "pub_date_ts_milli": 1711947600000,
        "salary": {
            "max": 20,
            "min": 20,
            "type": "hourly"
        },
        "title": "Store Manager"
    },
    {
        "company_name": "Fatface Corporation",
        "formatted_relative_time": "30+ days ago",
        "id": "e3a240d73a2c7b16",
        "link": "/job/e3a240d73a2c7b16?locality=us",
        "locality": "us",
        "location": "Kennebunkport, ME 04046",
        "pub_date_ts_milli": 1709100000000,
        "salary": {},
        "title": "Assistant Store Manager"
    },
    {
        "company_name": "EZ Stop",
        "formatted_relative_time": "28 days ago",
        "id": "ade831bba9d0e68b",
        "link": "/job/ade831bba9d0e68b?locality=us",
        "locality": "us",
        "location": "Newport, TN 37821",
        "pub_date_ts_milli": 1710219600000,
        "salary": {},
        "title": "EZ Stop Store Manager"
    }
]

export default function Page() {
  const [jobs, setJobs] = useState(preJobs);
  const [role, setRole] = useState("manager");

  useEffect(() => {
    console.log("rendering..");
  }, []);

  const searchJobs = async (e) => {
    e.preventDefault();
    console.log("seraching...");
    const url = `https://indeed12.p.rapidapi.com/jobs/search?query=${role}&location=japan`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9e63764c0fmsh8714f3982a78195p1af512jsnca5b2fdf24e8",
        "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setJobs(data.hits))
        .then((e) => console.log(jobs));
    } catch (error) {
      console.error(error);
    }
  };

  const logJobs = () => {
    console.log(jobs);
  }
  
  return (
    <div className="py-4 flex flex-col gap-4">
      <form
        className="flex gap-2 p-2 w-[98%] max-w-[540px] bg-blue-800/20 mx-auto rounded-lg"
        onSubmit={searchJobs}
      >
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Search a Role"
          className="py-2 px-4 flex-1 bg-slate-950/50 text-cente text-gray-200 outline-none border-2 focus:border-cyan-400 rounded-lg"
        />
        <input
          type="submit"
          value={"search"}
          className="hidden xs:block py-2 bg-slate-950/50 px-4 cursor-pointer border-2 hover:border-cyan-400 hover:bg-cyan-950/80 active:bg-slate-950 rounded-lg"
        />
      </form>

      <div className="flex flex-col items-center gap-5 py-4">
      <h1 className="text-center py-4 px-8 mb-2 rounded-md drop-shadow-[0_0_1px_red] text-4xl sm:text-5xl font-sgray font-bold sm:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-900 w-fit" onClick={logJobs}>
        Job Listings
      </h1>
        {jobs?.map((job, index) => (
          <div className="flex flex-col bg-slate-800 p-8 rounded-lg shadow-[0_0_5px_white] hover:shadow-[0_0_8px_red] max-w-[700px] w-[98%]" key={index}>
            <h1 className="text-gray-400 font-semibold text-lg">
              Company Name :
              <span className="text-gray-100 text-xl font-bold">
                {job.company_name}
              </span>
            </h1>
            <h1 className="text-gray-400 font-semibold text-lg">
              Job title :
              <span className="text-gray-100 text-xl font-bold">
                {job.title}
              </span>
            </h1>
            <h1 className="text-gray-400 font-semibold text-lg">
              Locaction :
              <span className="text-gray-100 text-xl font-bold">
                {job.location}, <span>{job.locality}</span>
              </span>
            </h1>
            <h1 className="text-gray-400 font-semibold text-lg">
              published :
              <span className="text-gray-100 text-xl font-bold">
                {job.formatted_relative_time}
              </span>
            </h1>
            <p className="text-gray-400 font-semibold text-lg">
              Salary :
              <span className="text-gray-100 text-xl font-bold"> 
                {job.salary.type
                  ? `$${job.salary.min} to $${job.salary.max} ${job.salary.type}`
                  : "Not disclosed"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
