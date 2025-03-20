import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
     let navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/createuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location
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
                navigate('/login')
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
        <div className='bg-my-newimage bg-cover h-screen'>

        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={credentials.name}
                            placeholder="Full Name" />
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
                        <input onChange={handleChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="location"
                            value={credentials.location}
                            placeholder="Location" />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 hover:bg-green-600 focus:outline-none my-1 text-zinc-950"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <NavLink to="/login" className="no-underline border-b border-blue text-blue">Login</NavLink>
                </div>
            </div>
        </div>
        </div>

    );
};

