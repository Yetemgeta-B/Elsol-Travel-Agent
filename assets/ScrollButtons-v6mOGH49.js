import{c as a,r,j as o}from"./index-CQOmokeB.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),i=()=>{const[s,t]=r.useState(!1);r.useEffect(()=>{const e=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(o.Fragment,{children:o.jsx("button",{onClick:l,className:`fixed right-8 bottom-8 z-50 p-3 rounded-full bg-elsol-sage/20 backdrop-blur-sm border border-elsol-sage/30 text-elsol-sage hover:text-white hover:bg-elsol-sage/30 transition-all duration-300 hover:scale-110 ${s?"opacity-100 visible":"opacity-0 invisible"}`,"aria-label":"Scroll to Top",children:o.jsx(c,{size:24})})})};export{i as S};
