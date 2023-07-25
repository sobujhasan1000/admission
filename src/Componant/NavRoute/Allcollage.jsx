import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allcollage = () => {

// all collage data loaded
    const { data: collageData = [], refetch } = useQuery(
        ["collage"],
        async () => {
          const res = await fetch("https://admission-server-two.vercel.app/collage");
          return res.json();
        }
      );

    return (
        <div className='grid grid-cols-3 gap-2 my-4  p-4'>
            {collageData.map(collage=>(
                <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={collage.college_img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{collage.college_name}</h2>
                  <h2> admission Date: {collage.admission_date}</h2>
                  <h2>Number of Research:  {collage.research_work.length}</h2>
                  <h2> Rating: {collage.collage_rating}</h2>
                  <div className="card-actions justify-end mt-auto mb-0">
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
};

export default Allcollage;