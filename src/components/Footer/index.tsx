import { NavLink } from "react-router-dom"
import dataFooter from "../../json/FooterData.json"

const Footer = () => {
    return (
        <footer className="text-center p-4 px-36 py-6 border border-t-2 border-black">
            <div className="flex justify-center gap-5">
                {dataFooter.map((item, index) => {
                    return (
                        <div key={index} className="">
                            <NavLink to={item.to} className="text-black font-light text-base flex">{item.title}</NavLink>
                        </div>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer