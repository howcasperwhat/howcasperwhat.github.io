import{R as o}from"./generator-wcUYG9Ml.js";var c=class{constructor(t,s=-1,i=!1){this.startTime=-1,this.duration=0,this.process="freeze",this.painted=this.listen,this.erased=this.listen,this.path=t,this.length=t.getTotalLength(),this.trace=this.clacInitTrace(s),this.path.style.strokeDasharray=`${this.length}px`,this.path.style.strokeDashoffset=`${this.length-this.trace}px`,i&&this.start()}done(){return this.process==="paint"&&this.trace>=this.length||this.process==="erase"&&this.trace<=0}clacInitTrace(t){return t===-1?this.length:t}update(){this.trace=Math.min(this.trace,this.length),this.trace=Math.max(this.trace,0);let t=this.length-this.trace;this.path.style.strokeDashoffset=`${t}px`}initStartTime(t){this.startTime===-1&&(this.startTime=t)}calcStep(t,s){if(this.duration===0)return this.length;const i=(t-s)/this.duration;return i>=1?this.length:this.length*i}_paint(t,s){this.initStartTime(t);const i=this.calcStep(t,s??this.startTime);this.trace+=i,this.update(),this.done()&&this.painted(),this._listen(t)}_erase(t,s){this.initStartTime(t);const i=this.calcStep(t,s??this.startTime);this.trace-=i,this.update(),this.done()&&this.erased(),this._listen(t)}_listen(t){requestAnimationFrame(s=>{switch(this.process){case"paint":this._paint(s,t);break;case"erase":this._erase(s,t);break;case"listen":this._listen(s);break}})}paint(t,s=this.trace){this.duration=t,this.process="paint",this.startTime=-1,this.trace=this.clacInitTrace(s)}erase(t,s=this.trace){this.duration=t,this.process="erase",this.startTime=-1,this.trace=this.clacInitTrace(s)}stop(){this.process="freeze",this.startTime=-1}listen(){this.process="listen",this.startTime=-1}start(){this.process==="freeze"&&(this.process="listen",this._listen())}onPainted(t){this.painted=()=>{this.listen(),t()}}onErased(t){this.erased=()=>{this.listen(),t()}}};({...new o().defaultOptions});var l={linecap:"round",zIndexOffset:0,color:"currentColor",strokeWidth:2,iterations:1,brackets:5,opacity:1,class:""};function r(t){return p(t.sets)}function p(t){const s=[];for(const i of t){let a="";for(const h of i.ops){const e=h.data;switch(h.op){case"move":a.trim()&&s.push(a.trim()),a=`M${e[0]} ${e[1]} `;break;case"bcurveTo":a+=`C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;break;case"lineTo":a+=`L${e[0]} ${e[1]} `;break}}a.trim()&&s.push(a.trim())}return s}var n="http://www.w3.org/2000/svg",d=class{constructor(t,s,i){switch(this.pathLengths=[],this.pathsTotalLength=0,this.options={...l,...i},this.target=t,this.rect=t.getBoundingClientRect(),typeof s=="function"&&(s=s(this.rect.width,this.rect.height)),typeof s){case"string":this.pathDatas=[s];break;case"object":Array.isArray(s)?this.pathDatas=s.map(a=>typeof a=="string"?[a]:r(a)).flat():this.pathDatas=r(s);break}this.cur=0,this.duration=1e3,this.svg=this.createSVG(),this.initTarget(),this.paths=this.cratePaths(),this.animators=this.createAnimators(),this.animators[this.cur].start()}createSVG(){const t=document.createElementNS(n,"svg");t.setAttribute("viewBox",`0 0 ${this.rect.width} ${this.rect.height}`),this.options.class.length&&t.setAttribute("class",this.options.class);const s=t.style;return s.zIndex=this.target.style.zIndex+this.options.zIndexOffset,s.overflow="visible",s.pointerEvents="none",s.position="absolute",s.top="0",s.left="0",t}createPath(t,s,i,a,h){const e=document.createElementNS(n,"path");return e.setAttribute("d",t),e.setAttribute("stroke",s),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap",i),e.setAttribute("stroke-width",a.toString()),e.setAttribute("stroke-opacity",h.toString()),e}initTarget(){return this.target.style.setProperty("position","relative"),this.target.appendChild(this.svg),this.target}cratePaths(){const t=[];for(const s of this.pathDatas){const i=this.createPath(s,this.options.color,this.options.linecap,this.options.strokeWidth,this.options.opacity);t.push(i);const a=i.getTotalLength();this.pathLengths.push(a),this.pathsTotalLength+=a,this.svg.appendChild(i)}return t}durationOf(t){return this.duration*this.pathLengths[t]/this.pathsTotalLength}createAnimators(){const t=this.paths.map(s=>new c(s,0));for(let s=0;s<t.length;++s)s!==t.length-1&&t[s].onPainted(()=>{t[s].stop(),this.cur=s+1,t[this.cur].start(),t[this.cur].paint(this.durationOf(this.cur))}),s!==0&&t[s].onErased(()=>{t[s].stop(),this.cur=s-1,t[this.cur].start(),t[this.cur].erase(this.durationOf(this.cur))});return t}show(t=1e3){this.duration=t,this.animators[this.cur].paint(this.durationOf(this.cur))}stop(){this.animators[this.cur].listen()}hide(t=1e3){this.duration=t,this.animators[this.cur].erase(this.durationOf(this.cur))}remove(){this.animators.forEach(t=>t.stop()),this.target.removeChild(this.svg)}onShowed(t){this.animators[this.animators.length-1].onPainted(t)}onHidden(t){this.animators[0].onErased(t)}};export{d as default};