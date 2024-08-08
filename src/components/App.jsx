import { useEffect, useState } from "react";
import AddTransactions from "./AddTransactions";
import DisplayList from "./DisplayList";


function App() {
  const url = "https://bank-flatiron-weld.vercel.app/Transaction_data";
  const [transactions, setTransactions] = useState([])

  useEffect (()=>{
    fetch (url)
    .then((res)=> res.json())
    .then((data)=> {
      setTransactions(data)
    })
  }, [])
 
  return (
    <>

      <header className="App">Bank of Flatiron</header>
      <div className="search">
        <input type="text" placeholder="search...." className="search" />
      </div>
      
      <AddTransactions />
      <DisplayList transations={transactions} />
    </>
  );
  
}


export default App;
