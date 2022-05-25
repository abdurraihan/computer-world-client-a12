import React from 'react';
import {  useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';


const SignUp = () => {




    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);


      const navigate = useNavigate()
   
      let setError;
      
   
    if (token){
        //console.log(user || gUser);
         navigate('/')
    }
    
   
   if(loading || gLoading || updating){
        return <Loading></Loading>
   }
   
   if(error || gError || updateError){
       setError = <p className='text-red-500'>{error?.message}  {gError?.message} {updateError?.message}</p>
   }
   

    const onSubmit = async data => {

     //console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name});
    console.log('update don')
  
    };

    return (
        <div className=' h-screen flex justify-center items-center '>

        <div className="card w-96 bg-neutral-400 shadow-xl">
            <div className="card-body">
                <h2 className=" text-2xl font-bold text-center">SignUP</h2>

                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* input for name */}

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input
                            type="test"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Requires'

                                }
                                
                              
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-rose-700">{errors.name.message}</span>
                            }

                           
                        </label>
                    </div>

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


                    <input className='btn w-full max-w-xs" ' type="submit"  value="sign UP"/>
                </form>
                
               

                      <p><small>Already Have an  Account? 
                    <Link to='/login' className="text-primary">  Please Login</Link></small></p>

               {setError}

                <div className="divider ">OR</div>
               



                <button onClick={() => signInWithGoogle()} className="btn">CONTINUE WITH GOOGLE</button>

            </div>
        </div>

    </div>
    );
};

export default SignUp;