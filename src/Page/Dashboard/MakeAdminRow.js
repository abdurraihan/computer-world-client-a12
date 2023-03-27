
import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({user , index }) => {

    const {email , role }= user 
    console.log(role);

    const makeAdmin =()=>{
        fetch(`https://https-github-com-abdurraihan-computer.onrender.com/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            }
        })

        .then(res => res.json())
        .then(data => {
           // console.log(data);
        if(data.modifiedCount > 0){
            
            toast.success(`successfully made an admin`);
        }

        })
    };


    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td> {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
       
      </tr>
    );
};

export default MakeAdminRow ;