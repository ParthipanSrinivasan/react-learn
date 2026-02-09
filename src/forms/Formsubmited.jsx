import { useState } from "react";

const FormSubmit = () =>{
    const [name, setName] = useState("");
    const handleChange = (e) =>{
        console.log(e.target.value)
        setName(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(name);
    }
    return(
        <>
        <form onSubmit ={handleSubmit}>
        <label>Enter Your Name :</label>
        <input type="text" 
            value = {name}
            onChange = {handleChange}
        />
        <button type="submit">Form submited</button>
        </form>
        </>
    );
}
export default FormSubmit;