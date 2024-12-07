interface IButtonProps {
    title: string;
    type?: "button" | "submit",
    onclick?: () => void;
    variant?: "primary" | "secondary" | "disabled" | "create";
    disabled?: boolean;
}


const Button = ({ title, type, onclick, variant = "primary" }: IButtonProps) => {
    const baseClass = "py-3 px-4 text-xl rounded-full font-semibold";


    const variantClass = {
        primary: "bg-primary text-white transition-all ease-in-out delay-100 hover:scale-110 duration-300",
        secondary: "bg-transparent border border-primary-dark text-[#515151] hover:bg-primary-dark transition-all ease-in-out delay-100 hover:scale-110 duration-300",
        disabled: "bg-gray-300 text-gray-700 cursor-not-allowed",
        create: "w-full text-sm tracking-wider font-semibold rounded-md text-white bg-black hover:bg-blue-700 focus:outline-none"
    }




    return (
        <button type={type} onClick={onclick} className={`${baseClass}  ${variantClass[variant]}`} disabled={variant === "disabled"}>{title}</button>
    )
}

export default Button