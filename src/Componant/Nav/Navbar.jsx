
import { Link } from "react-router-dom";
import { AuthContest } from "../Provider/Authprovider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContest);
  const handelLogOut = () => {
    logOut()
      .then(() => { })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your logOut successful',
        showConfirmButton: false,
        timer: 1500
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-red-200 to-slate-300 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to='/'><a>Home</a></Link>
              </li>
              <li>
                <Link to='/allcollage'><a>collages</a></Link>
              </li>
              <li>
              <Link to='/admission'><a>Admission</a></Link>
              </li>
              <li>
              <Link to='/mycollage'><a>MY collage</a></Link>
              </li>
              <li>
            <Link to='/singin'><a>Singin</a></Link>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">admission pluse</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to='/'><a>Home</a></Link>
            </li>
            <li>
            <Link to='/allcollage'><a>collages</a></Link>
            </li>
            <li>
            <Link to='/admission'><a>Admission</a></Link>
            </li>
            <li>
            <Link to='/mycollage'><a>MY collage</a></Link>
            </li>
            {user?<></>
            :
            <>
            <li><Link to='/login'>Login</Link></li>
            </>}
          </ul>
        </div>
        {user?<>
          <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handelLogOut}><a>Logout</a></li>
      </ul>
    </div>
        </div>
        </>

        :

        <>
        </>}
      </div>
    </div>
  );
};

export default Navbar;
