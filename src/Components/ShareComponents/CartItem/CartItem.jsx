
import { useEffect, useState } from "react"
import Button from "../../CoreComponents/Button/Button"
import {MovieApi} from "../../../Services/ProductApi"
import {useAppContext} from "../../../Context/AppContextProvider"
import Wrapper from "../Wrapper/Wrapper"


function CartItem({id,qty}) {
  const{DecreaseQty,IncreaseQty,getProductQty,removeProductFromCart} = useAppContext()
const [data,setData]=useState({})

useEffect(() => {
  MovieApi(id)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
}, [id]); 


  
  return (
    <div>
      <Wrapper>
          <div className="grid grid-cols-5 mb-5">
             <img className="w-30 h-full col-1" src={data.poster_path} alt={data.original_title} />
              <div className="col-span-1 my-auto"><p className="text-blue-50 ml-3.5"> {data.original_title}</p></div>
              <div className="col-span-1 my-auto"><p className="text-blue-50 ml-3.5"> {data.popularity} $</p></div>
              <div className="col-span-2 "> 
             
              <div className="flex flex-col mt-10">
              <div className="flex mb-4 ml-3">
                <Button className="text-blue-300 size-8" onClick={()=>{IncreaseQty(id)}}>+</Button>
                <span className="text-blue-100 ml-2">{getProductQty(id)}</span>
                <Button className="text-blue-300 size-8" onClick={()=>{DecreaseQty(id)}}>-</Button>
              </div>
              <div>
                <Button  className="bg-red-500" onClick={()=>{removeProductFromCart(id)}} >Delete</Button>
                </div>
              </div>
             </div>
             
          </div>
          <hr />
    </Wrapper>
    </div>
  )
}

export default CartItem
