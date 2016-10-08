
document.addEventListener('DOMContentLoaded', function() {

  getCurrentTab_Url ();
  var  url,
        tab;

  function getCurrentTab_Url () {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      tab = tabs[0],
      url = tab.url;

      console.log(tab, url);
    });
  };

  function  pushLanguage (lang) {
      var  urlArr = tab.url.split("/"),
            updateUrl = urlArr[3] = lang,
            newUrl = urlArr.join("/");

      console.log(newUrl);
      chrome.tabs.update(tab.id, {url: newUrl});
  };

  function getCookies(domain, name, callback) {
      chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
          if(callback) {
              callback(cookie.value);
          }
      });
  };

//get cookies and change desktop to mobile and viceversa
var switch_menu = document.getElementsByClassName("switch_menu")[0];

switch_menu.addEventListener("click", function (e) {
  var  divID = e.target.id,
        desktop = "device=desktop",
        mobile = "device=smartphone";

  getCookies(url, "UI", function (UI) {
      var  cookie = UI.split("&");

      if (divID === "mobile") {
        cookie[4] = mobile;
        var j = cookie.join("&");
        console.log("iconMobile |", j);
        chrome.cookies.remove({"url": url, "name": "UI"});
        chrome.cookies.set({"url": url, "name": "UI", "value": j});
        chrome.tabs.reload();
      } else if (divID === "desktop") {
        cookie[4] = desktop;
        var j = cookie.join("&");
        console.log("iconMobile |", j);
        chrome.cookies.remove({"url": url, "name": "UI"});
        chrome.cookies.set({"url": url, "name": "UI", "value": j});
        chrome.tabs.reload();
      };
  });
});

// get class of ul an put in pushLanguage function
var language_menu = document.getElementsByClassName("language_menu")[0];

language_menu.addEventListener("click", function (e) {
  var languageClass = e.target.getAttribute("class");
  pushLanguage(languageClass.toLowerCase());
});


}, false);
