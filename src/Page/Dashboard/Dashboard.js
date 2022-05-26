import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Link, Outlet } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../Hooks/useAdmin';

//import useAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
     <h2 className='text-3xl font-bold text-purple-800 '>Dashboard</h2>
          <Outlet />
        
        {/*   <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-primary text-base-content">
          
            {/* <!-- Sidebar content here --> */}


            <li><Link to='/dashboard'>My Profile</Link></li> 
            
 
      {
          user && !admin && <>  
          
            <li><Link to='/dashboard/myorder'>My Order</Link></li>
            <li><Link to='/dashboard/addreview'> Add Review</Link></li>
        </>
      }


      {

        admin &&  <>
        
        <li><Link to='/dashboard/makeAdmin'> Make Admin</Link></li>
        <li><Link to='/dashboard/addProduct'> Add Products</Link></li>
        <li><Link to='/dashboard/manageProducts'> Manage Products</Link></li>
        <li><Link to='/dashboard/manageAllOrders'> Manage All Orders</Link></li>
        
        </>
      }

           
 


        



         {/*    
            
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/history'>My History</Link></li>
            {
              admin && <>
               <li><Link to='/dashboard/users'>All Users</Link></li> 
             <li><Link to='/dashboard/doctor'>Add a Doctor</Link></li>
             <li><Link to='/dashboard/manageDoctor'> Manage Doctor</Link></li>
              </>
            
            }  */}

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;