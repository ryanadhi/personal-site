function isMobileLandscape() {
  if (
    /Mobi/i.test(window.navigator.userAgent) &&
    window.matchMedia("(orientation: landscape)").matches
  ) {
    return true;
  } else {
    return false;
  }
}

export default isMobileLandscape;
