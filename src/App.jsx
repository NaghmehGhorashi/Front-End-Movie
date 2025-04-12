
import { BrowserRouter } from "react-router-dom";
import RouteApp from "./Route/RouteApp";
import AppContextProvider from "./Context/AppContextProvider";
import PrivacyConsent from './Components/ShareComponents/privacy/PrivacyConsent';

function App() {
  const permission = localStorage.getItem("privacyConsent");

  return (
    <AppContextProvider>
      <BrowserRouter>
        <RouteApp />
        <PrivacyConsent />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;








// import React, { useEffect } from 'react';
// import { BrowserRouter } from "react-router-dom";
// import RouteApp from "./Route/RouteApp";
// import AppContextProvider from "./Context/AppContextProvider";
// import PrivacyConsent from './Components/ShareComponents/privacy/PrivacyConsent';

// function App() {
//   const permission=localStorage.getItem("privacyConsent")

 

 
//   React.useEffect(() => {
//      console.log('Permission changed:', permission);

//       var _mtm = window._mtm = window._mtm || [];
//       _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
//       var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
//       g.async = true;
//       g.src = 'https://cdn.matomo.cloud/naghmeh.matomo.cloud/container_3S1W0JGs.js';
//       s.parentNode.insertBefore(g, s);
  
//   }, [permission]);




    
//   useEffect(() => {
//       if (permission){
//     const screenResolution = `${window.screen.width}x${window.screen.height}`;
//     const userAgent = navigator.userAgent;

//     fetch("http://localhost:3000/api/track", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         screenResolution,
//         userAgent,
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log("Tracking success:", data);
//       })
//       .catch((err) => {
//         console.error("Tracking failed:", err);
//       });
//   }}, [permission]);

//   return (
//     <AppContextProvider>
//       <BrowserRouter>
//         <RouteApp />
//         <PrivacyConsent />
//       </BrowserRouter>
//     </AppContextProvider>
//   );
// }

// export default App;
