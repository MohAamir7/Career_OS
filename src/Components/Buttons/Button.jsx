
function Button({ children, className = "", ...props }){
        return(
         <button
             className={`cursor-pointer rounded px-4 py-2 text-base text-[#333] transition-colors duration-300 hover:bg-gray-100 ${className}`}
             {...props}
         >
             {children}
         </button>
        )
}

export  default Button;