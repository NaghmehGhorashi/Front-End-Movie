import { BrowserRouter } from "react-router-dom"
import RouteApp from "./Route/RouteApp"

import AppContextProvider from "./Context/AppContextProvider"


function App() {


  return (
    <>
      <AppContextProvider>
       <BrowserRouter>
     
         <RouteApp />
        
       </BrowserRouter>
     </AppContextProvider>
    
    </>
  )
}

export default App
