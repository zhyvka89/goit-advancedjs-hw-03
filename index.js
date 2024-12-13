import{i as n,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u=new URLSearchParams({key:"47568770-df67670bdc8e06478abf0c27f",image_type:"photo",orientation:"horizontal",safesearch:!0}),m=`https://pixabay.com/api/?${u}`;function f(s){return fetch(`${m}&q=${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const h=({webformatURL:s,largeImageURL:t,tags:i,likes:a,views:e,comments:r,downloads:o})=>`<li class='image-item'>
    <div class='card-wrapper'>
      <div class='image-wrapper'>
        <a class='card-link' href=${t}>
          <img src=${s} alt='${i}'>
        </a>
      </div>
      <div class='card-content'>
        <ul class='stats-list'>
          <li class='stats-item'><div><span>Likes</span><span>${a}</span></div></li>
          <li class='stats-item'><div><span>Views</span><span>${e}</span></div></li>
          <li class='stats-item'><div><span>Comments</span><span>${r}</span></div></li>
          <li class='stats-item'><div><span>Downloads</span><span>${o}</span></div></li>
        </ul>
      </div>
    </div>
  </li>`,g=(s,t)=>{s.insertAdjacentHTML("afterbegin",t)},y=document.querySelector(".search-form"),l=document.querySelector(".search-input"),c=document.querySelector(".images-list");document.querySelector(".loader");y.addEventListener("submit",s=>v(s));function v(s){if(s.preventDefault(),s.target.search.value.trim()){l.style.borderColor="#808080",c.innerHTML="";const t=s.target.search.value.trim().split(" ").join("+");f(t).then(i=>{if(i.hits.length){const a=i.hits.map(e=>h(e)).join("");g(c,a),d.refresh()}else n.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"})}).catch(i=>{n.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})})}else l.style.borderColor="red",n.show({title:"Warning",message:"Please fill the field!",position:"topRight",color:"red"})}let d=new p(".card-link",{captionsData:"alt",captionDelay:250});d.on("show.simplelightbox");
//# sourceMappingURL=index.js.map
