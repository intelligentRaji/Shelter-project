(()=>{"use strict";var E={689:(i,o,u)=>{u.a(i,async(r,_)=>{try{var c=u(152);async function t(){const a=await(await fetch("./json/pets.json")).json();new c.Z({className:"our-friends",neighbor:".about",files:a})}await t(),console.log(`\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 Main 60/60 - \u0432\u0441\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B
 \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 7/7
 \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0430\u043A\u0435\u0442\u0443 35/35
 \u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A css 6/6
 \u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 12/12

 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 Pets 40/40
 \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 7/7
 \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0430\u043A\u0435\u0442\u0443 15/15
 \u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A css 4/4
 \u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 14/14`),_()}catch(t){_(t)}},1)},152:(i,o,u)=>{u.d(o,{Z:()=>h});class r{constructor({tag:e,className:l,parent:s}){this.element=document.createElement(e),this.element.className=l,s&&s.append(this.element)}static getFirstClassName(e){return e.split(" ")[0]}static getRandomNumber(e,l){return Math.floor(e+Math.random()*(l+1-e))}}class _ extends r{constructor(e){super({tag:"section",...e}),this.element.id=e.className,e.neighbor&&(this.neighbor=document.querySelector(e.neighbor),this.neighbor.after(this.element))}}class c extends r{constructor(e){super(e),this.element.innerHTML=e.text}}const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDE0IDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNCAyVjRIM1Y2TDAgM0wzIDBWMkgxNFoiIGZpbGw9IiMyOTI5MjkiLz4KPC9zdmc+Cg==";class m extends r{constructor(e){super({tag:"img",...e}),this.element.src=e.src,e.alt?this.element.alt=e.alt:this.element.alt=m.getBaseName(e.src)}static getBaseName(e){return e.split("/").slice(-1)[0].split(".")[0]}}class a extends r{constructor({className:e,parent:l,text:s,src:w,alt:d,svg:x}){super({tag:"button",className:e,parent:l}),s&&(this.element.textContent=s),w&&(this.image=new m({className:`${r.getFirstClassName(e)}-img`,parent:this.element,src:w,alt:d})),x&&(this.element.innerHTML=`<svg class = "${r.getFirstClassName(e)}-svg"><use xlink:href="assets/svg/sprite.svg#${x}"></use></svg>`)}}class f extends r{}class p extends r{constructor(e){super(e),this.files=e.files}}class C extends r{constructor(e){super(e),this.src=e.settings.img,this.image=new m({className:"our-friends-card-img",parent:this.element,src:e.settings.img}),this.name=new c({tag:"p",className:"our-friends-card-text",parent:this.element,text:`${e.settings.name}`}),this.button=new a({className:"our-friends-card-button",parent:this.element,text:"Learn more"})}}class g extends p{static activeCards=[];static previouseGeneratedCards=[];constructor(e){super(e),this.previouseCards=[],this.cardsInSlide=[],this.cards=this.generateCards(g.previouseGeneratedCards)}generateCards(e){const l=[],w=[];for(let d=0;d<3;d+=1){const x=this.getRandomCard(e);l.push(x[0]),w.push(x[1])}return e===g.previouseGeneratedCards?g.previouseGeneratedCards=w:g.activeCards=w,l}getRandomCard(e){const l=r.getRandomNumber(0,this.files.length-1),s=this.files[l];return e.includes(s.name)||this.previouseCards.includes(s.name)?this.getRandomCard(e):(this.previouseCards.push(s.name),[new C({tag:"div",className:"our-friends-card",parent:this.element,settings:s}),s.name])}}class N extends f{constructor(e){super(e),this.files=e.files,this.getSlides()}getSlides(){this.slides=[];for(let e=0;e<3;e+=1)this.slides.push(new g({tag:"div",className:"our-friends-slide",parent:this.element,files:this.files}))}}class b extends r{constructor({className:e,parent:l,src:s}){super({tag:"a",className:e,parent:l}),this.element.href=s}}class h extends _{constructor(e){super(e),this.files=e.files,this.container=new r({tag:"div",className:"container",parent:this.element}),this.ourFriendsWrapper=new r({tag:"div",className:"our-friends-wrapper",parent:this.container.element}),this.title=new c({tag:"h2",className:"our-friends-title h2",parent:this.ourFriendsWrapper.element,text:"Our friends who <br> are looking for a house"}),this.sliderWrapper=new r({tag:"div",className:"our-friends-slider",parent:this.ourFriendsWrapper.element}),this.left=new a({className:"our-friends-slider-button left",parent:this.sliderWrapper.element,src:t,alt:"left"}),this.viewport=new N({tag:"div",className:"our-friends-viewport",parent:this.sliderWrapper.element,files:this.files}),this.right=new a({className:"our-friends-slider-button right",parent:this.sliderWrapper.element,src:t,alt:"right"}),this.button=new b({className:"our-friends-button",parent:this.ourFriendsWrapper.element,src:"pets.html"}),this.buttonText=new c({tag:"p",className:"our-friends-button-text",parent:this.button.element,text:"Get to know the rest"})}}}},D={};function v(i){var o=D[i];if(o!==void 0)return o.exports;var u=D[i]={exports:{}};return E[i](u,u.exports,v),u.exports}(()=>{var i=typeof Symbol=="function"?Symbol("webpack queues"):"__webpack_queues__",o=typeof Symbol=="function"?Symbol("webpack exports"):"__webpack_exports__",u=typeof Symbol=="function"?Symbol("webpack error"):"__webpack_error__",r=c=>{c&&!c.d&&(c.d=1,c.forEach(t=>t.r--),c.forEach(t=>t.r--?t.r++:t()))},_=c=>c.map(t=>{if(t!==null&&typeof t=="object"){if(t[i])return t;if(t.then){var m=[];m.d=0,t.then(p=>{a[o]=p,r(m)},p=>{a[u]=p,r(m)});var a={};return a[i]=p=>p(m),a}}var f={};return f[i]=p=>{},f[o]=t,f});v.a=(c,t,m)=>{var a;m&&((a=[]).d=1);var f=new Set,p=c.exports,C,g,N,b=new Promise((h,n)=>{N=n,g=h});b[o]=p,b[i]=h=>(a&&h(a),f.forEach(h),b.catch(n=>{})),c.exports=b,t(h=>{C=_(h);var n,e=()=>C.map(s=>{if(s[u])throw s[u];return s[o]}),l=new Promise(s=>{n=()=>s(e),n.r=0;var w=d=>d!==a&&!f.has(d)&&(f.add(d),d&&!d.d&&(n.r++,d.push(n)));C.map(d=>d[i](w))});return n.r?l:e()},h=>(h?N(b[u]=h):g(p),r(a))),a&&(a.d=0)}})(),v.d=(i,o)=>{for(var u in o)v.o(o,u)&&!v.o(i,u)&&Object.defineProperty(i,u,{enumerable:!0,get:o[u]})},v.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o);var y=v(689)})();

//# sourceMappingURL=index.bundle.js.map