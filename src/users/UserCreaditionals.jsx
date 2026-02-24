import { useState, useEffect } from "react";

const UserCreaditionals = () =>{
    const[items,setItems] = useState([]);
    const [dataISLoaded, setDataisLoaded] = useState(false)

    useEffect(() =>{
        fetch("http://127.0.0.1:8000/users")
        .then((res) => res.json())
        .then((json) =>{
            setItems(json);
            setDataisLoaded(true);
        });
    }, []);
    if (!dataISLoaded){
        return(
            <>
            <div>
                <h1>Please wait users data Fetch</h1>
            </div>
            </>
        )
    }
    return (
        <>
        <div className="container">
            <table border="1">
                <thead>
                    <tr>
                        <th><strong>ID</strong></th>
                        <th><strong>Name</strong></th>
                        <th><strong>Email</strong></th>
                        <th><strong>Age</strong></th>
                        <th><strong>City</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) =>(
                        <tr className='item' key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.profile?.age}</td>
                            <td>{item.profile?.city}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>

        </div>
        </>
    )
}

export default UserCreaditionals;