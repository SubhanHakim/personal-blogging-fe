import React, { useState } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

interface LoginProps {
    onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {

    const [isRegister, setIsRegister] = useState(false);

    const handleCreateOneClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsRegister(true);
    };

    const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsRegister(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 h-screen p-4">
            <div className="max-w-md w-full mx-auto rounded-2xl p-8 bg-white">
                <div className="flex justify-end">
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-black rounded">Close</button>
                </div>
                {isRegister ? <FormRegister onLoginClick={handleLoginClick} /> : <FormLogin onCreateOneClick={handleCreateOneClick} />}
            </div>
        </div>
    );
}

export default Login;
