import {getCLS, getFID, getLCP} from 'web-vitals';
function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
        fetch('/analytics', {body, method: 'POST', keepalive: true});
  }
  
  console.log(getCLS(sendToAnalytics));
  console.log(getFID(sendToAnalytics));
  console.log(getLCP(sendToAnalytics));