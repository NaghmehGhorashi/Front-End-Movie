import CartItem from "../../Components/ShareComponents/CartItem/CartItem";
import { AppContext } from "../../Context/AppContextProvider";
import { useContext, useEffect, useState } from "react";
import { MovieApi } from "../../Services/ProductApi";
import {checkDiscount} from "../../Services/ProductApi"
import Input from "../../Components/CoreComponents/input/input";
import Button from "../../Components/CoreComponents/Button/Button";
import { useParams } from "react-router-dom";

function Cart() {
  const { cartItems } = useContext(AppContext);
  const[products,setProducts]=useState([])
  const[discountCode,setDiscountCode]=useState("")
  const [discountAmount, setDiscountAmount] = useState(0);
const { id } = useParams();

  useEffect( ()=>{
    MovieApi(id).then( (respond)=>{
      let data=respond.data
      setProducts(data)
    })
    .catch( (error)=>(console.log("error",error)))
  },[])


  let totalPrice=cartItems.reduce( (total,item)=>{
    let selectedProduct=products.find((_item)=>(_item.id==item.id))
    return total + ((selectedProduct?.popularity ?? 0)* item.qty)
  },0)

 const submitDiscount = async() => {
  const discountValue = await checkDiscount(discountCode);
  if (discountValue) {
    setDiscountAmount(discountValue.percent); 
  } else {
    alert("Invalid discount code"); 
  }
};
 
return (
  <div>
    {cartItems.length > 0 ? (
      <>
        {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
        <div className="flex flex-col items-center h-screen mt-5">
          <p className="text-blue-50">Total Price: {totalPrice}</p>
          <p className="text-blue-50">
            Discount: <span>{parseInt(totalPrice) * discountAmount / 100}</span>
          </p>
          <p className="text-blue-50">
            Discounted Price: <span>{parseInt(totalPrice) - (parseInt(totalPrice) * discountAmount / 100)}</span>
          </p>
          <div className="flex mt-5">
            <Input className="text-amber-50 w-50" onChange={(e) => setDiscountCode(e.target.value)} placeholder="Write your code" />
            <Button onClick={submitDiscount}>Submit</Button>
          </div>
        </div>
      </>
    ) : (
      <p className="text-white flex justify-center mt-20 text-3xl">No Item In Cart</p>
    )}
  </div>
);
  
}

export default Cart;
