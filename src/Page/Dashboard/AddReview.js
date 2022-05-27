
import React, { useState }   from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const [btnCondition , setBtnCondition] = useState(true)

    const minimumReatin = 1;
    const meximunReatin = 5;

    const handleReatin = (e)=> {

       
        const rating = parseInt((e.target.value));

        if(rating < minimumReatin )
        {
            setBtnCondition(!true)
            return toast.error(`You Can't review less then 1 `)
        }

        else if(rating > meximunReatin){
            setBtnCondition(!true)
            return toast.error(`You can't review more then 5 `)

            
        }

        else{
            setBtnCondition(true)
        }

    }


    const handleReview = (event) =>{
        event.preventDefault()
        const ratings = event.target.rating.value;
        const description = event.target.description.value;
        
        const review = {
            ratings:ratings,
            description:description
        }
       

        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{

            //console.log(data)
            if(data.insertedId){
                return toast.success('your Review Sending...')
            }

        } )



       }
    
    return (
        <div> 

        <h2 className='m-5 text-3xl text-primary'>ADD Review</h2>
     
  <form onSubmit={handleReview}>

   <div className='grid m-5'>

   

      <input  type="number" name='rating'
          placeholder="give rating 1 to 5" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" onChange={handleReatin} required />

      <input type="text" name='description'
          placeholder="Enter Description" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2"  required/>



   </div>

      <input className='btn my-2 bg-primary m-5' disabled={!btnCondition} type="submit" value='Add Review' />

  </form>
</div>
    );
};

export default AddReview;