import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Gallary = () => {

    const { data: gallaryimg = [], refetch } = useQuery(
        ["gallary"],
        async () => {
          const res = await fetch("http://localhost:5000/collage");
          return res.json();
        }
      );
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-black my-4'>Graduation Photo</h1>
            <div className='grid grid-cols-3 gap-2 my-4 bg-slate-500 p-10 rounded-md'>
                {gallaryimg.map(gimg=>(
                    <img key={gimg._id} className='rounded-md h-64 w-96 ' src={gimg.graduation_img} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Gallary;