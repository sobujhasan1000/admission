import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContest } from '../Provider/Authprovider';

const GoogleLogin = () => {
    const {singInwithgoogle}=useContext(AuthContest);

    const handelgooglelog=()=>{
        singInwithgoogle()
        .then(result=>{
            const logInUser=result.user;
            console.log(logInUser)
            const saveuser={name:logInUser.displayName, email:logInUser.email}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveuser)
            })
                .then(res => res.json())
                .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'logIn successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                })
        })
    }
    return (
        <div>
            <div className='mt-10 bg-emerald-400 text-center rounded-md'>
            <button onClick={handelgooglelog} className='btn text-center my-2 bg-emerald-400 '>login with google</button>
        </div>
        </div>
    );
};

export default GoogleLogin;