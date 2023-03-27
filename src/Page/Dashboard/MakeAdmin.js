import React, { useEffect, useState } from 'react';

import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {

    const [users , setAllUser] = useState([])

    useEffect( ()=>{
        fetch('https://https-github-com-abdurraihan-computer.onrender.com/users')
        .then(res=> res.json())
        .then(data => setAllUser(data))
    } ,[users])
 




    return (
        <div>
        <h2> all users : {users?.length} </h2>

        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
  <tr>
    <th></th>
    <th>Email</th>
    <th>ADMIN MAKER</th>
   
  </tr>
</thead>
<tbody>
 
 {
     users?.map( (user , index) => <MakeAdminRow  
     index={index} 
     key={user._id} 
     user={user}
     
     > 
     
     </MakeAdminRow>)
 }
 
</tbody>
</table>
</div>



    </div>
    );
};

export default MakeAdmin;