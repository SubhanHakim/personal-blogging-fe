interface IButtonProps {
    title: string;
    type?: "button" | "submit",
    onclick?: () => void;
    variant?: "primary" | "secondary" | "disabled";
}


const Button = ({ title, type, onclick, variant = "primary" }: IButtonProps) => {
    const baseClass = "px-5 py-2 text-xl rounded-full font-semibold";


    const variantClass = {
        primary: "bg-primary text-white transition-all ease-in-out delay-100 hover:scale-110 duration-300",
        secondary: "bg-transparent border border-primary-dark text-[#515151] hover:bg-primary-dark transition-all ease-in-out delay-100 hover:scale-110 duration-300",
        disabled: "bg-gray-300 text-gray-700 cursor-not-allowed",
    }




    return (
        <button type={type} onClick={onclick} className={`${baseClass}  ${variantClass[variant]}`} disabled={variant === "disabled"}>{title}</button>
    )
}

export default Button