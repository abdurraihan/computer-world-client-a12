import React from 'react';

const AllordersCard = ({order , index}) => {

    const {name , email , productName ,quantity} = order;
    return (
        
             <tr className='text-primary'>
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{productName}</td>
              <td>{quantity}</td>
            </tr>
            
        
    );
};

export default AllordersCard;