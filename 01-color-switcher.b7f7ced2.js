!function(){var t,e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}a.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,d(),t=setInterval(d,1e3)})),a.addEventListener("click",(function(){a.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b7f7ced2.js.map
