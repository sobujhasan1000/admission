import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm} from "react-hook-form";
import { useParams } from "react-router-dom";

const AdmissionF= () => {
  const { id } = useParams();
  const {
    data: collageData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["collage", id], // Use the query identifier 'collage' and the id as query key
    async () => {
      const res = await fetch(`https://admission-server-two.vercel.app/collage/${id}`);
      return res.json();
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h1 className=" text-center text-2xl font-bold my-2 ">
        {collageData.college_name} <br /> Admission Form
      </h1>
     <form onSubmit={handleSubmit(onSubmit)}  className='bg-slate-200 pt-4 text-center'>
     <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("studentName", { required: 'Student Name is required' })}
            placeholder="Student Name"
          />
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("phone", { required: 'Phone Number is required' })}
            placeholder="Phone Number"
          />
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("address", { required: 'Address is required' })}
            placeholder="Address"
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <label>Date of Birth:</label>
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("dateOfBirth", { required: 'Date of Birth is required' })}
            type="date"
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <label>Image:</label>
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("image", { required: 'Image is required' })}
            type="file"
          />
        </div>
        <input className="btn" type="submit" />
      </form>
     </div>
  );
};

export default AdmissionF;
