import { useEffect, useState } from 'react'
import './App.css'
const App = () =>{
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataisLoaded] = useState(false);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
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
      <h1>Candidates Databse</h1>
      <h3>fetch data from an API in React</h3>
      <div className="container">
            <table border="1">
                      <tr>
                        <th><strong>ID</strong></th>
                        <th><strong>USER_ID</strong></th>
                        <th><strong>TITLE</strong></th>
                      </tr>
                        {items.map((item) =>(
                          <tr className='item' key={item.id}>
                          <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      
                          </tr>
                      ))}
            </table>
      </div>
    </>
  );
}

export default App
