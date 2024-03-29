import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase_init';
const Header = () => {

    const [user] = useAuthState(auth);
  

    let location = useLocation();

  

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  

    const Menu = <>

    <li> <Link to='/'>HOME</Link></li>
   
  
    <li> <Link to='/products'>PRODUCTS</Link></li>

    {
      user &&  <li> <Link to='/dashboard'> DASHBOARD</Link></li>
    }


  
  <li>  { user ?<button  onClick={logout} className="btn btn-active btn-ghost">SignOut</button>  :  <Link to='/login'>Login</Link>}</li>
      
       
    </>

    return (
   

<div className="navbar bg-primary  ">

<div className="navbar-start ">
    <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {Menu}
        </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">COMPUTER PARTS</a>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
       Menu
      }
    </ul>
</div>
<div className="navbar-end">
    {/* this btn is for Dashboard */}

   { location.pathname === '/dashboard' ? 
  <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
 </label> : ''}



 





</div>


</div>

    );
};

export default Header;