import { Form, Link, Route, Routes } from "react-router-dom"
import App from '../App.jsx'
import Hooks from '../hooks/Hooks.jsx'
import UseEffHooks from '../hooks/UseEffHooks.jsx'
import MyForm from '../forms/Form.jsx'
import FormSubmit from '../forms/Formsubmited.jsx'
import ContactForm from "../forms/ContactForm.jsx"

const Header = () =>{
    return (
    <>
    <nav>
        <Link to="/">Header</Link> |{" "}
        <Link to="/app">API Fetch</Link> |{" "}
        <Link to="/hooks">Hooks</Link> |{" "}
        <Link to="/UseEffHooks">Use Effects</Link> |{" "}
        <Link to="/MyForms">Forms</Link> |{" "}
        <Link to="/Form-submited">FormsSubmited</Link>
        <Link to="/ContactForm">Contact- FormS</Link>
    </nav>
    <Routes>
        <Route path="/app" element={<App/>} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/useEffHooks" element={<UseEffHooks/>} />
        <Route path="/MyForms" element={<MyForm/>}/>
        <Route path="/Form-submited" element={<FormSubmit/>}/>
        <Route path="/ContactForm" element={<ContactForm/>}/>
    </Routes>
    </>
    );
}

export default Header;
