import { NavLink } from "react-router-dom";
import Button from "../Button";


const Navbar = () => {
    return (
        <nav className="px-36 py-6 border border-b-2 border-black">
            <header className="flex justify-between">
                <NavLink to="/" className="uppercase text-black font-bold text-3xl">Lempar</NavLink>
                <div className="flex gap-10 items-center">
                    <NavLink to="/login" className="text-black font-normal text-xl">Our Story</NavLink>
                    <NavLink to="/register" className="text-black font-normal text-xl">Sign in</NavLink>
                    <Button title="Get Started" variant="primary" />
                </div>
            </header>
        </nav>
    );
}

export default Navbar;