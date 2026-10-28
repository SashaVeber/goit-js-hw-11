import{a as m,S as d,i as a}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="58280939-6abb5fdce6cf7c462995d9856",h="https://pixabay.com/api/";function y(s){const r=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return m.get(`${h}?${r}`).then(o=>o.data)}const b=new d(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${i}</span></p>
          <p class="info-item"><b>Comments</b><span>${f}</span></p>
          <p class="info-item"><b>Downloads</b><span>${p}</span></p>
        </div>
      </li>
    `).join("");c.innerHTML=r,b.refresh()}function P(){c.innerHTML=""}function S(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({title:"Caution",message:"Please fill in the search field!",position:"topRight"});return}P(),S(),y(r).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(o)}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
