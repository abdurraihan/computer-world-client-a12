import React from 'react';

const ReviewRow = ({SingleReview}) => {

    const{ratings , description} = SingleReview;
   
  
    return (
  

  <div className="card w-96 bg-secondary shadow-xl">
  <div className="card-body">
  <h2 className="card-title"></h2>
      
  <div className="rating">
<div>
<p className='text-2xl text-orange-400'> {ratings }</p><input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 
</div>
  </div>
        
 <p className='text-primary'>{description}</p>
    <div className="card-actions justify-end">
     
        </div>
  </div>
</div>


    );
};

export default ReviewRow;