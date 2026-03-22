// src/hooks/useAnalyticsTracking.js
import React from "react";
import { trackPageView, trackTimeOnPage } from "../utils/analytics";

/**
 * Custom hook to track analytics metrics
 * Automatically tracks page views and time spent on page
 */
export const useAnalyticsTracking = () => {
  React.useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);

    // Track time spent on page
    const startTime = Date.now();
    return () => {
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      if (duration > 2) {
        // Only track if user spent more than 2 seconds
        trackTimeOnPage(duration);
      }
    };
  }, []);
};

export default useAnalyticsTracking;
