import React, { useEffect, useState } from 'react';
import PartsCard from '../Home/PartsCard';





const Products = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://https-github-com-abdurraihan-computer.onrender.com/products   ', {

      method: 'GET',

      headers: {

        authorization: `Bearer ${localStorage.getItem('accessToken')}`

      }

    })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })

  }, [products])


  return (
    <div className='overflow-auto '>

      <h2 className=' flex  justify-center font-serif text-3xl p-5 text-primary' > ALL PRODUCTS  </h2>



      <div className=' flex justify-center'>

        <div className='grid grid-cols-1 mb-20 lg:grid-cols-3 gap-5'>

          {
            products.map(product => <PartsCard
              key={product._id}
              product={product}
            ></PartsCard>)
          }

        </div>
      </div>

    </div>
  );
};

export default Products;