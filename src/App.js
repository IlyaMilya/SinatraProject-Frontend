import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 

  const [data, setData] = useState([])
  const request = async () => {
    let req = await fetch('http://localhost:9292/facts')
    let res = await req.json()
    console.log("response", res)
    setData(res)
    } 
    
  useEffect (() => { request() }, [] )
  
  
return (
    <h1>fetching</h1>
    
  );
}


export default App;
