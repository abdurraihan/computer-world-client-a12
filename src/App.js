import { Route, Routes } from 'react-router-dom';
import Header from '../src/Shared/Header/Header'
import Home from '../src/Page/Home/Home'
import Purchase from './Page/Purchase/Purchase';
import Login from './Shared/Login/Login';
import SignUp from './Shared/Login/SignUp';
import Footer from './Shared/Footer/Footer';
import RequreAuth from '../src/Shared/Login/RequreAuth'
function App() {
  return (
    <div >
     <Header></Header>

     <Routes>
       <Route path="/" element={<Home></Home>} ></Route>
       <Route path="/purchase/:_id" element={<RequreAuth>
        <Purchase></Purchase>
       </RequreAuth>} ></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes>
     

     <Footer></Footer>
    </div>
  );
}

export default App;
