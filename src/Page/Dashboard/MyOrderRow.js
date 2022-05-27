import React from 'react';


const MyOrderRow = ({index, order , setDeleteOrder }) => {

    
    
   
    const {name , productName}=order;

    return (
        
        <tr className='text-primary' >

        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{productName}</td>
        <td> <label  onClick={()=>setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">delete</label></td>

      </tr>

    );
};

export default MyOrderRow;