import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";



const Collages = () => {
  const { data: collageData = [], refetch } = useQuery(
    ["collage"],
    async () => {
      const res = await fetch("https://admission-server-two.vercel.app/collage");
      return res.json();
    }
  );
  return (
    <div className="grid grid-cols-3 gap-2">
      {collageData.map((collageD)=>(
         <div key={collageD._id} className="card bg-gradient-to-r from-stone-400 to-slate-400 shadow-xl ">
         <figure className="px-6 pt-6">
           <img
             src={collageD.college_img}
             alt="Shoes"
             className="rounded-xl"
           />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title font-bold">{collageD.college_name}</h2>
           <p className="text-sky-300 text-lg font-bold">admission Date: {collageD.admission_date}</p>
           <p className="text-sky-300 text-lg font-bold">Event: {collageD.event}</p>
           <p className="text-black font-semibold">Research History: {collageD.research_history}</p>
           <p className="text-xl text-teal-200">sport: {collageD.sport}</p>
           <div className="card-actions">
             <button className="btn">
            <Link to={`/collage/${collageD._id}`}>View Details</Link>
             </button>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
};

export default Collages;
