import React from 'react';
import banar from '../../image/banar/Parts-of-Computer.webp'
const Banar = () => {
    return (
        <div className="card  lg:card-side bg-base-100 ">
        <figure><img src={banar} alt="Album"/></figure>
        <div className="card-body bg-secondary text-primary font-bold">
          <h2 className="card-title justify-center text-5xl p-5 font-sans">COMPUTER PARTS</h2>
          <p className='text-xl  font-serif'> We are Manufacture best Computer parts for users , You can Feel free purchase fom us any  products   </p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default Banar;