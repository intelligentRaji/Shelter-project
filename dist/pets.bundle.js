(()=>{"use strict";var v={};class r{constructor({tag:e,className:s,parent:t}){this.element=document.createElement(e),this.element.className=s,t&&t.append(this.element)}static getFirstClassName(e){return e.split(" ")[0]}static getRandomNumber(e,s){return Math.floor(e+Math.random()*(s+1-e))}}class d extends r{constructor(e){super({tag:"section",...e}),e.neighbor&&(this.neighbor=document.querySelector(e.neighbor),this.neighbor.after(this.element))}}class c extends r{constructor(e){super(e),this.element.innerHTML=e.text}}class l extends r{constructor(e){super({tag:"img",...e}),this.element.src=e.src,e.alt?this.element.alt=e.alt:this.element.alt=l.getBaseName(e.src)}static getBaseName(e){return e.split("/").slice(-1)[0].split(".")[0]}}class a extends r{constructor({className:e,parent:s,text:t,src:i,alt:N,svg:h}){super({tag:"button",className:e,parent:s}),t&&(this.element.textContent=t),i&&(this.image=new l({className:`${r.getFirstClassName(e)}-img`,parent:this.element,src:i,alt:N})),h&&(this.element.innerHTML=`<svg class = "${r.getFirstClassName(e)}-svg"><use xlink:href="assets/svg/sprite.svg#${h}"></use></svg>`)}}class u extends r{constructor(e){super(e),this.doubleLeft=new a({className:"our-friends-button left double disabled",parent:this.element,svg:"pets-double-right"}),this.left=new a({className:"our-friends-button left disabled",parent:this.element,svg:"pets-right"}),this.page=new a({className:"our-friends-button",parent:this.element,text:"1"}),this.right=new a({className:"our-friends-button",parent:this.element,svg:"pets-right"}),this.doubleRight=new a({className:"our-friends-button double",parent:this.element,svg:"pets-double-right"})}}class m extends r{constructor(e){super(e),this.files=e.files}}class g extends r{constructor(e){super(e),this.src=e.settings.img,this.image=new l({className:"our-friends-card-img",parent:this.element,src:e.settings.img}),this.name=new c({tag:"p",className:"our-friends-card-text",parent:this.element,text:`${e.settings.name}`}),this.button=new a({className:"our-friends-card-button",parent:this.element,text:"Learn more"})}}class f extends m{constructor(e){super(e),this.getCards()}getCards(){this.cards=[],this.files.forEach(e=>this.cards.push(new g({tag:"div",className:"our-friends-card",parent:this.element,settings:e})))}}class p extends r{}function o(n){const e=n;for(let s=e.length-1;s!==0;s-=1){const t=Math.floor(Math.random()*s);[e[s],e[t]]=[e[t],e[s]]}return e}class b extends p{constructor(e){super(e),this.getFiles(e.files),this.getSlides()}getFiles(e){const s=o(e);let t=[];for(let i=0;i<6;i+=1)t=t.concat(o(s));this.files=t}getSlides(){const s=[];for(let t=0;t<this.files.length;t+=8){const i=this.files.slice(t,t+8);s.push(new f({tag:"div",className:"our-friends-slide",parent:this.element,files:i}))}this.slides=s}}class w extends d{constructor(e){super({tag:"section",...e}),this.container=new r({tag:"div",className:"our-friends-container container",parent:this.element}),this.title=new c({tag:"h2",className:"our-friends-title h2",parent:this.container.element,text:"Our friends who <br> are looking for a house"}),this.viewport=new b({tag:"div",className:"our-friends-viewport",parent:this.container.element,files:e.files}),this.buttons=new u({tag:"div",className:"our-friends-buttons",parent:this.container.element})}}async function x(){const e=await(await fetch("./json/pets.json")).json();new w({className:"our-friends",parent:document.querySelector(".main"),files:e})}x()})();

//# sourceMappingURL=pets.bundle.js.map