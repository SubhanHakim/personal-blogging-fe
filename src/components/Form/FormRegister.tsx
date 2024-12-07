import React from "react";
import Button from "../Button";

interface IFormRegisProps {
    onLoginClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const formRegister: React.FC<IFormRegisProps> = ({onLoginClick}) => {

    const handleRegister = () => {
        console.log("Register");
    }
    return (
        <div>
            <form action="">
                <div className="space-y-6">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Username</label>
                        <input type="text" name="username" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input type="email" name="email" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                        <input type="password" name="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                    </div>
                </div>
                <div className="mt-12">
                    <Button title="Login" variant="create" onclick={handleRegister} />
                </div>
                <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="" onClick={onLoginClick} className="text-blue-600 font-semibold hover:underline ml-1">Sign In</a></p>
            </form>
        </div>
    );
}

export default formRegister;