import React from 'react';
import banar from '../../image/banar/Parts-of-Computer.webp'
const Banar = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={banar} alt="Album"/></figure>
        <div className="card-body bg-secondary text-primary font-bold">
          <h2 className="card-title text-5xl font-sans">Computer Of Parts</h2>
          <p className='text-3xl font-serif'> We are Manufacture best Computer parts for users </p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default Banar;