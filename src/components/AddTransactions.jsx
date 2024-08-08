import React, { useEffect, useState } from 'react'
import Button from './Button';
import InputField from './InputField';


function AddTransactions() {
   const  [id, setId]=useState("")
   const [date, setDate] = useState("");
   const [description, setDescription] = useState("");
   const [category, setCategory] = useState("");
   const [amount, setAmount] = useState("");
   
   
   function addTransactions (){
    fetch("http://localhost:3000/Transaction_data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id:id,
        date:date,
        description:description,
        category:category,
        amount:amount
        
      })
    });
   }
  return (
    <form onSubmit={addTransactions}>
      <InputField placeholder="Enter id" type="text" onChange = {(e)=> setId(e.target.value)} />
      <InputField placeholder="Enter date" type="date" onChange = {(e)=> setDate(e.target.value)}/>
      <InputField placeholder="Enter description" type="text" onChange = {(e)=> setDescription(e.target.value)}/>
      <InputField placeholder="Enter category" type="text" onChange = {(e)=> setCategory(e.target.value)}/>
      <InputField placeholder="Enter amount" type="text" onChange = {(e)=> setAmount(e.target.value)}/>
      <Button buttonName = "Submmit"/>
    </form>
  );
}

export default AddTransactions
