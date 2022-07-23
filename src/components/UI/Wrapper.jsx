import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Form from '../form/Form'
import Table from '../table/Table';


import {addDoc, collection, getDocs, updateDoc,doc, deleteDoc} from "firebase/firestore";
import { db } from '../../helpers/firebase';

const Wrapper = () => {
const [users,setUsers]=useState([]);
// console.log(users)
const userCollectionRef=collection(db,"newUsers");
console.log(users)


const getUserInfo=useCallback(async()=>{
  try {
    const response= await getDocs(userCollectionRef);
const {docs}=response;
console.log(docs)

setUsers(docs.map(doc=>({...doc.data(), id:doc.id, index:new Date().getTime()})))
  } catch (error) {
    console.log(error)
  }
},[userCollectionRef]);
useEffect(()=>{
  getUserInfo()
},[]);

//!creating new user

const createUser=async(gender,name,phone)=>{
  const data={
    gender:gender,
    name:name,
    phone:phone
  }
  try {
    await addDoc(userCollectionRef,data);
     getUserInfo();
  } catch (error) {
    
  }
}
const updateUser=async(id,gender,name,phone)=>{
  const userDoc=doc(db,"newUsers", id);//? userDoc ile hangi dosyaya refer ettiğimizi buluyoruz
  const newObject={
    gender:gender,
    phone:phone,
    name:name
  }
  // console.log("fdad")
  // const filteredData=users.filter(data=>data.id!==id).map(()=>newObject)
  
  await updateDoc(userDoc,newObject)//!replace current with the updated version
  getUserInfo()

}
const deleteUser=async(id)=>{
  const userDoc=doc(db,"newUsers", id); //? userDoc ile hangi dosyaya refer ettiğimizi buluyoruz
  

  try {
    await deleteDoc(userDoc)
  } catch (error) {
    console.log(error)
  }
  getUserInfo();
}
  return (
    <Fragment> 
<div className="container  wrapper ">
    <div className='gap-4 d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center  '>
      <Form createUser={createUser} />
      <Table  users={users} updateUser={updateUser}  deleteUser={deleteUser} />
    </div>
</div>

    </Fragment>
  )
}

export default Wrapper