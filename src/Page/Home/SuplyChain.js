import React from 'react';

const SuplyChain = () => {
    return (
        <div className='mb-[200px] '>
            <h2 className='text-center text-xl text-primary'>Supply Chain OF OUR PRODUCTS DELIVERY</h2>
           <div className='flex justify-center'>
           <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose Products</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
            </ul>
            
           </div>
        </div>
    );
};

export default SuplyChain;