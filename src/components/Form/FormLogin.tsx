import React, { useState } from "react";
import Button from "../Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormLoginProps {
    onCreateOneClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const FormLogin: React.FC<IFormLoginProps> = ({ onCreateOneClick }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", {
                email,
                password
            })
            console.log(response.data);

            if (response.status === 200) {
                const token = response.data.token
                sessionStorage.setItem("token", token);
                navigate("/reading");
            }

            
        } catch (error) {
            console.error("Error", error);

        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="space-y-6">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                </div>
                <div className="mt-12">
                    <Button title="Login" variant="create" disabled={isLoading} />
                </div>
                <p className="text-gray-800 text-sm mt-6 text-center">No Account ? <a href="" onClick={onCreateOneClick} className="text-blue-600 font-semibold hover:underline ml-1">Create One</a></p>
            </form>
        </div>
    );
}

export default FormLogin;