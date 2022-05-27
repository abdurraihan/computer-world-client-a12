import React from 'react';


const Portfolio = () => {
    return (
        <div className='flex justify-center'>
           <div className="card w-96 bg-base-100 text-primary shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Portfolio</h2>
    <h1>NAME  : Abdur Raihan</h1>
    <h1>Email  : abdurraihan898@gmail.com</h1>
    <h1>EDUCATION BACKGROUND : DEPLOMA IN ENGINEERING</h1>
    <h2>LIST OF TECHNOLOGY : js , html , css , bootstrap , tailwind , React , REACT ROUTER , DAISYui , Firebase , git etc..</h2>

    <h2>LIVE SITS LINK OF PROJECTS : </h2>
    <li><a className="link link-primary">https://shiny-praline-9365c1.netlify.app</a>
</li>
    <li><a className="link link-primary">https://lively-blancmange-fdd925.netlify.app/</a>
</li>
    <li><a className="link link-primary">https://modest-swartz-7586b3.netlify.app</a>
</li>

    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Portfolio;