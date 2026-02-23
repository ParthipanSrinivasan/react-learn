import { useState } from "react";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch ("http://127.0.0.1:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData)
        });

        const data = await response.json();
        console.log(data);
        alert("User Created!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Submited</button>
        </form>
    )
}

export default UserForm