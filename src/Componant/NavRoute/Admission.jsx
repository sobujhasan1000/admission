import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  // all collage data loaded
  const { data: collageData = [], refetch } = useQuery(
    ["collage"],
    async () => {
      const res = await fetch("https://admission-server-two.vercel.app/collage");
      return res.json();
    }
  );

  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      {collageData.map((collage) => (
        <div
          key={collage._id}
          className="text-center bg-gradient-to-r from-stone-400 to-slate-400  rounded-md"
        >
          <h1 className="font-bold text-2xl p-4">{collage.college_name}</h1>
          <p>Admission Date: {collage.admission_date}</p>
          <button className="btn p-2 my-2"> <Link to={`/form/${collage._id}`}>click here</Link></button>
        </div>
      ))}
    </div>
  );
};

export default Admission;
