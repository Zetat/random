// ==UserScript==
// @name         Youtube profile picture viewer
// @version      1.0
// @description  Visualizar fotos de canais do Youtube em tamanho maior.
// @author       Zeta Tec
// @match        *://yt3.ggpht.com/*
// @icon            http://zetatec27.blogspot.com.br/favicon.ico
// @encoding utf-8
// @updateURL https://raw.githubusercontent.com/Zetat/random/master/youtube-picture-perfil.user.js
// @downloadURL https://raw.githubusercontent.com/Zetat/random/master/youtube-picture-perfil.user.js
// ==/UserScript==

(function() {
   var url= window.location.href;
   var urln = url.match('/s([^]+)-c-k');
   if (urln[1] != '900') {
	   urln = url.replace(urln[1],'900');
       window.open(urln ,'_self');
   }
})();
