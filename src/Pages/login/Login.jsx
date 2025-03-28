import Input from "../../Components/CoreComponents/input/input"
import Button from "../../Components/CoreComponents/Button/Button"
import { useState } from "react"
import Cookies from "js-cookie"
// import {userLogin} from "../../Services/ProductApi"


function Login() {
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")

   const handelLogin = async ()=>{
//    const data = await userLogin(username,password) -> data.token data.expire
// eslint-disable-next-line no-unused-vars
const data ={
token:"qzctbwsdeafqkkfikkchuihewufhciuweht8njoqeir97y4",
expire:"1"
}
Cookies.set("token",data.token, { expires: 1 / (24 * 60) })
location.reload()
   }

  return (
<div className="flex justify-center">
      <div className="flex flex-col items-center border border-orange-400 mt-50 w-80 h-40">
     
      <p className="text-amber-50">Login</p>
       <Input 
          onChange={(e) => setUsername(e.target.value)} 
          className="mt-2 bg-amber-50 w-50" 
          type="text"
          placeholder=" Username"
          value={username}
        />
      
        <Input 
          onChange={(e) => setPassword(e.target.value)} 
          className="mt-2 bg-amber-50 w-50" 
          type="password"
          placeholder=" Password"
          value={password}
        />
      <Button onClick={handelLogin} className="mt-3 rounded-lg">Submit</Button>
     
   
  </div>
</div>
  )
}

export default Login
