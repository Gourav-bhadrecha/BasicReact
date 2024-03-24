import Jobstemplate from "./jobstemplate";
import { useState, useEffect } from "react";

function BasicExample() {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
          setjobs(data);
          console.log(data)
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setloading(false);
      }
    };
    fetchjobs();
  }, []);
  return (
      <>
          {console.log(jobs)}
      {jobs.map((job, index) => (
        <Jobstemplate key={index} Jobs={job} />
      ))}
    </>
  );
}

export default BasicExample;
