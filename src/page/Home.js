import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams} from 'react-router-dom';

export default function Home() {

const [users,setUser]=useState([]);

const {id} = useParams()

useEffect(()=>{
    //console.log("cord with gayan")
 loaduser();
},[]);

const loaduser=async()=>{
    const result =await axios.get("http://localhost:8080/user");
    //console.log(result.data);
    setUser(result.data);
};

const deleteuser=async(id)=>{
   await axios.delete(`http://localhost:8080/user/${id}`)
   loaduser()
};

  return (
    <div className='container'>
        <div className='py-4'>
         
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
       users.map((user,Index)=>(
        <tr>
        <th scope="row" key={Index}>{Index+1}</th>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.password}</td>
        <td>{user.email}</td>
        <td>
            <button className="btn btn-primary mx-2">View</button>
            <Link className="btn btn-outlineprimary mx-2"
            to={`/edituser/${user.id}`}
            >Edit</Link>
            <button className="btn btn-danger mx-2"
            onClick={()=>deleteuser(user.id)}
            >Delete</button>
        </td>
      </tr>

       )) 
    }
    
      </tbody>
</table>
        </div>
    </div>
  )
}
