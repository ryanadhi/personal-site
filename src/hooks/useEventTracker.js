import ReactGA from "react-ga";

export default function useEventTracker(category = "Category") {
  const trackEvent = (action = "action", label = "label") => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return trackEvent;
}
