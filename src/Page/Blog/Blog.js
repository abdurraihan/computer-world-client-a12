import React from 'react';

const Blog = () => {
    return (
        <div className=' text-center text-black '>
           
            <div className='mb-24'>
            <h1 className='font-bold'>1 How will you improve the performance of a React Application?</h1 >
            <p>Ans:I will do my application optimize and do cline code
                and do below points :
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React. </p>

            <h2 className='font-bold'>What are the different ways to manage a state in a React application?</h2>
            <p>Ans: 

            There are four main types of state you need to properly manage in your React apps:

            1. Local state.
            2. Global state.
            3. Server state.
            4. URL state.

            </p>

        <h3 className='font-bold'>How does prototypical inheritance work?</h3>

        <p>Ans:
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
        </p>

        <h4 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts: </h4>

        <p>Ans:
        becouse in react we manage satate by hooks and useState hook returan 2 value one is value and one is function for include thats for we does not use sprade oporatior in react
        </p>

        <h5 className='font-bold'>What is a unit test? Why should write unit tests?</h5>
        <p> *Unit testing is **a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation**. This testing methodology is done during the development process by the software developers and sometimes QA staff.

*One of the benefits of unit tests is that **they isolate a function, class or method and only test that piece of code**. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
            </div>



        </div>
    );
};

export default Blog; 