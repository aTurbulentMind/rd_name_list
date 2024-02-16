import{s as It,n as at,o as ft,r as ut,i as Se,h as mt}from"../chunks/scheduler.a03335a9.js";import{S as Et,i as yt,g as u,s as v,e as Ae,h as n,x as _e,c as d,j as R,f as _,k as s,a as z,z as e,m as H,n as G,o as Z,D as M,A as Y,G as S,F as rt}from"../chunks/index.ccd29840.js";import{e as Fe,u as gt,d as Tt}from"../chunks/each.f8bf1ced.js";import{s as me}from"../chunks/supabaseClient.dfd487c3.js";function _t(r,t,l){const m=r.slice();return m[41]=t[l],m[43]=l,m}function pt(r,t,l){const m=r.slice();return m[41]=t[l],m[43]=l,m}function ht(r,t){let l,m,c=t[41].item_name+"",o,f,j,T=t[41].small+"",E,D,b,w=t[41].medium+"",g,I,i,p=t[41].lrg+"",C,N,A,X=t[41].xl+"",y,Q,U,L=t[41].xxl+"",V,J,q,a=t[41].xxxl+"",h,F,K,se=t[41].xxxxl+"",re;return{key:r,first:null,c(){l=u("tr"),m=u("td"),o=H(c),f=v(),j=u("td"),E=H(T),D=v(),b=u("td"),g=H(w),I=v(),i=u("td"),C=H(p),N=v(),A=u("td"),y=H(X),Q=v(),U=u("td"),V=H(L),J=v(),q=u("td"),h=H(a),F=v(),K=u("td"),re=H(se),this.h()},l($){l=n($,"TR",{class:!0});var P=R(l);m=n(P,"TD",{class:!0});var W=R(m);o=G(W,c),W.forEach(_),f=d(P),j=n(P,"TD",{class:!0});var qe=R(j);E=G(qe,T),qe.forEach(_),D=d(P),b=n(P,"TD",{class:!0});var te=R(b);g=G(te,w),te.forEach(_),I=d(P),i=n(P,"TD",{class:!0});var je=R(i);C=G(je,p),je.forEach(_),N=d(P),A=n(P,"TD",{class:!0});var ie=R(A);y=G(ie,X),ie.forEach(_),Q=d(P),U=n(P,"TD",{class:!0});var pe=R(U);V=G(pe,L),pe.forEach(_),J=d(P),q=n(P,"TD",{class:!0});var be=R(q);h=G(be,a),be.forEach(_),F=d(P),K=n(P,"TD",{class:!0});var he=R(K);re=G(he,se),he.forEach(_),P.forEach(_),this.h()},h(){s(m,"class","svelte-1t93qj5"),s(j,"class","svelte-1t93qj5"),s(b,"class","svelte-1t93qj5"),s(i,"class","svelte-1t93qj5"),s(A,"class","svelte-1t93qj5"),s(U,"class","svelte-1t93qj5"),s(q,"class","svelte-1t93qj5"),s(K,"class","svelte-1t93qj5"),s(l,"class","svelte-1t93qj5"),this.first=l},m($,P){z($,l,P),e(l,m),e(m,o),e(l,f),e(l,j),e(j,E),e(l,D),e(l,b),e(b,g),e(l,I),e(l,i),e(i,C),e(l,N),e(l,A),e(A,y),e(l,Q),e(l,U),e(U,V),e(l,J),e(l,q),e(q,h),e(l,F),e(l,K),e(K,re)},p($,P){t=$,P[0]&2&&c!==(c=t[41].item_name+"")&&Z(o,c),P[0]&2&&T!==(T=t[41].small+"")&&Z(E,T),P[0]&2&&w!==(w=t[41].medium+"")&&Z(g,w),P[0]&2&&p!==(p=t[41].lrg+"")&&Z(C,p),P[0]&2&&X!==(X=t[41].xl+"")&&Z(y,X),P[0]&2&&L!==(L=t[41].xxl+"")&&Z(V,L),P[0]&2&&a!==(a=t[41].xxxl+"")&&Z(h,a),P[0]&2&&se!==(se=t[41].xxxxl+"")&&Z(re,se)},d($){$&&_(l)}}}function vt(r){let t,l,m,c,o,f,j,T,E,D,b,w,g,I,i,p,C,N,A,X,y,Q,U,L,V,J;return{c(){t=u("tr"),l=u("td"),m=u("input"),c=v(),o=u("td"),f=u("input"),j=v(),T=u("td"),E=u("input"),D=v(),b=u("td"),w=u("input"),g=v(),I=u("td"),i=u("input"),p=v(),C=u("td"),N=u("input"),A=v(),X=u("td"),y=u("input"),Q=v(),U=u("td"),L=u("input"),this.h()},l(q){t=n(q,"TR",{class:!0});var a=R(t);l=n(a,"TD",{class:!0});var h=R(l);m=n(h,"INPUT",{type:!0,class:!0}),h.forEach(_),c=d(a),o=n(a,"TD",{class:!0});var F=R(o);f=n(F,"INPUT",{type:!0,min:!0,class:!0}),F.forEach(_),j=d(a),T=n(a,"TD",{class:!0});var K=R(T);E=n(K,"INPUT",{type:!0,min:!0,class:!0}),K.forEach(_),D=d(a),b=n(a,"TD",{class:!0});var se=R(b);w=n(se,"INPUT",{type:!0,min:!0,class:!0}),se.forEach(_),g=d(a),I=n(a,"TD",{class:!0});var re=R(I);i=n(re,"INPUT",{type:!0,min:!0,class:!0}),re.forEach(_),p=d(a),C=n(a,"TD",{class:!0});var $=R(C);N=n($,"INPUT",{type:!0,min:!0,class:!0}),$.forEach(_),A=d(a),X=n(a,"TD",{class:!0});var P=R(X);y=n(P,"INPUT",{type:!0,min:!0,class:!0}),P.forEach(_),Q=d(a),U=n(a,"TD",{class:!0});var W=R(U);L=n(W,"INPUT",{type:!0,min:!0,class:!0}),W.forEach(_),a.forEach(_),this.h()},h(){s(m,"type","text"),s(m,"class","svelte-1t93qj5"),s(l,"class","svelte-1t93qj5"),s(f,"type","number"),s(f,"min","0"),f.required=!0,s(f,"class","svelte-1t93qj5"),s(o,"class","svelte-1t93qj5"),s(E,"type","number"),s(E,"min","0"),E.required=!0,s(E,"class","svelte-1t93qj5"),s(T,"class","svelte-1t93qj5"),s(w,"type","number"),s(w,"min","0"),w.required=!0,s(w,"class","svelte-1t93qj5"),s(b,"class","svelte-1t93qj5"),s(i,"type","number"),s(i,"min","0"),i.required=!0,s(i,"class","svelte-1t93qj5"),s(I,"class","svelte-1t93qj5"),s(N,"type","number"),s(N,"min","0"),N.required=!0,s(N,"class","svelte-1t93qj5"),s(C,"class","svelte-1t93qj5"),s(y,"type","number"),s(y,"min","0"),y.required=!0,s(y,"class","svelte-1t93qj5"),s(X,"class","svelte-1t93qj5"),s(L,"type","number"),s(L,"min","0"),L.required=!0,s(L,"class","svelte-1t93qj5"),s(U,"class","svelte-1t93qj5"),s(t,"class","svelte-1t93qj5")},m(q,a){z(q,t,a),e(t,l),e(l,m),M(m,r[6]),e(t,c),e(t,o),e(o,f),M(f,r[7]),e(t,j),e(t,T),e(T,E),M(E,r[8]),e(t,D),e(t,b),e(b,w),M(w,r[9]),e(t,g),e(t,I),e(I,i),M(i,r[10]),e(t,p),e(t,C),e(C,N),M(N,r[11]),e(t,A),e(t,X),e(X,y),M(y,r[12]),e(t,Q),e(t,U),e(U,L),M(L,r[13]),V||(J=[Y(m,"input",r[21]),Y(f,"input",r[22]),Y(E,"input",r[23]),Y(w,"input",r[24]),Y(i,"input",r[25]),Y(N,"input",r[26]),Y(y,"input",r[27]),Y(L,"input",r[28])],V=!0)},p(q,a){a[0]&64&&m.value!==q[6]&&M(m,q[6]),a[0]&128&&S(f.value)!==q[7]&&M(f,q[7]),a[0]&256&&S(E.value)!==q[8]&&M(E,q[8]),a[0]&512&&S(w.value)!==q[9]&&M(w,q[9]),a[0]&1024&&S(i.value)!==q[10]&&M(i,q[10]),a[0]&2048&&S(N.value)!==q[11]&&M(N,q[11]),a[0]&4096&&S(y.value)!==q[12]&&M(y,q[12]),a[0]&8192&&S(L.value)!==q[13]&&M(L,q[13])},d(q){q&&_(t),V=!1,ut(J)}}}function dt(r){let t,l="Add New Item",m,c;return{c(){t=u("button"),t.textContent=l,this.h()},l(o){t=n(o,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),_e(t)!=="svelte-sg7nh"&&(t.textContent=l),this.h()},h(){s(t,"type","button"),s(t,"class","svelte-1t93qj5")},m(o,f){z(o,t,f),m||(c=Y(t,"click",r[14]),m=!0)},p:at,d(o){o&&_(t),m=!1,c()}}}function Xt(r){let t,l,m,c,o="Go Home";return{c(){t=u("p"),l=H(r[4]),m=v(),c=u("a"),c.textContent=o,this.h()},l(f){t=n(f,"P",{class:!0});var j=R(t);l=G(j,r[4]),j.forEach(_),m=d(f),c=n(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),_e(c)!=="svelte-yb6fpm"&&(c.textContent=o),this.h()},h(){s(t,"class","svelte-1t93qj5"),s(c,"href","/"),s(c,"class","svelte-1t93qj5")},m(f,j){z(f,t,j),e(t,l),z(f,m,j),z(f,c,j)},p(f,j){j[0]&16&&Z(l,f[4])},d(f){f&&(_(t),_(m),_(c))}}}function Lt(r){let t,l,m="Select an item",c=[],o=new Map,f,j,T,E,D,b=Fe(r[1]);const w=i=>i[43];for(let i=0;i<b.length;i+=1){let p=_t(r,b,i),C=w(p);o.set(C,c[i]=qt(C,p))}let g=r[2]&&jt(r),I=r[2]&&bt(r);return{c(){t=u("select"),l=u("option"),l.textContent=m;for(let i=0;i<c.length;i+=1)c[i].c();f=v(),g&&g.c(),j=v(),I&&I.c(),T=Ae(),this.h()},l(i){t=n(i,"SELECT",{class:!0});var p=R(t);l=n(p,"OPTION",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1odrqy1"&&(l.textContent=m);for(let C=0;C<c.length;C+=1)c[C].l(p);p.forEach(_),f=d(i),g&&g.l(i),j=d(i),I&&I.l(i),T=Ae(),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Select an item",M(l,l.__value),s(l,"class","svelte-1t93qj5"),s(t,"class","SelectedItem svelte-1t93qj5")},m(i,p){z(i,t,p),e(t,l);for(let C=0;C<c.length;C+=1)c[C]&&c[C].m(t,null);z(i,f,p),g&&g.m(i,p),z(i,j,p),I&&I.m(i,p),z(i,T,p),E||(D=Y(t,"change",r[15]),E=!0)},p(i,p){p[0]&2&&(b=Fe(i[1]),c=gt(c,p,w,1,i,b,o,t,Tt,qt,null,_t)),i[2]?g?g.p(i,p):(g=jt(i),g.c(),g.m(j.parentNode,j)):g&&(g.d(1),g=null),i[2]?I?I.p(i,p):(I=bt(i),I.c(),I.m(T.parentNode,T)):I&&(I.d(1),I=null)},d(i){i&&(_(t),_(f),_(j),_(T));for(let p=0;p<c.length;p+=1)c[p].d();g&&g.d(i),I&&I.d(i),E=!1,D()}}}function qt(r,t){let l,m=t[41].item_name+"",c,o;return{key:r,first:null,c(){l=u("option"),c=H(m),this.h()},l(f){l=n(f,"OPTION",{class:!0});var j=R(l);c=G(j,m),j.forEach(_),this.h()},h(){l.__value=o=t[41].item_name,M(l,l.__value),s(l,"class","svelte-1t93qj5"),this.first=l},m(f,j){z(f,l,j),e(l,c)},p(f,j){t=f,j[0]&2&&m!==(m=t[41].item_name+"")&&Z(c,m),j[0]&2&&o!==(o=t[41].item_name)&&(l.__value=o,M(l,l.__value))},d(f){f&&_(l)}}}function jt(r){let t,l,m,c,o,f,j,T,E="Upload Image:",D,b,w,g,I="Add image",i,p,C="Delete Image",N,A;return{c(){t=u("form"),l=u("img"),o=v(),f=u("br"),j=v(),T=u("label"),T.textContent=E,D=v(),b=u("input"),w=v(),g=u("button"),g.textContent=I,i=v(),p=u("button"),p.textContent=C,this.h()},l(X){t=n(X,"FORM",{class:!0});var y=R(t);l=n(y,"IMG",{src:!0,alt:!0,class:!0}),o=d(y),f=n(y,"BR",{class:!0}),j=d(y),T=n(y,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),_e(T)!=="svelte-1dlh7jc"&&(T.textContent=E),D=d(y),b=n(y,"INPUT",{class:!0,type:!0,id:!0,accept:!0}),w=d(y),g=n(y,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),_e(g)!=="svelte-17qbm29"&&(g.textContent=I),i=d(y),p=n(y,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(p)!=="svelte-182qki5"&&(p.textContent=C),y.forEach(_),this.h()},h(){Se(l.src,m=r[2].image)||s(l,"src",m),s(l,"alt",c=r[2].item_name),s(l,"class","svelte-1t93qj5"),s(f,"class","svelte-1t93qj5"),s(T,"for","imageUpload"),s(T,"class","svelte-1t93qj5"),s(b,"class","choose svelte-1t93qj5"),s(b,"type","file"),s(b,"id","imageUpload"),s(b,"accept","image/*"),s(g,"type","submit"),s(g,"class","svelte-1t93qj5"),s(p,"class","delete svelte-1t93qj5"),s(t,"class","svelte-1t93qj5")},m(X,y){z(X,t,y),e(t,l),e(t,o),e(t,f),e(t,j),e(t,T),e(t,D),e(t,b),e(t,w),e(t,g),e(t,i),e(t,p),N||(A=[Y(b,"change",r[29]),Y(b,"change",rt(r[20])),Y(p,"click",r[30]),Y(t,"submit",rt(r[16]))],N=!0)},p(X,y){y[0]&4&&!Se(l.src,m=X[2].image)&&s(l,"src",m),y[0]&4&&c!==(c=X[2].item_name)&&s(l,"alt",c)},d(X){X&&_(t),N=!1,ut(A)}}}function bt(r){let t,l,m,c,o,f,j,T,E,D,b,w,g=r[2].small+"",I,i,p,C,N,A,X,y,Q=r[2].medium+"",U,L,V,J,q,a,h,F,K=r[2].lrg+"",se,re,$,P,W,qe,te,je,ie=r[2].xl+"",pe,be,he,O,k,ee,le,ae,He,Ne=r[2].xxl+"",De,Ge,Pe,ze,oe,Ye,ue,Je,Ce=r[2].xxxl+"",Be,Ke,Re,Qe,ce,Ve,ne,We,Ue=r[2].xxxxl+"",Me,Ze,Oe,$e,fe,et,xe,tt,ve,nt="Update item",lt,de,it="Delete Item",st,ot;return{c(){t=u("form"),l=u("p"),m=H(r[4]),o=v(),f=u("img"),E=v(),D=u("ul"),b=u("li"),w=H("Small: "),I=H(g),i=v(),p=u("br"),C=v(),N=u("input"),A=v(),X=u("li"),y=H("Medium: "),U=H(Q),L=v(),V=u("br"),J=v(),q=u("input"),a=v(),h=u("li"),F=H("Large: "),se=H(K),re=v(),$=u("br"),P=v(),W=u("input"),qe=v(),te=u("li"),je=H("XL: "),pe=H(ie),be=v(),he=u("br"),O=v(),k=u("input"),ee=v(),le=u("ul"),ae=u("li"),He=H("XXL: "),De=H(Ne),Ge=v(),Pe=u("br"),ze=v(),oe=u("input"),Ye=v(),ue=u("li"),Je=H("XXXL: "),Be=H(Ce),Ke=v(),Re=u("br"),Qe=v(),ce=u("input"),Ve=v(),ne=u("li"),We=H("XXXXL: "),Me=H(Ue),Ze=v(),Oe=u("br"),$e=v(),fe=u("input"),et=v(),xe=u("br"),tt=v(),ve=u("button"),ve.textContent=nt,lt=v(),de=u("button"),de.textContent=it,this.h()},l(x){t=n(x,"FORM",{class:!0});var B=R(t);l=n(B,"P",{class:!0});var ct=R(l);m=G(ct,r[4]),ct.forEach(_),o=d(B),f=n(B,"IMG",{src:!0,alt:!0,class:!0}),E=d(B),D=n(B,"UL",{class:!0});var ge=R(D);b=n(ge,"LI",{class:!0});var Te=R(b);w=G(Te,"Small: "),I=G(Te,g),i=d(Te),p=n(Te,"BR",{class:!0}),C=d(Te),N=n(Te,"INPUT",{type:!0,min:!0,class:!0}),Te.forEach(_),A=d(ge),X=n(ge,"LI",{class:!0});var Ie=R(X);y=G(Ie,"Medium: "),U=G(Ie,Q),L=d(Ie),V=n(Ie,"BR",{class:!0}),J=d(Ie),q=n(Ie,"INPUT",{type:!0,min:!0,class:!0}),Ie.forEach(_),a=d(ge),h=n(ge,"LI",{class:!0});var Ee=R(h);F=G(Ee,"Large: "),se=G(Ee,K),re=d(Ee),$=n(Ee,"BR",{class:!0}),P=d(Ee),W=n(Ee,"INPUT",{type:!0,min:!0,class:!0}),Ee.forEach(_),qe=d(ge),te=n(ge,"LI",{class:!0});var ye=R(te);je=G(ye,"XL: "),pe=G(ye,ie),be=d(ye),he=n(ye,"BR",{class:!0}),O=d(ye),k=n(ye,"INPUT",{type:!0,min:!0,class:!0}),ye.forEach(_),ge.forEach(_),ee=d(B),le=n(B,"UL",{class:!0});var we=R(le);ae=n(we,"LI",{class:!0});var Xe=R(ae);He=G(Xe,"XXL: "),De=G(Xe,Ne),Ge=d(Xe),Pe=n(Xe,"BR",{class:!0}),ze=d(Xe),oe=n(Xe,"INPUT",{type:!0,min:!0,class:!0}),Xe.forEach(_),Ye=d(we),ue=n(we,"LI",{class:!0});var Le=R(ue);Je=G(Le,"XXXL: "),Be=G(Le,Ce),Ke=d(Le),Re=n(Le,"BR",{class:!0}),Qe=d(Le),ce=n(Le,"INPUT",{type:!0,min:!0,class:!0}),Le.forEach(_),Ve=d(we),ne=n(we,"LI",{class:!0});var ke=R(ne);We=G(ke,"XXXXL: "),Me=G(ke,Ue),Ze=d(ke),Oe=n(ke,"BR",{class:!0}),$e=d(ke),fe=n(ke,"INPUT",{type:!0,min:!0,class:!0}),ke.forEach(_),we.forEach(_),et=d(B),xe=n(B,"BR",{class:!0}),tt=d(B),ve=n(B,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),_e(ve)!=="svelte-1p3zlav"&&(ve.textContent=nt),lt=d(B),de=n(B,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),_e(de)!=="svelte-5fdb95"&&(de.textContent=it),B.forEach(_),this.h()},h(){s(l,"class",c=mt(r[5])+" svelte-1t93qj5"),Se(f.src,j=r[2].image)||s(f,"src",j),s(f,"alt",T=r[2].item_name),s(f,"class","svelte-1t93qj5"),s(p,"class","svelte-1t93qj5"),s(N,"type","number"),s(N,"min","0"),s(N,"class","svelte-1t93qj5"),s(b,"class","svelte-1t93qj5"),s(V,"class","svelte-1t93qj5"),s(q,"type","number"),s(q,"min","0"),s(q,"class","svelte-1t93qj5"),s(X,"class","svelte-1t93qj5"),s($,"class","svelte-1t93qj5"),s(W,"type","number"),s(W,"min","0"),s(W,"class","svelte-1t93qj5"),s(h,"class","svelte-1t93qj5"),s(he,"class","svelte-1t93qj5"),s(k,"type","number"),s(k,"min","0"),s(k,"class","svelte-1t93qj5"),s(te,"class","svelte-1t93qj5"),s(D,"class","svelte-1t93qj5"),s(Pe,"class","svelte-1t93qj5"),s(oe,"type","number"),s(oe,"min","0"),s(oe,"class","svelte-1t93qj5"),s(ae,"class","svelte-1t93qj5"),s(Re,"class","svelte-1t93qj5"),s(ce,"type","number"),s(ce,"min","0"),s(ce,"class","svelte-1t93qj5"),s(ue,"class","svelte-1t93qj5"),s(Oe,"class","svelte-1t93qj5"),s(fe,"type","number"),s(fe,"min","0"),s(fe,"class","svelte-1t93qj5"),s(ne,"class","svelte-1t93qj5"),s(le,"class","svelte-1t93qj5"),s(xe,"class","svelte-1t93qj5"),s(ve,"type","submit"),s(ve,"class","svelte-1t93qj5"),s(de,"type","button"),s(de,"class","delete svelte-1t93qj5"),s(t,"class","svelte-1t93qj5")},m(x,B){z(x,t,B),e(t,l),e(l,m),e(t,o),e(t,f),e(t,E),e(t,D),e(D,b),e(b,w),e(b,I),e(b,i),e(b,p),e(b,C),e(b,N),M(N,r[2].small),e(D,A),e(D,X),e(X,y),e(X,U),e(X,L),e(X,V),e(X,J),e(X,q),M(q,r[2].medium),e(D,a),e(D,h),e(h,F),e(h,se),e(h,re),e(h,$),e(h,P),e(h,W),M(W,r[2].lrg),e(D,qe),e(D,te),e(te,je),e(te,pe),e(te,be),e(te,he),e(te,O),e(te,k),M(k,r[2].xl),e(t,ee),e(t,le),e(le,ae),e(ae,He),e(ae,De),e(ae,Ge),e(ae,Pe),e(ae,ze),e(ae,oe),M(oe,r[2].xxl),e(le,Ye),e(le,ue),e(ue,Je),e(ue,Be),e(ue,Ke),e(ue,Re),e(ue,Qe),e(ue,ce),M(ce,r[2].xxxl),e(le,Ve),e(le,ne),e(ne,We),e(ne,Me),e(ne,Ze),e(ne,Oe),e(ne,$e),e(ne,fe),M(fe,r[2].xxxxl),e(t,et),e(t,xe),e(t,tt),e(t,ve),e(t,lt),e(t,de),st||(ot=[Y(N,"input",r[31]),Y(q,"input",r[32]),Y(W,"input",r[33]),Y(k,"input",r[34]),Y(oe,"input",r[35]),Y(ce,"input",r[36]),Y(fe,"input",r[37]),Y(ve,"click",r[18]),Y(de,"click",r[19]),Y(t,"submit",rt(r[18]))],st=!0)},p(x,B){B[0]&16&&Z(m,x[4]),B[0]&32&&c!==(c=mt(x[5])+" svelte-1t93qj5")&&s(l,"class",c),B[0]&4&&!Se(f.src,j=x[2].image)&&s(f,"src",j),B[0]&4&&T!==(T=x[2].item_name)&&s(f,"alt",T),B[0]&4&&g!==(g=x[2].small+"")&&Z(I,g),B[0]&4&&S(N.value)!==x[2].small&&M(N,x[2].small),B[0]&4&&Q!==(Q=x[2].medium+"")&&Z(U,Q),B[0]&4&&S(q.value)!==x[2].medium&&M(q,x[2].medium),B[0]&4&&K!==(K=x[2].lrg+"")&&Z(se,K),B[0]&4&&S(W.value)!==x[2].lrg&&M(W,x[2].lrg),B[0]&4&&ie!==(ie=x[2].xl+"")&&Z(pe,ie),B[0]&4&&S(k.value)!==x[2].xl&&M(k,x[2].xl),B[0]&4&&Ne!==(Ne=x[2].xxl+"")&&Z(De,Ne),B[0]&4&&S(oe.value)!==x[2].xxl&&M(oe,x[2].xxl),B[0]&4&&Ce!==(Ce=x[2].xxxl+"")&&Z(Be,Ce),B[0]&4&&S(ce.value)!==x[2].xxxl&&M(ce,x[2].xxxl),B[0]&4&&Ue!==(Ue=x[2].xxxxl+"")&&Z(Me,Ue),B[0]&4&&S(fe.value)!==x[2].xxxxl&&M(fe,x[2].xxxxl)},d(x){x&&_(t),st=!1,ut(ot)}}}function kt(r){let t,l="Lets store some inventory",m,c,o,f='<tr class="svelte-1t93qj5"><th class="svelte-1t93qj5">Item Name</th> <th class="svelte-1t93qj5">Small</th> <th class="svelte-1t93qj5">Medium</th> <th class="svelte-1t93qj5">Large</th> <th class="svelte-1t93qj5">XL</th> <th class="svelte-1t93qj5">XXL</th> <th class="svelte-1t93qj5">XXXL</th> <th class="svelte-1t93qj5">XXXXL</th></tr>',j,T,E=[],D=new Map,b,w,g,I,i,p,C,N,A,X,y=Fe(r[1]);const Q=a=>a[43];for(let a=0;a<y.length;a+=1){let h=pt(r,y,a),F=Q(h);D.set(F,E[a]=ht(F,h))}let U=r[0]&&vt(r),L=r[0]&&dt(r);function V(a,h){return a[0]?Lt:Xt}let J=V(r),q=J(r);return{c(){t=u("h1"),t.textContent=l,m=v(),c=u("table"),o=u("thead"),o.innerHTML=f,j=v(),T=u("tbody");for(let a=0;a<E.length;a+=1)E[a].c();b=v(),U&&U.c(),w=v(),L&&L.c(),g=v(),I=u("br"),i=v(),p=u("br"),C=v(),N=u("br"),A=v(),q.c(),X=Ae(),this.h()},l(a){t=n(a,"H1",{class:!0,"data-svelte-h":!0}),_e(t)!=="svelte-49ncmh"&&(t.textContent=l),m=d(a),c=n(a,"TABLE",{class:!0});var h=R(c);o=n(h,"THEAD",{class:!0,"data-svelte-h":!0}),_e(o)!=="svelte-1j9g62"&&(o.innerHTML=f),j=d(h),T=n(h,"TBODY",{class:!0});var F=R(T);for(let K=0;K<E.length;K+=1)E[K].l(F);b=d(F),U&&U.l(F),F.forEach(_),w=d(h),L&&L.l(h),h.forEach(_),g=d(a),I=n(a,"BR",{class:!0}),i=d(a),p=n(a,"BR",{class:!0}),C=d(a),N=n(a,"BR",{class:!0}),A=d(a),q.l(a),X=Ae(),this.h()},h(){s(t,"class","svelte-1t93qj5"),s(o,"class","svelte-1t93qj5"),s(T,"class","svelte-1t93qj5"),s(c,"class","svelte-1t93qj5"),s(I,"class","svelte-1t93qj5"),s(p,"class","svelte-1t93qj5"),s(N,"class","svelte-1t93qj5")},m(a,h){z(a,t,h),z(a,m,h),z(a,c,h),e(c,o),e(c,j),e(c,T);for(let F=0;F<E.length;F+=1)E[F]&&E[F].m(T,null);e(T,b),U&&U.m(T,null),e(c,w),L&&L.m(c,null),z(a,g,h),z(a,I,h),z(a,i,h),z(a,p,h),z(a,C,h),z(a,N,h),z(a,A,h),q.m(a,h),z(a,X,h)},p(a,h){h[0]&2&&(y=Fe(a[1]),E=gt(E,h,Q,1,a,y,D,T,Tt,ht,b,pt)),a[0]?U?U.p(a,h):(U=vt(a),U.c(),U.m(T,null)):U&&(U.d(1),U=null),a[0]?L?L.p(a,h):(L=dt(a),L.c(),L.m(c,null)):L&&(L.d(1),L=null),J===(J=V(a))&&q?q.p(a,h):(q.d(1),q=J(a),q&&(q.c(),q.m(X.parentNode,X)))},i:at,o:at,d(a){a&&(_(t),_(m),_(c),_(g),_(I),_(i),_(p),_(C),_(N),_(A),_(X));for(let h=0;h<E.length;h+=1)E[h].d();U&&U.d(),L&&L.d(),q.d(a)}}}function wt(r,t,l){let m=!0,c=[],o=null,f="",j="",T="",E=[],D=[],b=[],w=[],g=[],I=[],i=[],p=[];ft(async()=>{let{data:O,error:k}=await me.from("warehouse").select("*");k?console.log("Error: ",k):l(1,c=O)});async function C(){const{data:O}=await me.auth.getSession();if(!O){console.error("No user logged in");return}const{data:k,error:ee}=await me.from("main").select("usr_lvl").eq("email",O.session.user.email);if(ee){console.error(ee);return}if(k&&k.length>0&&k[0].usr_lvl<7){l(4,j="You do not have access here"),l(5,T="error"),l(0,m=!1);return}}C();async function N(){const O={item_name:E,small:D,medium:b,lrg:w,xl:g,xxl:I,xxxl:i,xxxxl:p},{error:k}=await me.from("warehouse").insert([O]);k?console.log("Error: ",k):(l(1,c=[...c,O]),l(6,E=""),l(7,D=0),l(8,b=0),l(9,w=0),l(10,g=0),l(11,I=0),l(12,i=0),l(13,p=0)),k?(console.error(k),J("Failed to update inventory","error")):(J("Inventory updated successfully","success"),setTimeout(A,1e3))}async function A(){console.log("Fetching data from warehouse...");let{data:O,error:k}=await me.from("warehouse").select("*");if(k)console.log("Error fetching data from warehouse: ",k);else{console.log("Data fetched from warehouse: ",O),l(1,c=O);for(let ee of c){const{data:le,error:ae}=await me.storage.from("warehouse").getPublicUrl(`${ee.item_name}.jpg`);ae?console.log(`Error fetching image for item: ${ee.item_name}`,ae):ee.image=le.publicUrl}}}function X(O){l(2,o=c.find(k=>k.item_name===O.target.value))}async function y(O){O.preventDefault();const k=f[0],ee=`${o.item_name}.jpg`;let{error:le}=await me.storage.from("warehouse").upload(ee,k);if(le){console.error(le);return}console.log("Image uploaded successfully")}async function Q(O){const k=`${O}.jpg`;console.log("Attempting to delete image with path:",k);try{const{error:ee}=await me.storage.from("warehouse").remove([k]);if(ee){console.error("Error deleting image:",ee.message);return}console.log("Image deleted successfully")}catch(ee){console.error("Error deleting image:",ee.message)}}async function U(O){O.preventDefault();const{error:k}=await me.from("warehouse").update({small:o.small,medium:o.medium,lrg:o.lrg,xl:o.xl,xxl:o.xxl,xxxl:o.xxxl,xxxxl:o.xxxxl}).eq("item_name",o.item_name);k?(console.error(k),J("Failed to update inventory","error")):(J("Inventory updated successfully","success"),setTimeout(A,1e3))}async function L(O){O.preventDefault();const{error:k}=await me.from("warehouse").delete().eq("item_name",o.item_name);k?(console.error(k),J("Failed to delete item","error")):(J("Item deleted successfully","success"),setTimeout(A,1e3))}function V(O){O.preventDefault(),console.log("File selected:",f[0])}ft(A);function J(O,k){l(4,j=O),l(5,T=k),setTimeout(()=>{l(4,j=""),l(5,T="")},3e3)}function q(){E=this.value,l(6,E)}function a(){D=S(this.value),l(7,D)}function h(){b=S(this.value),l(8,b)}function F(){w=S(this.value),l(9,w)}function K(){g=S(this.value),l(10,g)}function se(){I=S(this.value),l(11,I)}function re(){i=S(this.value),l(12,i)}function $(){p=S(this.value),l(13,p)}function P(){f=this.files,l(3,f)}const W=()=>{const O=o.item_name;console.log("Triggering deleteImage for item:",O),Q(O)};function qe(){o.small=S(this.value),l(2,o)}function te(){o.medium=S(this.value),l(2,o)}function je(){o.lrg=S(this.value),l(2,o)}function ie(){o.xl=S(this.value),l(2,o)}function pe(){o.xxl=S(this.value),l(2,o)}function be(){o.xxxl=S(this.value),l(2,o)}function he(){o.xxxxl=S(this.value),l(2,o)}return[m,c,o,f,j,T,E,D,b,w,g,I,i,p,N,X,y,Q,U,L,V,q,a,h,F,K,se,re,$,P,W,qe,te,je,ie,pe,be,he]}class Pt extends Et{constructor(t){super(),yt(this,t,wt,kt,It,{},null,[-1,-1])}}export{Pt as component};
