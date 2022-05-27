import React from 'react';


const ManageRow = ({product , index ,  setDeletingProduct}) => {
    const {name , img } = product;


    return (
        
     <tr>
        <th>{index + 1}</th>
       
        <td><div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt={name}/>
  </div>
</div> </td>
        <td>{name}</td>
        

        <td> <label  onClick={()=>setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">delete</label>
            
           </td>
      </tr>
       
    );
};

export default ManageRow ;