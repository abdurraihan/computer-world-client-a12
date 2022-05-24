import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({product}) => {
    const { _id,  img , name , description , minium_order_quantity , available_quantity ,price} = product;

    const navigate = useNavigate()

   const handlePurchaseBtn = id => {
    navigate(`/purchase/${id}`)
   }

    return (
        <div class="card w-96 bg-secondary text-primary shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center font-bold">
    <h2 class="card-title">{name}</h2>
    <p>{description} </p>

    <div className='flex p-3'>
        <h3>MINIMUM Order Quantity <small className=' text-3xl'>{minium_order_quantity}</small></h3>
        <h3>Available Quantity <small className=' text-3xl'>{available_quantity }</small></h3>
 
    </div>

   <p>Price <small className='text-2xl'>{price}</small>$</p>
        

    <div class="card-actions">
      <button onClick={()=> handlePurchaseBtn(_id)} class="btn btn-primary">PURCHASE</button>
    </div>
  </div>
</div>
    );
};

export default PartsCard;