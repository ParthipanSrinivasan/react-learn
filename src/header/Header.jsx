import { Link, Route, Routes } from "react-router-dom"
import App from '../App.jsx'
import Hooks from '../hooks/Hooks.jsx'
import UseEffHooks from '../hooks/UseEffHooks.jsx'

const Header = () =>{
    return (
    <>
    <nav>
        <Link to="/">Header</Link> |{" "}
        <Link to="/app">API Fetch</Link> |{" "}
        <Link to="/hooks">Hooks</Link> |{" "}
        <Link to="/UseEffHooks">Use Effects</Link>
    </nav>
    <Routes>
        <Route path="/app" element={<App/>} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/useEffHooks" element={<UseEffHooks/>} />
    </Routes>
    </>
    );
}

export default Header;
