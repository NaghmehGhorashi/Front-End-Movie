
import { useAppContext } from "../../Context/AppContextProvider"
import Slider from "../../Components/CoreComponents/Slick/Slick"
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper"



function Home() {
const a =useAppContext()
console.log(a)

  return (
    <Wrapper>
      <div className="mt-5">

    <Slider />
     
    </div>
    </Wrapper>
    
  )
}

export default Home
