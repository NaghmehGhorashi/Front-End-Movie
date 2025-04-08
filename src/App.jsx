import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteApp from "./Route/RouteApp";
import AppContextProvider from "./Context/AppContextProvider";
import PrivacyConsent from './Components/ShareComponents/privacy/PrivacyConsent';

function App() {
  
  React.useEffect(() => {
   var _mtm = window._mtm = window._mtm || [];
   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
   g.async=true; g.src='https://testmat-94c060c377-jti.apps.ir-thr-ba1.arvancaas.ir/js/container_xGzmYZ0M.js'; s.parentNode.insertBefore(g,s);
  }, [])

  useEffect(() => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const userAgent = navigator.userAgent;

    fetch("http://localhost:3000/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenResolution,
        userAgent,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Tracking success:", data);
      })
      .catch((err) => {
        console.error("Tracking failed:", err);
      });
  }, []);

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
