// ==UserScript==
// @name         Youtube Download
// @version      2.0
// @description  Baixar áudio e vídeo do youtube
// @author       Zeta Tec
// @match        *://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @icon            http://zetatec27.blogspot.com.br/favicon.ico
// @encoding utf-8
// @updateURL https://raw.githubusercontent.com/Zetat/random/master/Youtube-Download-(TamperMonkey).user.js
// @downloadURL https://raw.githubusercontent.com/Zetat/random/master/Youtube-Download-(TamperMonkey).user.js
// ==/UserScript==
(function() {

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.rawgit.com/Zetat/random/master/source.js";
window.onload = document.head.appendChild(script);


})();