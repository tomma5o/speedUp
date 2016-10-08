
document.addEventListener('DOMContentLoaded', function() {

  function getCurrentTabUrl () {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0],
      url = tab.url;
      console.log(url);
    });
  };
  function  pushLanguage (lang) {
    chrome.tabs.query({ active: true, currentWindow: true },  function(tabs) {
      var    tab = tabs[0],
      urlArr = tab.url.split("/");
      updateUrl = urlArr[3] = lang,
      newUrl = urlArr.join("/");
      console.log(newUrl);
      chrome.tabs.update(tab.id, {url: newUrl});
    });
  };
  function  getCookie () {
    chrome.tabs.query({ active: true, currentWindow: true },  function(tabs) {
      var tab = tabs[0],
      cookie = tab.cookies;

      console.log(cookie);
      //chrome.tabs.reload();
    });
  };

//get cookies and change desktop to mobie and viceversa
var switch_menu = document.getElementsByClassName("switch_menu")[0];

switch_menu.addEventListener("click", function (e) {
  var languageClass = e.target.getAttribute("id");
  console.log(e.target)
});

// get class of ul an put in pushLanguage function
var language_menu = document.getElementsByClassName("language_menu")[0];

language_menu.addEventListener("click", function (e) {
  var languageClass = e.target.getAttribute("class");
  pushLanguage(languageClass.toLowerCase());
});


}, false);
