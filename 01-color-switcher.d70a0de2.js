const t=document.querySelector("[data-start]");console.log(t);const e=document.querySelector("[data-stop]");console.log(e);const o=document.body;console.log(o);let n=null;disabled=!1,t.addEventListener("click",(function(e){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.d70a0de2.js.map
