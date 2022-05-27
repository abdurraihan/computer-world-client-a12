//import { useQuery } from 'react-query';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../firebase_init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Purchase = () => {

    const {_id} = useParams();
  
 
    const [btnCondition , setBtnCondition] = useState(true)
     
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch(`https://serene-ravine-48958.herokuapp.com/products/${_id}`)
        .then(res => res.json())
        .then(data => {
           // console.log(data)
            setProduct(data)
        })
    },[])
 
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }


    const minimumQuantity =parseInt( product[0]?.minium_order_quantity)
    const availableQuantity = parseFloat(product[0]?.available_quantity)
    const productName = product[0]?.name;
   

   const handleQuantity = (event) =>{
       
        const inputQuantity = parseInt((event.target.value))
        if(inputQuantity < minimumQuantity)
        {
            setBtnCondition(!true)
            return toast.error(`You Can't Order less then ${minimumQuantity}`)
        }

        else if(inputQuantity > availableQuantity){
            setBtnCondition(!true)
            return toast.error(`You can't order more Then ${availableQuantity} `)

            
        }

        else{
            setBtnCondition(true)
        }

   }


    const handleOrder = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value; 
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        
      const order ={
          name: name,
          email: email,
          address: address,
          phone: phone,
          quantity : quantity,
          productName: productName
      }

    
      fetch('https://serene-ravine-48958.herokuapp.com/order',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(order)
          
      })
      .then(res => res.json())
      .then(data => {
          //console.log(data)
          if (data.insertedId){
          toast.success('your order is done')
          }
      })


        
    }





   
    return (
        <div>
               
               {/* do something after main work */}

  <div className="flex flex-col  w-full lg:flex-row">

  <div className="grid flex-grow  card bg-primary rounded-box place-items-center">
      
  <div className="card w-96 bg-secondary text-primary shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product[0]?.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center font-bold">
    <h2 className="card-title">{product[0]?.name}</h2>
    <p>{product[0]?.description} </p>

    <div className='flex p-3'>
        <h3>MINIMUM Order Quantity <small className=' text-3xl'>{product[0]?.minium_order_quantity}</small></h3>
        <h3>Available Quantity <small className=' text-3xl'>{product[0]?.available_quantity }</small></h3>
 
    </div>

   <p>Price <small className='text-2xl'>{product[0]?.price}</small>$</p>
        

    <div className="card-actions">
   
    </div>
  </div>
</div>
      
 </div> 

  <div className="divider lg:divider-horizontal">OR</div> 

  <div className="grid flex-grow h-auto card bg-secondary rounded-box place-items-center">

  <div className="card w-96 mb-24 bg-primary shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Order From</h2>
   
  
    <form onSubmit={handleOrder}> 
    <input className='mb-2 w-full input-bordered ' type="text" name='name' value={user?.displayName}  readOnly/>
    <input className='mb-2 w-full input-bordered' type="text" name='email' value={user?.email} readOnly />

    <input className='mb-2 w-full input-bordered' placeholder="your address" type="text" name='address' required  />

    <input className='mb-2 w-full input-bordered' type='number' name='phone' placeholder='phone' required />

    <input className='mb-2 w-full input-bordered' onBlur={handleQuantity} type='number' name='quantity' placeholder='Quantity' required />

     <br />
   
       
        <input className='btn bg-secondary text-primary ' type="submit" value="Order"  disabled={!btnCondition} />
  
    
    </form>
    

  </div>
</div>


  </div>

</div>


        </div>
    );
};

export default Purchase;