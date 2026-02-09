import { useState } from "react";
const ContactForm = () =>{
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        //form Data
        const formData = {
            name,
            email,
            phone,
            password
        }

        console.log("Submitted Data:", formData)

        //Clear form
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <div>
            <label>Name :</label>
            <input 
            type = "text"
            value = {name}
            onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div>
            <label>Email :</label>
            <input type = "email"
            value = {email}
            onChange = {(e)=> setEmail(e.target.value)}
            />
        </div>
        <div>
            <label>
                Phone :
            </label>
            <input 
            type = "phone" 
            value = {phone}
            onChange = {(e)=> setPhone(e.target.value)}
            />
        </div>
        <div>
            <label>
                Password : 
            </label>
            <input 
            type = "password"
            value = {password}
            onChange = {(e)=> setPassword(e.target.value)}
            />
        </div>
        <div>
            <button type="submit">Submited</button>
        </div>
        </form>
        </>
    );
}

export default ContactForm;