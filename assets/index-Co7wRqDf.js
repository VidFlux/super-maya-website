(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="container">
    <div class="content">
      <h1 class="main-title">SUPER MAYA</h1>
      <p class="subtitle">Operating System for Digital Ads</p>
      <p class="tagline">COMING SOON!</p>
      <a href="https://example.com" class="waitlist-btn" target="_blank" rel="noopener">WAITLIST</a>
    </div>
  </div>
`;
