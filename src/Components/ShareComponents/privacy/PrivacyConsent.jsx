import { useState, useEffect } from "react";


function PrivacyConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("privacyConsent");
    if (consentGiven) {
      setShowConsent(false);
    }
    else {
    setShowConsent(true);
  }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("privacyConsent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;
 return (
    <div className="fixed w-full bottom-2 bg-white border shadow-lg rounded-lg p-4 md:h-30 animate-fade-in md:flex md:justify-around">
      <p className="text-gray-800 md:mt-4 text-md">
        We use IP address,Screen resolution,Browser type and version,and analytics tool.By using this site, you agree to our{" "}
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








