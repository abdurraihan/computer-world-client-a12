import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ReviewRow from './ReviewRow';

const Review = () => {


    const {data: reviews , state} = useQuery('reviews', ()=>fetch('https://https-github-com-abdurraihan-computer.onrender.com/review', {
        method: 'GET',

        headers: {

            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    })
    .then(res => res.json()))

    if(state ==='loading'){
       return <Loading></Loading>

    }





    return (
        <div className='mb-24'>
            <h2 className='text-center text-3xl font-bold'> Customer <small className='text-5xl text-orange-400 '>reviewS</small> </h2>

         <div className='flex justify-center'>

         <div className='grid  grid-cols-1 lg:grid-cols-3 gap-4'>
          {
                reviews?.map(SingleReview =><ReviewRow key={SingleReview._id}
                    SingleReview={SingleReview}
                ></ReviewRow>)
            }
          </div>
     
         </div>

        </div>




    );
};

export default Review;