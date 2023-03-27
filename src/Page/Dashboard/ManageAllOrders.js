import React, { useEffect, useState } from 'react';
import AllordersCard from './AllordersCard';

const ManageAllOrders = () => {

 

    const [allOrder, setAllOrder] = useState([]);

    useEffect( ()=>{
        fetch('https://https-github-com-abdurraihan-computer.onrender.com/order',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}` 
            }

        })
        .then(res=> res.json())
        .then(data => setAllOrder(data));
    },[])

    return (
        <div className="overflow-x-auto bg-primary">
        <table className="table w-full ">
        
          <thead >
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              
            </tr>
          </thead>
          <tbody>
           
          {
              allOrder.map( (order , index) => <AllordersCard key={order._id} order={order} index={index}></AllordersCard>)
          }
           
           
          </tbody>
        </table>
      </div>
    );
};

export default ManageAllOrders;