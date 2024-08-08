import React from 'react'

function DisplayList({transations}) {
  return (
    <div>
     {transations.map((transation)=>{
        return (
          <li key={transation.id} className='list'>
            <strong>Date:</strong>
            {transation.date}
            <strong>Description:</strong>
            {transation.description}
            <strong>Category:</strong>
            {transation.category}
            <strong>Amount:</strong>
            {transation.amount}
          </li>
        );
     })} 
    </div>
  )
}

export default DisplayList;
