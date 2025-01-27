import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Make sure this import is correct and Navbar exists
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
      const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/loginuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (!data.success) {
                alert("Enter Valid Credentials");
            } else {
                console.log(data);
                localStorage.setItem('useremail',credentials.email)
                localStorage.setItem('tokens',data.authTokes)
                console.log(localStorage.getItem('tokens'))
                navigate('/');

            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
            alert("Failed to fetch data. Please try again later.");
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (

        <div className='bg-my-image bg-cover h-screen'>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange}
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                value={credentials.email}
                                placeholder="Email" />
                            <input onChange={handleChange}
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                value={credentials.password}
                                placeholder="Password" />
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 hover:bg-green-600 focus:outline-none my-1 text-zinc-950"
                            >
                                Login
                            </button>
                        </form>
                        <div className="text-grey-dark mt-6 p-3">
                    New User then
                    <NavLink to="/createuser" className="no-underline border-b border-blue text-blue p-3">Signup</NavLink>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;