const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let n=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,t.removeAttribute("disabled"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.a72ac6f2.js.map