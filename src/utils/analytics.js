// src/utils/analytics.js
/**
 * Analytics utility for tracking user interactions and page views
 * Can be integrated with Google Analytics, Mixpanel, or other analytics services
 */

// Initialize analytics (replace with your tracking ID)
export const initializeAnalytics = (trackingId) => {
  // Google Analytics code would go here
  // For now, this is a placeholder for future integration
  if (trackingId) {
    console.log("Analytics initialized with tracking ID:", trackingId);
  }
};

// Track page views
export const trackPageView = (page) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_TRACKING_ID", {
      page_path: page,
    });
  }
  console.log("Page view tracked:", page);
};

// Track custom events
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData);
  }
  console.log("Event tracked:", eventName, eventData);
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  trackEvent("button_click", {
    button_name: buttonName,
    section: section,
    timestamp: new Date().toISOString(),
  });
};

// Track project card interactions
export const trackProjectView = (projectName) => {
  trackEvent("project_view", {
    project_name: projectName,
    timestamp: new Date().toISOString(),
  });
};

// Track article engagement
export const trackArticleExpand = (articleTitle) => {
  trackEvent("article_expand", {
    article_title: articleTitle,
    timestamp: new Date().toISOString(),
  });
};

// Track section scroll
export const trackSectionScroll = (sectionId) => {
  trackEvent("section_scroll", {
    section_id: sectionId,
    timestamp: new Date().toISOString(),
  });
};

// Track external link clicks
export const trackExternalLink = (url, label) => {
  trackEvent("external_link_click", {
    url: url,
    label: label,
    timestamp: new Date().toISOString(),
  });
};

// Track download interactions
export const trackDownload = (fileName, fileType) => {
  trackEvent("download", {
    file_name: fileName,
    file_type: fileType,
    timestamp: new Date().toISOString(),
  });
};

// Track time spent on page
export const trackTimeOnPage = (duration) => {
  trackEvent("time_on_page", {
    duration_seconds: Math.round(duration),
    timestamp: new Date().toISOString(),
  });
};

export default {
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackProjectView,
  trackArticleExpand,
  trackSectionScroll,
  trackExternalLink,
  trackDownload,
  trackTimeOnPage,
};
