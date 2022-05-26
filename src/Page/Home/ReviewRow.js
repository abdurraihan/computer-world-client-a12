import React from 'react';

const ReviewRow = ({SingleReview}) => {

    const{ratings , description} = SingleReview;
   
    
    return (
        <div class="card w-96 bg-secondary shadow-xl">
  <div class="card-body">
  <h2 class="card-title"></h2>
      
  <div class="rating">
<div>
<p className='text-2xl text-orange-400'> {ratings }</p><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
 
</div>
  </div>
        
 
 <p className='text-primary'>{description}</p>
    <div class="card-actions justify-end">
     
        </div>
  </div>
</div>
    );
};

export default ReviewRow;