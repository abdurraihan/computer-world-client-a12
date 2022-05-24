import React, { useEffect } from 'react';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase_init'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';




const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser)

      let navigate = useNavigate();
     let location = useLocation();
   
     let from = location.state?.from?.pathname || "/";

      let setError;
      
   useEffect(()=>{
       
    if (token){
        // console.log(user || gUser);
         navigate(from, { replace: true });
     }

   },[token, from , navigate])
    
   
   if(loading || gLoading){
        return <Loading></Loading>
   }
   
   if(error || gError){
       setError = <p className='text-red-500'>{error?.message}  {gError?.message}</p>
   }
   

    const onSubmit = data => {

     //console.log(data);
     signInWithEmailAndPassword(data.email, data.password)
    };

    


    return (
<div className=' h-screen flex justify-center items-center '>

    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className=" text-2xl font-bold text-center">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                    {/* input for email */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Requires'

                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-rose-700">{errors.email.message}</span>
                        }

                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-rose-700">{errors.email.message}</span>
                        }

                    </label>
                </div>



                            {/* input for password */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>

                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Email is Requires'

                            },
                            
                                minLength: {
                                    value: 6,
                                    message: 'must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                }
                                }
                        )}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-rose-700">{errors.password.message}</span>
                        }

                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-rose-700">{errors.password.message}</span>
                        }

                    </label>
                </div>


                <input className='btn w-full max-w-xs" ' type="submit"  value="Login"/>
            </form>
            
            <p><small> New to Computer parts ? 
                      <Link to='/signup' className="text-primary">Create New Account</Link></small></p>

            {setError}

            <div className="divider ">OR</div>
            



            <button onClick={() => signInWithGoogle()} className="btn">CONTINUE WITH GOOGLE</button>

        </div>
    </div>

</div>
    );
};

export default Login;