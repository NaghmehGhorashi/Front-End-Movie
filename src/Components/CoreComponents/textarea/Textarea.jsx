import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Textarea({className, label,...rest }) {
  return (
     <div>
      {label && <label htmlFor="">{label}</label>} 
      <textarea
       className={twMerge(clsx(`border rounded-md cursor-pointer `,className))}
      {...rest} />
        
    
    </div>
  );
}

export default Textarea;
