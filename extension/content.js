/*global chrome*/

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log("hello extension!");

      var div = $("<div>");

      div.css({
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: '1px solid black'
      });
      div.text('hello from Lincoln and Sheridan')

      div.appendTo(document.body);
    }
  }
);

