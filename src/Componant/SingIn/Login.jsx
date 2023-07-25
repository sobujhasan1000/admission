import React, { useContext } from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContest } from '../Provider/Authprovider';

const Login = () => {

    const { register, handleSubmit } = useForm();
  const { singIn } = useContext(AuthContest);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        singIn(data.email, data.password).then((result) => {
          const user = result.user;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LogIn successful",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(user);
          navigate(from, { replace: true });
        });
      };
    return (
        <div className="my-4 flex justify-center items-center bg-green-200 py-10 rounded-md">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-96 text-center gap-8"
        >
          <input
            className="p-2 bg-emerald-400 rounded-md"
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
          />
          <input
            className="p-2 bg-emerald-400 rounded-md"
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
          />
          <input className="btn bg-emerald-400" type="submit" />
        </form>
        <div className="divider"></div> 
        <GoogleLogin></GoogleLogin> <br />
        <Link className=" bg-emerald-400 text-center p-2 rounded-md ml-14" to="/singin">
          if don't account singup here
        </Link>
      </div>
    </div>
    );
};

export default Login;