// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({ file: "on_off.js" });
  chrome.tabs.insertCSS({ file: "rockabye.css" });
});
