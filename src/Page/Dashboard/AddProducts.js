
 import React from 'react';

import { toast } from 'react-toastify';

const AddProducts = () => {




    const handleAddProducts = event =>{
        event.preventDefault()

        const img = event.target.img.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const minium_order_quantity = event.target.minium_order_quantity.value;
        const available_quantity = event.target.available_quantity.value;
        const price = event.target.price.value;

        const products = {
            img: img,
            name: name,
            description: description,
            minium_order_quantity: minium_order_quantity,
            available_quantity: available_quantity,
            price: price
        }
       
       fetch('http://localhost:5000/products',{
           method: 'POST',
           headers:{
               'content-type': 'application/json'
           },
         body: JSON.stringify(products) 
       })
       .then(res => res.json())

       .then(data => {
           if(data.insertedId){
               toast.success('Products Add successfully')
                 
           }
       })

    }


    return (

  

            <div> 

              
           
            <form onSubmit={handleAddProducts}>

             <div className='grid m-5'>

             <input type="text"  name='name' placeholder="Enter Product Name" className="input input-bordered input-secondary w-full max-w-xs " required />

                <input type="text" name='description' placeholder="sort description" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2"  required/>

                <input type="number" name='minium_order_quantity'
                    placeholder="minium order quantity" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />

                <input type="number" name='available_quantity'
                    placeholder="available quantity" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2"  required/>

                <input type="number" name='price'
                    placeholder="price" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />



                <input type="text" name='img' placeholder="Enter Product Image from your server" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />


             </div>

                <input className='btn my-2 bg-primary m-5' type="submit" value='order' />

            </form>
        </div>

      
    );
};

export default AddProducts ; 