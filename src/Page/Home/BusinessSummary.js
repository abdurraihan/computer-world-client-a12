import React from 'react';


const BusinessSummary = () => {
    return (
        <div className='mb-24'>

                <h2 className=' text-center text-4xl font-serif text-primary'>Business Summary </h2>

            <div className='flex justify-center'>



                <div class="stats text-primary stats-vertical h-[400px] w-[80%] bg-secondary lg:stats-horizontal shadow">

                    <div class="stat ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-30" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>

                        <div class="stat-value">10K</div>
                        <div class="stat-desc text-2xl">Worker</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-30" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div class="stat-value">12+</div>
                        <div class="stat-desc text-2xl">Country</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-30" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>

                        </div>

                        <div class="stat-value">6+</div>
                        <div class="stat-desc text-2xl">Products</div>
                    </div>

                </div>
            </div>
          

        </div>
    );
};

export default BusinessSummary;