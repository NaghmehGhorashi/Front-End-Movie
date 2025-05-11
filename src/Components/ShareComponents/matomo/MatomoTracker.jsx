import { useEffect } from "react";
import { useTrackingConsent } from "../TrackingConsentContext/TrackingConsentContext";

function MatomoTracker() {
  const { consentGiven } = useTrackingConsent();

  useEffect(() => {
    if (!consentGiven) return;
    if (window._matomoScriptLoaded) return;

    window._matomoScriptLoaded = true;

    const _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });

    const d = document;
    const g = d.createElement("script");
    const s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = "https://cdn.matomo.cloud/naghmeh.matomo.cloud/container_3S1W0JGs.js";

    g.onload = () => {
      console.log("✅ Matomo script fully loaded.");
    };

    g.onerror = () => {
      console.log("❌ Failed to load Matomo script.");
    };

    s.parentNode.insertBefore(g, s);
  }, [consentGiven]);

  return null;
}

export default MatomoTracker;
