let t=null;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),n=document.querySelector("body");d.setAttribute("disabled",!0),e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,t=setInterval((function(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,e.removeAttribute("disabled"),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.aa2c41e6.js.map