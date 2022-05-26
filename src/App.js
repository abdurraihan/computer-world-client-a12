import { Route, Routes } from 'react-router-dom';
import Header from '../src/Shared/Header/Header'
import Home from '../src/Page/Home/Home'
import Purchase from './Page/Purchase/Purchase';
import Login from './Shared/Login/Login';
import SignUp from './Shared/Login/SignUp';
import Footer from './Shared/Footer/Footer';
import RequreAuth from '../src/Shared/Login/RequreAuth'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './Page/Dashboard/Dashboard';
import MyProfile from './Page/Dashboard/MyProfile';
import MyOrder from  './Page/Dashboard/MyOrder';
import AddReview from './Page/Dashboard/AddReview';
import ManageProducts from './Page/Dashboard/ManageProducts';
import ManageAllOrders from './Page/Dashboard/ManageAllOrders';

import NotFound from './Shared/NotFound';
import Blog from './Page/Blog/Blog';
import MakeAdmin from './Page/Dashboard/MakeAdmin';
import AddProducts from './Page/Dashboard/AddProducts'
import Portfolio from './Page/Portfolio/Portfolio';

function App() {
  return (
    <div  >
     <Header></Header>




     <Routes>

       <Route path="/" element={<Home></Home>} ></Route>

       <Route path="/purchase/:_id" element={<RequreAuth>
        <Purchase></Purchase>
       </RequreAuth>} ></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>


        <Route path="/dashboard" element={<RequreAuth>
          <Dashboard></Dashboard>
        </RequreAuth>}>

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>

        <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>

          <Route path='addProduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>

          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>

        </Route>



          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>

       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>










        <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
     

 
      







     <Footer></Footer>


     <ToastContainer />
    </div>
  );
}

export default App;
