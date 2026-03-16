import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className ="", ...props}, ref) => {
    return (
        <input 
        className = {`appearance-none block w-full bg-white text-gray-700 border border-gray-200 p-2 rounded ${className}`}
        {...props}/>
    );
});

Input.displayName = "Input";
export default Input;
