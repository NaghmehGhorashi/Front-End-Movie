import { useState, useEffect } from "react";

function PrivacyConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("privacyConsent");
    if (consentGiven) {
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("privacyConsent", "true");
    setShowConsent(false);

   
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.matomo.cloud/naghmeh.matomo.cloud/container_3S1W0JGs.js';
   g.onload = () => console.log("✅ Matomo script loaded successfully.");
g.onerror = () => console.log("❌ Failed to load Matomo script.");
    s.parentNode.insertBefore(g, s);
   


    
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
  };

  if (!showConsent) return null;

  return (
    <div className="fixed w-full bottom-2 bg-white border shadow-lg rounded-lg p-4 md:h-30 animate-fade-in md:flex md:justify-around">
      <p className="text-gray-800 md:mt-4 text-md">
        We use IP address, Screen resolution, Browser type and version, and analytics tool. By using this site, you agree to our{" "}
        <a href="/privacy" className="text-blue-500 underline">Privacy</a>.
      </p>
      <button
        onClick={handleConsent}
        className="md:mt-2 bg-amber-700 text-white md:w-40 md:h-15 rounded hover:bg-amber-500"
      >
        I Accept
      </button>
    </div>
  );
}

export default PrivacyConsent;









// import { useState, useEffect } from "react";


// function PrivacyConsent() {
//   const [showConsent, setShowConsent] = useState(false);

//   useEffect(() => {
//     const consentGiven = localStorage.getItem("privacyConsent");
//     if (consentGiven) {
//       setShowConsent(false);
//     }
//     else {
//     setShowConsent(true);
//   }
//   }, []);

//   const handleConsent = () => {
//     localStorage.setItem("privacyConsent", "true");
//     setShowConsent(false);
//   };

//   if (!showConsent) return null;
//  return (
//     <div className="fixed w-full bottom-2 bg-white border shadow-lg rounded-lg p-4 md:h-30 animate-fade-in md:flex md:justify-around">
//       <p className="text-gray-800 md:mt-4 text-md">
//         We use IP address,Screen resolution,Browser type and version,and analytics tool.By using this site, you agree to our{" "}
//         <a href="/privacy" className="text-blue-500 underline">Privacy</a>.
//       </p>
//       <button
//         onClick={handleConsent}
//         className="md:mt-2 bg-amber-700 text-white md:w-40 md:h-15 rounded hover:bg-amber-500"
//       >
//         I Accept
//       </button>
//     </div>
//   );
// }

// export default PrivacyConsent;







 
