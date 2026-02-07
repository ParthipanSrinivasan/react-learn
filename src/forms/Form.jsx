import { useState } from "react";

const MyForm = () =>{
    const [name, setName] = useState("")
    const handleChange = (e) =>{
        setName(e.target.value);
        console.log(e)
    }
    return (
    <>
    <form>
        <label>Enter Your Full Name:</label>
        <input type="text"
        value={name}
        onChange={handleChange}
        />
        <h3>Current Value: {name}</h3>
    </form>
    </>
    );
}
export default MyForm;