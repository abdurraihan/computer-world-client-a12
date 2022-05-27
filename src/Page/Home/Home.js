import React from 'react';
import Asking from './Asking';
import Banar from './Banar';
import BusinessSummary from './BusinessSummary';

import Parts from './Parts'
import Review from './Review';
import SuplyChain from './SuplyChain';

const Home = () => {
    return (
        <div className='hight-[2000px]'>
            <Banar></Banar>
           
            <Parts></Parts>

            <Review></Review>
            
            <BusinessSummary></BusinessSummary>

            <Asking></Asking>

           <SuplyChain></SuplyChain>
            
        </div>




    );
};

export default Home;