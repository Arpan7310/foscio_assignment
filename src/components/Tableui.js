import React, { useEffect, useState }  from 'react'
import {Table} from 'react-bootstrap'
import Axios from 'axios'
function Tableui () {

  useEffect (()=>{
   load();
  },[])

  const [data,setData]=useState([])

  const load = async () =>{
    try{
   const res = await  Axios.get('http://localhost:4000/getData')
    setData(res.data)
   
    }
    catch(err){
      console.log(err)
    }
  }


    return(
      <div>
        <h1 style={{textAlign:'center',padding:'5%'}}>Details shown in Table Format</h1>
<Table striped bordered hover>

  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Gender</th>
      <th>Status</th>
    </tr>
  </thead>
  {data.map((item,index)=>{
    return(
      <tbody>
      <tr>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>{item.status}</td>
        <td>{item.gender}</td>
      </tr>
    
    
    </tbody>
    )
  })}

</Table>
</div>
    )
}

export default Tableui