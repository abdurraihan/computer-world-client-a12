import React from 'react';
import banar from '../../image/banar/Parts-of-Computer.webp'
const Banar = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={banar} alt="Album"/></figure>
        <div class="card-body bg-secondary text-primary font-bold">
          <h2 class="card-title">Computer Of Parts</h2>
          <p> Computer of parts Manufacture best Computer parts for users </p>
          <div class="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default Banar;