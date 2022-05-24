import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';





const Parts = () => {


    const [products , setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/products',)
        .then(res=> res.json())
          .then(data=> {
            setProducts(data)
          })
      
      }, [])

    
    return (
        <div>

<h2 className=' flex  justify-center font-serif text-3xl p-5 text-primary' > Parts Of Computer </h2>
          


            <div className=' flex justify-center'>
                
            <div className='grid grid-cols-1 mb-20 lg:grid-cols-3 gap-5'>
                
                {
                    products.slice(0 , 6).map(product => <PartsCard
                  key={product._id}
                    product={product}
                    ></PartsCard>)
                }
                
           </div> 
            </div>

        </div>
    );
};

export default Parts;