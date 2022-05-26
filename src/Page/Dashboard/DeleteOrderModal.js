import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder, setDeleteOrder}) => {

    const {name , _id} = deleteOrder;

    
    const handleDelete = id=>{

      
        fetch (`http://localhost:5000/order/${id}`,{
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
       
        
     
        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-red-700 text-lg"> Are you Sure You Want to Delete  {name} </h3>
           
            <div class="modal-action">
                {/* from doctor row  */}
            <button onClick={ ()=>handleDelete(_id)}  class="btn btn-xs btn-error">Delete</button>
              <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
            </div>
          </div>
        </div>

        </div>
    );
};

export default  DeleteOrderModal ;