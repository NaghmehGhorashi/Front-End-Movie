import { createContext, useContext, useState, useEffect } from "react";

const TrackingConsentContext = createContext();

export const TrackingConsentProvider = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("privacyConsent");
    if (consent === "true") {
      setConsentGiven(true);
    }
  }, []);

  const giveConsent = () => {
    localStorage.setItem("privacyConsent", "true");
    setConsentGiven(true);
  };

  return (
    <TrackingConsentContext.Provider value={{ consentGiven, giveConsent }}>
      {children}
    </TrackingConsentContext.Provider>
  );
};

export const useTrackingConsent = () => useContext(TrackingConsentContext);
