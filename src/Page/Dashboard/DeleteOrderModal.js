import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder, setDeleteOrder}) => {

    const {name , _id} = deleteOrder;

    
    const handleDelete = id=>{

      
        fetch (`https://https-github-com-abdurraihan-computer.onrender.com/order/${id}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Delete ${name}`);
                
                setDeleteOrder(null)
            }
        })
        
       
    }

    return (
       <div>
       
        
     
        <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-red-700 text-lg"> Are you Sure You Want to Delete  {name} </h3>
           
            <div className="modal-action">
                {/* from doctor row  */}
            <button onClick={ ()=>handleDelete(_id)}  className="btn btn-xs btn-error">Delete</button>
              <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
            </div>
          </div>
        </div>

        </div>
    );
};

export default  DeleteOrderModal ;