(()=>{"use strict";!function(){const e=document.createElement("header"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h1"),c=document.createElement("h2"),d=document.createElement("img"),o=document.createElement("ul"),m=document.createElement("a"),r=document.createElement("li"),l=document.createElement("a"),i=document.createElement("li"),u=document.createElement("a"),p=document.createElement("li"),s=document.createElement("a"),E=document.createElement("li");t.setAttribute("id","banner"),n.setAttribute("id","headline"),a.textContent="Saikou Sushi",c.textContent="最高寿司",d.src="./img/logo.jpg",d.alt="Logo",r.textContent="Home",i.textContent="Menu",p.textContent="Contact",E.textContent="Delivery",n.append(a,c),t.append(n,d),m.append(r),l.append(i),u.append(p),s.append(E),o.append(m,l,u,s),e.append(t,o);const h=document.createElement("main"),C=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div");C.classList.add("wrapper"),g.classList.add("bamboo"),v.classList.add("info"),C.append(g,v),h.appendChild(C);const x=document.createElement("footer"),b=document.createElement("div"),L=document.createElement("div");b.textContent="ⒸSheishori",L.classList.add("credit"),L.innerHTML='Background - <a href="https://unsplash.com/@rapdelarea">Rap Dela Rea</a>, Bamboo texture - <a href="https://unsplash.com/@denisagati">Denis Agati</a>',x.append(b,L),document.querySelector("#content").append(e,h,x)}()})();