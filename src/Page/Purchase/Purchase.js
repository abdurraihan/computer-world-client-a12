
//import { useQuery } from 'react-query';
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import Loading from '../../Shared/Loading/Loading';


const Purchase = () => {
    const {_id} = useParams();
    
    // const {data , isLoading} = useQuery('product',()=>fetch(`http://localhost:5000/products/${_id}`).then(res=>res.json()))
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    // console.log(data)


    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
    },[])

   
    return (
        <div>
                perchase : {product[0]?.name}
        </div>
    );
};

export default Purchase;