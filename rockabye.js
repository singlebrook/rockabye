// Called when the user clicks on the browser action.
var rockabyeIsRockin = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  if (!rockabyeIsRockin) {
    chrome.tabs.insertCSS({file: 'rockabye.css'});
    rockabyeIsRockin = true;
  }
});
