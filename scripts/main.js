"use strict";var host="homeofficial.co.uk";host==window.location.host&&"https:"!=window.location.protocol&&(window.location.protocol="https"),notificationHelper.localhostIdentity="homeofficial","serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(notificationHelper.init)["catch"](function(o){console.log("SW:",o)}),notificationHelper.subscribe(),function(o){o.QueryString=function(o){if(""==o)return{};for(var t={},i=0;i<o.length;++i){var r=o[i].split("=");2==r.length&&(t[r[0]]=decodeURIComponent(r[1].replace(/\+/g," ")))}return t}(window.location.search.substr(1).split("&"))}(jQuery);var redirectUrl=$.QueryString.redirect;void 0!=redirectUrl&&(window.location=redirectUrl);