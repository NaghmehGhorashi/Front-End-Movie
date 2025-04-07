import { Link } from "react-router-dom"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function PageFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-orange-700 h-20 md:mt-50  w-full ">
    <div className="md:ml-2 md:flex ">
      <Link className="text-amber-50 text-md font-medium mr-4" > Tech blog </Link>
      <Link className="text-amber-50 text-md font-medium mr-4" >Terms & Conditions</Link>
      <Link className="text-amber-50 text-md font-medium mr-4" to="/Privacy">Privacy Notice</Link>
    </div>
      
      <div className="text-amber-50 text-2xl flex md:mr-2 ">
        <AiOutlineLinkedin />
        <FaInstagram /> 
      </div>
    </div>
  )
}

export default PageFooter
