import { useEffect, useState } from 'react'
import './App.css'
const App = () =>{
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataisLoaded] = useState(false);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) =>{
      console.log(json);
      setItems(json);
      setDataisLoaded(true);
    });
  }, []);
  if (!dataIsLoaded){
    return(
      <>
      <div>
        <h1>PLease Wait Some Time.....</h1>
      </div>
      </>
    )
  }
  return (
    <>

    </>
  );
}

export default App
