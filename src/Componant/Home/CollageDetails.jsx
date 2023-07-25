import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CollageDetails = () => {
  
  const { id } = useParams();
  const {
    data: collageData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["collage", id], // Use the query identifier 'collage' and the id as query key
    async () => {
      const res = await fetch(`http://localhost:5000/collage/${id}`);
      return res.json();
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full my-2">
        <figure>
          <img className="w-full"
            src={collageData.college_img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">{collageData.college_name}</h1>
         <div className="text-center p-8 w-96 ml-auto mr-auto">
         <h2><span className="text-xl text-green-200">Admisson Process:</span> {collageData.admission_process}</h2>
         <h2><span className="text-xl text-green-200">Event:</span> {collageData.event_details}</h2>
         <h2><span className="text-xl text-green-200">sport</span> {collageData.sport_categories[0]}</h2>
         <h2> <span className="text-xl text-green-200">Research</span> {collageData.research_work[0].title}</h2>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CollageDetails;
