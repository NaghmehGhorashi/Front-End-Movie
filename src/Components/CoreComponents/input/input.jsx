import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Input({ className,label,...rest }) {
  return (
     <div>
      {label && <label htmlFor="">{label}</label>} 
      <input
       className={twMerge(clsx(`border rounded-md cursor-pointer w-25 h-8`,className))}
      {...rest} />
       </div>
  );
}

export default Input;
