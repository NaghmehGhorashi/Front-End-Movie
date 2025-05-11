import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTrackingConsent } from "../TrackingConsentContext/TrackingConsentContext";


function MatomoPageView() {
  const location = useLocation();
  const { consentGiven } = useTrackingConsent();

  useEffect(() => {
    if (!consentGiven || !window._paq) return;

    window._paq.push(["setCustomUrl", window.location.href]);
    window._paq.push(["setDocumentTitle", document.title]);
    window._paq.push(["trackPageView"]);
  }, [location.pathname, consentGiven]);

  return null;
}

export default MatomoPageView;