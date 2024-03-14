"use strict";(self.webpackChunkvac=self.webpackChunkvac||[]).push([[879,155],{2080:(t,e,n)=>{n.d(e,{M:()=>a});var A=n(7294),a=(n(1803),function(t){var e=t.className?" "+t.className:"";return A.createElement("button",{href:"#",className:"btn"+e,onClick:function(e){t.onClickHandler&&(t.onClickHandler(),e.preventDefault())}},t.title)})},2418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var A=n(7294),a=n(9655),i=(n(1803),function(t){return t.className&&" ".concat(t.className),A.createElement("div",{className:"btn-menu",onClick:function(){return t.setShowMenu(!t.showMenu)}},A.createElement("span",{className:"btn-menu__line"}))}),r=n(2080);n(5710);const s=function(t){return A.createElement("header",{className:"header"},A.createElement("div",{className:"container"},A.createElement("div",{className:"header__row"},A.createElement("img",{className:"header__logo",src:t.logo,alt:"logo"}),"invent"===t.mod?A.createElement("p",{className:"header__invent"},"Inventory"):"",A.createElement("div",{className:"header__right"},A.createElement("div",{className:"header__buttons"},"invent"===t.mod?"":A.createElement(a.rU,{to:"/catalog",className:"header__inventory-btn btn btn_liner"},"Inventory"),"request"===t.mod?"":A.createElement(a.rU,{to:"/quiz/budget"},A.createElement(r.M,{title:"apply"===t.mod?"apply for this vehicle":"Request a car",className:"apply"===t.mod?"btn_solid header__request-btn apply":"btn_solid header__request-btn"}))),A.createElement(i,{showMenu:t.showMenu,setShowMenu:t.setShowMenu})))))}},5058:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var A=n(7537),a=n.n(A),i=n(3645),r=n.n(i)()(a());r.push([t.id,".header{position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;max-width:1680px;background:#fff;z-index:10;box-shadow:0px 1px 0px #d7d7d7}.header__row,.header__buttons,.header__right{display:flex;align-items:center}.header__row{justify-content:space-between;padding:17px 0 18px;gap:15px;position:relative}.header__logo{height:33px;width:112px}.header__invent{font-weight:700;font-size:25px;line-height:140%;letter-spacing:.02em;position:absolute;left:152px;top:55%;transform:translateY(-50%)}.header__buttons{gap:20px;margin:0 63px 0 0}.header__inventory-btn{min-width:137px}.header__request-btn{min-width:200px}.header__request-btn.apply{min-width:243px}@media(max-width: 991px){.header__request-btn{min-width:178px}.header__request-btn.apply{min-width:236px}}@media(max-width: 767px){.header{min-height:55px}.header__row{padding:10px 0}.header__logo{width:81.18px;height:23.92px}.header__buttons{margin:0 23px 0 0}.header__request-btn{min-width:130px;max-height:35px}.header__request-btn.apply{display:none}.header__inventory-btn{display:none}.header__invent{display:none}}","",{version:3,sources:["webpack://./src/components/UI/Header/Header.scss"],names:[],mappings:"AAAA,QACC,cAAA,CACA,KAAA,CACA,QAAA,CACA,0BAAA,CACA,UAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,8BAAA,CACA,6CAGC,YAAA,CACA,kBAAA,CAGD,aACC,6BAAA,CACA,mBAAA,CACA,QAAA,CACA,iBAAA,CAGD,cACC,WAAA,CACA,WAAA,CAED,gBACC,eAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,OAAA,CACA,0BAAA,CAED,iBACC,QAAA,CACA,iBAAA,CAGD,uBACC,eAAA,CAED,qBACC,eAAA,CACA,2BACC,eAAA,CAKH,yBAEE,qBACC,eAAA,CACA,2BACC,eAAA,CAAA,CAMJ,yBACC,QACC,eAAA,CACA,aACC,cAAA,CAED,cACC,aAAA,CACA,cAAA,CAED,iBACC,iBAAA,CAED,qBACC,eAAA,CACA,eAAA,CACA,2BACC,YAAA,CAGF,uBACC,YAAA,CAED,gBACC,YAAA,CAAA",sourcesContent:[".header {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\twidth: 100%;\n\tmax-width: 1680px;\n\tbackground: #fff;\n\tz-index: 10;\n\tbox-shadow: 0px 1px 0px #D7D7D7;\n\t&__row,\n\t&__buttons,\n\t&__right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__row {\n\t\tjustify-content: space-between;\n\t\tpadding: 17px 0 18px;\n\t\tgap: 15px;\n\t\tposition: relative;\n\t}\n\n\t&__logo {\n\t\theight: 33px;\n\t\twidth: 112px;\n\t}\n\t&__invent {\n\t\tfont-weight: 700;\n\t\tfont-size: 25px;\n\t\tline-height: 140%;\n\t\tletter-spacing: 0.02em;\n\t\tposition: absolute;\n\t\tleft: 152px;\n\t\ttop: 55%;\n\t\ttransform: translateY(-50%);\n\t}\n\t&__buttons {\n\t\tgap: 20px;\n\t\tmargin: 0 63px 0 0;\n\t}\n\n\t&__inventory-btn {\n\t\tmin-width: 137px;\n\t}\n\t&__request-btn {\n\t\tmin-width: 200px;\n\t\t&.apply {\n\t\t\tmin-width: 243px;\n\t\t}\n\t}\n}\n\n@media (max-width: 991px) {\n\t.header {\n\t\t&__request-btn {\n\t\t\tmin-width: 178px;\n\t\t\t&.apply {\n\t\t\t\tmin-width: 236px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media (max-width: 767px) {\n\t.header {\n\t\tmin-height: 55px;\n\t\t&__row {\n\t\t\tpadding: 10px 0;\n\t\t}\n\t\t&__logo {\n\t\t\twidth: 81.18px;\n\t\t\theight: 23.92px;\n\t\t}\n\t\t&__buttons {\n\t\t\tmargin: 0 23px 0 0;\n\t\t}\n\t\t&__request-btn {\n\t\t\tmin-width: 130px;\n\t\t\tmax-height: 35px;\n\t\t\t&.apply {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&__inventory-btn {\n\t\t\tdisplay: none;\n\t\t}\n\t\t&__invent {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const s=r},5710:(t,e,n)=>{var A=n(3379),a=n.n(A),i=n(7795),r=n.n(i),s=n(569),o=n.n(s),d=n(3565),l=n.n(d),C=n(9216),p=n.n(C),h=n(4589),_=n.n(h),c=n(5058),m={};m.styleTagTransform=_(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p();var u=a()(c.default,m);if(!c.default.locals||t.hot.invalidate){var x=!c.default.locals,f=x?c:c.default.locals;t.hot.accept(5058,(e=>{c=n(5058),function(t,e,n){if(!t&&e||t&&!e)return!1;var A;for(A in t)if((!n||"default"!==A)&&t[A]!==e[A])return!1;for(A in e)if(!(n&&"default"===A||t[A]))return!1;return!0}(f,x?c:c.default.locals,x)?(f=x?c:c.default.locals,u(c.default)):t.hot.invalidate()}))}t.hot.dispose((function(){u()})),c.default&&c.default.locals&&c.default.locals}}]);
//# sourceMappingURL=879.app.bcaecb1950579202fe9c.js.map