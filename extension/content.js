/*global chrome*/

// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log("hello extension!");

    var highlightDiv = $('<div>')
    highlightDiv.attr('id', 'page-scraper-highlighted')

    $('body').mouseover(function(e) {
      console.log(e);
      var highlightTarget = $(e.target)
      highlightDiv.offset(highlightTarget.offset())
      highlightDiv.width(highlightTarget.width())
      highlightDiv.height(highlightTarget.height())
    })
    
    var div = $("<div>");

    div.attr('id', 'page-scraper')
    div.css({
      position: 'fixed',
      left: '0px',
      bottom: '0px',
      width: '100%',
      height: '20vh',
      border: '1px solid black',
      backgroundColor: 'white'
    });
    div.text('hello from Lincoln and Sheridan')

    div.appendTo(document.body);
    highlightDiv.appendTo(document.body);
  }
});
