import{s as le,n as X,r as te,o as se}from"../chunks/scheduler.a03335a9.js";import{S as ne,i as ae,g as k,s as T,h as C,j as P,x as M,c as N,f as R,k as x,l as O,a as L,z as o,A as S,E as re,m as H,n as j,y as G,o as q}from"../chunks/index.ccd29840.js";import{e as z,u as oe,d as ce}from"../chunks/each.f8bf1ced.js";import{g as ue}from"../chunks/navigation.64c6ba14.js";import{s as ie}from"../chunks/supabaseClient.dfd487c3.js";function Y(p,e,t){const l=p.slice();return l[10]=e[t],l}function Z(p,e,t){const l=p.slice();return l[13]=e[t],l}function $(p,e){let t,l,d=e[13].player_number+"",c,v,f,g="✔️",y,_,m="✖️",E,u;function i(){return e[7](e[13])}function r(){return e[8](e[13])}return{key:p,first:null,c(){t=k("rosterPick"),l=k("number"),c=H(d),v=T(),f=k("button"),f.textContent=g,y=T(),_=k("button"),_.textContent=m,this.h()},l(w){t=C(w,"ROSTERPICK",{class:!0});var h=P(t);l=C(h,"NUMBER",{class:!0});var A=P(l);c=j(A,d),A.forEach(R),v=N(h),f=C(h,"BUTTON",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-tl689e"&&(f.textContent=g),y=N(h),_=C(h,"BUTTON",{class:!0,"data-svelte-h":!0}),M(_)!=="svelte-1t3bv1i"&&(_.textContent=m),h.forEach(R),this.h()},h(){x(l,"class","svelte-1pbg04w"),x(f,"class","svelte-1pbg04w"),G(f,"added",e[13].selected),x(_,"class","svelte-1pbg04w"),G(_,"unadded",!e[13].selected),x(t,"class","svelte-1pbg04w"),this.first=t},m(w,h){L(w,t,h),o(t,l),o(l,c),o(t,v),o(t,f),o(t,y),o(t,_),E||(u=[S(f,"click",i),S(_,"click",r)],E=!0)},p(w,h){e=w,h&1&&d!==(d=e[13].player_number+"")&&q(c,d),h&1&&G(f,"added",e[13].selected),h&1&&G(_,"unadded",!e[13].selected)},d(w){w&&R(t),E=!1,te(u)}}}function ee(p){let e,t,l=p[10].player_number+"",d,c,v,f=p[10].name+"",g,y,_,m=p[10].full_name+"",E,u;return{c(){e=k("namecard"),t=k("number"),d=H(l),c=T(),v=k("nickname"),g=H(f),y=T(),_=k("fullname"),E=H(m),u=T(),this.h()},l(i){e=C(i,"NAMECARD",{class:!0});var r=P(e);t=C(r,"NUMBER",{class:!0});var w=P(t);d=j(w,l),w.forEach(R),c=N(r),v=C(r,"NICKNAME",{class:!0});var h=P(v);g=j(h,f),h.forEach(R),y=N(r),_=C(r,"FULLNAME",{class:!0});var A=P(_);E=j(A,m),A.forEach(R),u=N(r),r.forEach(R),this.h()},h(){x(t,"class","svelte-1pbg04w"),x(v,"class","svelte-1pbg04w"),x(_,"class","svelte-1pbg04w"),x(e,"class","svelte-1pbg04w")},m(i,r){L(i,e,r),o(e,t),o(t,d),o(e,c),o(e,v),o(v,g),o(e,y),o(e,_),o(_,E),o(e,u)},p(i,r){r&2&&l!==(l=i[10].player_number+"")&&q(d,l),r&2&&f!==(f=i[10].name+"")&&q(g,f),r&2&&m!==(m=i[10].full_name+"")&&q(E,m)},d(i){i&&R(e)}}}function he(p){let e,t,l="The whole team",d,c,v="Select All",f,g,y="Unselect All",_,m=[],E=new Map,u,i,r="Print",w,h,A="Generate Match Page",D,U,J="The next match",F,K,Q,I=z(p[0]);const V=n=>n[13].player_number;for(let n=0;n<I.length;n+=1){let a=Z(p,I,n),s=V(a);E.set(s,m[n]=$(s,a))}let B=z(p[1]),b=[];for(let n=0;n<B.length;n+=1)b[n]=ee(Y(p,B,n));return{c(){e=k("grid"),t=k("h2"),t.textContent=l,d=T(),c=k("button"),c.textContent=v,f=T(),g=k("button"),g.textContent=y,_=T();for(let n=0;n<m.length;n+=1)m[n].c();u=T(),i=k("h2"),i.textContent=r,w=T(),h=k("button"),h.textContent=A,D=T(),U=k("h2"),U.textContent=J,F=T();for(let n=0;n<b.length;n+=1)b[n].c();this.h()},l(n){e=C(n,"GRID",{class:!0});var a=P(e);t=C(a,"H2",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-a3qobb"&&(t.textContent=l),d=N(a),c=C(a,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),M(c)!=="svelte-1cglxhz"&&(c.textContent=v),f=N(a),g=C(a,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),M(g)!=="svelte-1ew2b78"&&(g.textContent=y),_=N(a);for(let s=0;s<m.length;s+=1)m[s].l(a);u=N(a),i=C(a,"H2",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-lutegv"&&(i.textContent=r),w=N(a),h=C(a,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),M(h)!=="svelte-1w3jkf1"&&(h.textContent=A),D=N(a),U=C(a,"H2",{class:!0,"data-svelte-h":!0}),M(U)!=="svelte-hu1hk3"&&(U.textContent=J),F=N(a);for(let s=0;s<b.length;s+=1)b[s].l(a);a.forEach(R),this.h()},h(){x(t,"class","svelte-1pbg04w"),O(c,"background-color","var(--grabber)"),O(c,"text-align","center"),x(c,"class","svelte-1pbg04w"),O(g,"background-color","var(--halter)"),O(g,"text-align","center"),x(g,"class","svelte-1pbg04w"),x(i,"class","svelte-1pbg04w"),O(h,"background-color","var(--purps)"),O(h,"font-size","var(--f_xl)"),x(h,"class","svelte-1pbg04w"),x(U,"class","svelte-1pbg04w"),x(e,"class","svelte-1pbg04w")},m(n,a){L(n,e,a),o(e,t),o(e,d),o(e,c),o(e,f),o(e,g),o(e,_);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(e,null);o(e,u),o(e,i),o(e,w),o(e,h),o(e,D),o(e,U),o(e,F);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(e,null);K||(Q=[S(c,"click",p[4]),S(g,"click",p[5]),S(h,"click",p[6])],K=!0)},p(n,[a]){if(a&13&&(I=z(n[0]),m=oe(m,a,V,1,n,I,E,e,ce,$,u,Z)),a&2){B=z(n[1]);let s;for(s=0;s<B.length;s+=1){const W=Y(n,B,s);b[s]?b[s].p(W,a):(b[s]=ee(W),b[s].c(),b[s].m(e,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=B.length}},i:X,o:X,d(n){n&&R(e);for(let a=0;a<m.length;a+=1)m[a].d();re(b,n),K=!1,te(Q)}}}function fe(p,e,t){let l=[],d=[],c=[];se(async()=>{let{data:u,error:i}=await ie.from("rstr").select("*");i?console.error(i):t(0,l=u.map(r=>({...r,selected:!1})))});function v(u){const i=l.findIndex(r=>r.player_number===u);t(0,l[i].selected=!0,l),d=l.filter(r=>r.selected),t(1,c=[...d])}function f(u){const i=l.findIndex(r=>r.player_number===u);t(0,l[i].selected=!1,l),d=l.filter(r=>r.selected),t(1,c=[...d])}function g(){t(0,l=l.map(u=>({...u,selected:!0}))),d=l.filter(u=>u.selected),t(1,c=[...d])}function y(){t(0,l=l.map(u=>({...u,selected:!1}))),d=[],t(1,c=[])}function _(){console.log("Generating match page"),sessionStorage.setItem("matchRoster",JSON.stringify(c)),console.log("Stored matchRoster in session storage: ",c),ue("/match")}return[l,c,v,f,g,y,_,u=>v(u.player_number),u=>f(u.player_number)]}class be extends ne{constructor(e){super(),ae(this,e,fe,he,le,{})}}export{be as component};