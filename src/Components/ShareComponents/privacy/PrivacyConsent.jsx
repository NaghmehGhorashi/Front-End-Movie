import { useState, useEffect } from "react";
import { useTrackingConsent } from "../TrackingConsentContext/TrackingConsentContext";

function PrivacyConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { giveConsent, consentGiven } = useTrackingConsent();

  useEffect(() => {
    setShowConsent(!consentGiven);
  }, [consentGiven]);

  const handleConsent = () => {
    giveConsent();
    setShowConsent(false);

  
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const userAgent = navigator.userAgent;

    fetch("http://localhost:3000/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ screenResolution, userAgent }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("📥 Backend tracking success:", data);
      })
      .catch((err) => {
        console.error("❌ Backend tracking failed:", err);
      });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed w-full bottom-2 bg-white border shadow-lg rounded-lg p-4 md:h-30 animate-fade-in md:flex md:justify-around">
      <p className="text-gray-800 md:mt-4 text-md">
        We use IP address, screen resolution, browser type/version, and analytics tools. By using this site, you agree to our{" "}
        <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>.
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
















 
