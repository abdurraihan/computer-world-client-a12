import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init'
import DeleOrderModal from './DeleteOrderModal';

import MyOrderRow from './MyOrderRow';

const MyOrder = () => {

    const [deleteOrder, setDeleteOrder] = useState(null)

    const [user] = useAuthState(auth);
    const email = user?.email;
  
    const [myOrder, setMyOrder] = useState([])

    useEffect(() => {
        fetch(`https://serene-ravine-48958.herokuapp.com/order/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
           // console.log(data);
           setMyOrder(data);
        })

    }, [myOrder])

    return (

        <div> 

        <div className="overflow-x-auto">
        <table className="table w-full">
          
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
        {
            myOrder.map((order,index)=> <MyOrderRow
             index={index} 
            key={order._id}
            order={order}
            setDeleteOrder={setDeleteOrder}
            > </MyOrderRow>)
        }
          </tbody>
        </table>

     
      </div>

        {
            deleteOrder && <DeleOrderModal setDeleteOrder={setDeleteOrder}
            deleteOrder={deleteOrder}
            
            > </DeleOrderModal>
        }
       


      </div>
    );
};

export default MyOrder;