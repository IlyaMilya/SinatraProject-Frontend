import React, {useState, useEffect} from 'react';
import './App.css';
import CatContainer from './components/CatContainer';
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
    // <h1>fetching</h1>
    <div> 
      <catContainer data={data} />
    </div>
  );
}


export default App;
