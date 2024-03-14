"use strict";(self.webpackChunkvac=self.webpackChunkvac||[]).push([[83],{5083:(t,n,e)=>{e.r(n),e.d(n,{default:()=>o});var A=e(7294),i=e(2080),a=(e(6677),e(255));const o=function(t){var n=t.state,e=window.innerWidth,o=n.cards.map((function(t,n){return A.createElement(a.R,{key:n,num:t.num,text:t.text})}));return A.createElement("div",{className:"happy-customers"},A.createElement("div",{className:"container"},A.createElement("div",{className:"happy-customers__row"},A.createElement("div",{className:"happy-customers__body"},A.createElement("h1",{className:"happy-customers__title title"},n.title),A.createElement("p",{className:"happy-customers__text text"},n.text),e>992?A.createElement(A.Fragment,null,A.createElement("h2",{className:"happy-customers__subtitle"},n.subtitle),A.createElement(i.M,{title:"Request a Car",className:"happy-customers__btn btn_solid"})):""),A.createElement("ul",{className:"happy-customers__list"},o),e<=992?A.createElement(A.Fragment,null,A.createElement("h2",{className:"happy-customers__subtitle"},n.subtitle),A.createElement(i.M,{title:"Request a Car",className:"happy-customers__btn btn_solid"})):"")))}},255:(t,n,e)=>{e.d(n,{R:()=>i});var A=e(7294),i=(e(4444),function(t){return A.createElement("li",{className:"happy-customers__item item-customers"},A.createElement("h1",{className:"item-customers__num title"},t.num),A.createElement("p",{className:"item-customers__text text"},t.text))})},2080:(t,n,e)=>{e.d(n,{M:()=>i});var A=e(7294),i=(e(1803),function(t){var n=t.className?" "+t.className:"";return A.createElement("button",{href:"#",className:"btn"+n,onClick:function(n){t.onClickHandler&&(t.onClickHandler(),n.preventDefault())}},t.title)})},4844:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});var A=e(7537),i=e.n(A),a=e(3645),o=e.n(a)()(i());o.push([t.id,".happy-customers{margin:0 0 221px}.happy-customers__row{display:flex;align-items:flex-start;justify-content:space-between;gap:50px}.happy-customers__body{flex:1 1 auto;max-width:550px}.happy-customers__title{margin:0 0 18px}.happy-customers__text{margin:0 0 40px}.happy-customers__subtitle{font-weight:700;font-size:25px;line-height:140%;margin:0 0 40px;max-width:310px;letter-spacing:.02em}.happy-customers__btn{max-width:200px}.happy-customers__list{flex:1 1 600px;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:40px}@media(max-width: 992px){.happy-customers{margin:0 0 162px}.happy-customers__row{flex-direction:column;max-width:600px;margin:0 auto;gap:0}.happy-customers__body{max-width:100%}.happy-customers__list{flex:1 1 auto;width:100%;grid-template-columns:repeat(2, 1fr);gap:40px;margin:0 0 40px}.happy-customers__title{margin:0 0 20px}}@media(max-width: 767px){.happy-customers{margin:0 0 82px}.happy-customers__list{grid-template-columns:1fr;gap:10px;margin:0 0 20px}.happy-customers__title{margin:0 0 10px}.happy-customers__text{margin:0 0 21px}.happy-customers__subtitle{max-width:250px;font-size:20px;margin:0 0 28px}.happy-customers__btn{max-width:100%}}","",{version:3,sources:["webpack://./src/components/Home/HappyCustomers/HappyCustomers.scss"],names:[],mappings:"AAAA,iBACC,gBAAA,CACA,sBACC,YAAA,CACA,sBAAA,CACA,6BAAA,CACA,QAAA,CAED,uBACC,aAAA,CACA,eAAA,CAED,wBACC,eAAA,CAED,uBACC,eAAA,CAED,2BACC,eAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA,CACA,oBAAA,CAED,sBACC,eAAA,CAGD,uBACC,cAAA,CACA,YAAA,CACA,0DAAA,CACA,QAAA,CAIF,yBACC,iBACC,gBAAA,CACA,sBACC,qBAAA,CACA,eAAA,CACA,aAAA,CACA,KAAA,CAED,uBACC,cAAA,CAED,uBACC,aAAA,CACA,UAAA,CACA,oCAAA,CACA,QAAA,CACA,eAAA,CAED,wBACC,eAAA,CAAA,CAKH,yBACC,iBACC,eAAA,CACA,uBACC,yBAAA,CACA,QAAA,CACA,eAAA,CAED,wBACC,eAAA,CAED,uBACC,eAAA,CAED,2BACC,eAAA,CACA,cAAA,CACA,eAAA,CAED,sBACC,cAAA,CAAA",sourcesContent:[".happy-customers {\n\tmargin: 0 0 221px;\n\t&__row {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tjustify-content: space-between;\n\t\tgap: 50px;\n\t}\n\t&__body {\n\t\tflex: 1 1 auto;\n\t\tmax-width: 550px;\n\t}\n\t&__title {\n\t\tmargin: 0 0 18px;\n\t}\n\t&__text {\n\t\tmargin: 0 0 40px;\n\t}\n\t&__subtitle {\n\t\tfont-weight: 700;\n\t\tfont-size: 25px;\n\t\tline-height: 140%;\n\t\tmargin: 0 0 40px;\n\t\tmax-width: 310px;\n\t\tletter-spacing: 0.02em;\n\t}\n\t&__btn {\n\t\tmax-width: 200px;\n\t}\n\n\t&__list {\n\t\tflex: 1 1 600px;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 40px;\n\t}\n}\n\n@media (max-width: 992px) {\n\t.happy-customers {\n\t\tmargin: 0 0 162px;\n\t\t&__row {\n\t\t\tflex-direction: column;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tgap: 0;\n\t\t}\n\t\t&__body {\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t&__list {\n\t\t\tflex: 1 1 auto;\n\t\t\twidth: 100%;\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t\tgap: 40px;\n\t\t\tmargin: 0 0 40px;\n\t\t}\n\t\t&__title {\n\t\t\tmargin: 0 0 20px;\n\t\t}\n\t}\n}\n\n@media (max-width: 767px) {\n\t.happy-customers {\n\t\tmargin: 0 0 82px;\n\t\t&__list {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgap: 10px;\n\t\t\tmargin: 0 0 20px;\n\t\t}\n\t\t&__title {\n\t\t\tmargin: 0 0 10px;\n\t\t}\n\t\t&__text {\n\t\t\tmargin: 0 0 21px;\n\t\t}\n\t\t&__subtitle {\n\t\t\tmax-width: 250px;\n\t\t\tfont-size: 20px;\n\t\t\tmargin: 0 0 28px;\n\t\t}\n\t\t&__btn {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const r=o},7838:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});var A=e(7537),i=e.n(A),a=e(3645),o=e.n(a)()(i());o.push([t.id,".item-customers{background:#fff;box-shadow:0px 20px 25px rgba(0,0,0,.1);border-radius:5px;padding:25px 35px 21px}.item-customers__num{margin-bottom:5px}@media(max-width: 767px){.item-customers{padding:20px 30px 20px}}","",{version:3,sources:["webpack://./src/components/Home/HappyCustomers/StatCard/StatCard.scss"],names:[],mappings:"AAAA,gBACC,eAAA,CACA,uCAAA,CACA,iBAAA,CACA,sBAAA,CACA,qBACC,iBAAA,CAIF,yBACC,gBACC,sBAAA,CAAA",sourcesContent:[".item-customers {\n\tbackground: #fff;\n\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);\n\tborder-radius: 5px;\n\tpadding: 25px 35px 21px;\n\t&__num {\n\t\tmargin-bottom: 5px;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.item-customers {\n\t\tpadding: 20px 30px 20px;\n\t}\n}"],sourceRoot:""}]);const r=o},4753:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});var A=e(7537),i=e.n(A),a=e(3645),o=e.n(a)()(i());o.push([t.id,'.btn{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;line-height:14px;text-align:center;letter-spacing:.02em;text-transform:uppercase;padding:17px 5px 15px;border-radius:2px;width:100%;max-height:45px;position:relative}.btn_liner{background:#fff;border:1px solid #7481ff;color:#7481ff}.btn_liner:hover{border-color:#6270ff;color:#6270ff}.btn_solid{background:#7481ff;color:#fff}.btn_solid:hover{background:#6270ff}.btn_solid-white{background:#fff;color:#7481ff}.btn_solid-white:hover{color:#6270ff;box-shadow:0 0 2px #6270ff}.btn__link{position:absolute;top:0;left:0;width:100%;height:100%}.btn-menu{display:flex;align-items:center;width:37px;height:30px;position:relative;cursor:pointer}.btn-menu__line,.btn-menu__line::before,.btn-menu__line::after{position:absolute;display:block;width:100%;height:4px;background:#41456b;border-radius:7px;transition:all .2s}.btn-menu__line::before{content:"";top:-13px}.btn-menu__line::after{content:"";top:13px}.btn-menu:hover .btn-menu__line,.btn-menu:hover .btn-menu__line::before,.btn-menu:hover .btn-menu__line::after{background:#6270ff}.back-btn{position:relative;padding:5px 0 5px 22px;font-weight:700;font-size:16px;line-height:14px;letter-spacing:.02em;text-transform:uppercase;color:#606276}.back-btn__icon{position:absolute;top:-1px;left:0;width:24px;height:24px;transition:left .2s}.back-btn:hover .back-btn__icon{left:-5px}@media(max-width: 767px){.btn{font-size:14px;line-height:14px;padding:12px 5px 9px}.btn-menu{width:30px}.btn-menu__line::before{top:-12px}.btn-menu__line::after{top:12px}}',"",{version:3,sources:["webpack://./src/components/UI/Buttons/Buttons.scss","webpack://./src/styles/vars.scss"],names:[],mappings:"AAEA,KACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,oBAAA,CACA,wBAAA,CACA,qBAAA,CACA,iBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,WACC,eAAA,CACA,wBAAA,CACA,aCVY,CDWZ,iBACC,oBCXgB,CDYhB,aCZgB,CDelB,WACC,kBCjBY,CDkBZ,UAAA,CACA,iBACC,kBCnBgB,CDsBlB,iBACC,eAAA,CACA,aCzBY,CD0BZ,uBACC,aC1BgB,CD2BhB,0BAAA,CAGF,WACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAIF,UACC,YAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,+DAGC,iBAAA,CACA,aAAA,CACA,UAAA,CACA,UAAA,CACA,kBC9DU,CD+DV,iBAAA,CACA,kBAAA,CAED,wBACC,UAAA,CACA,SAAA,CAED,uBACC,UAAA,CACA,QAAA,CAGD,+GAGC,kBCrEiB,CDyEnB,UACC,iBAAA,CACA,sBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CACA,wBAAA,CACA,aAAA,CACA,gBACC,iBAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAED,gCACC,SAAA,CAIF,yBACC,KACC,cAAA,CACA,gBAAA,CACA,oBAAA,CAGD,UACC,UAAA,CACA,wBACC,SAAA,CAED,uBACC,QAAA,CAAA",sourcesContent:['@import \'../../../styles/vars\';\n\n.btn {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-weight: 700;\n\tfont-size: 16px;\n\tline-height: 14px;\n\ttext-align: center;\n\tletter-spacing: 0.02em;\n\ttext-transform: uppercase;\n\tpadding: 17px 5px 15px;\n\tborder-radius: 2px;\n\twidth: 100%;\n\tmax-height: 45px;\n\tposition: relative;\n\t&_liner {\n\t\tbackground: #fff;\n\t\tborder: 1px solid $violetColor;\n\t\tcolor: $violetColor;\n\t\t&:hover {\n\t\t\tborder-color:  $violetColorHover;\n\t\t\tcolor:  $violetColorHover;\n\t\t}\n\t}\n\t&_solid {\n\t\tbackground: $violetColor;\n\t\tcolor: #fff;\n\t\t&:hover {\n\t\t\tbackground: $violetColorHover;\n\t\t}\n\t}\n\t&_solid-white {\n\t\tbackground: #fff;\n\t\tcolor: $violetColor;\n\t\t&:hover {\n\t\t\tcolor: $violetColorHover;\n\t\t\tbox-shadow: 0 0 2px $violetColorHover;\n\t\t}\n\t}\n\t&__link {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n}\n\n.btn-menu {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 37px;\n\theight: 30px;\n\tposition: relative;\n\tcursor: pointer;\n\t&__line,\n\t&__line::before,\n\t&__line::after {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tbackground: $colorBase;\n\t\tborder-radius: 7px;\n\t\ttransition: all .2s;\n\t}\n\t&__line::before {\n\t\tcontent: "";\n\t\ttop: -13px;\n\t}\n\t&__line::after  {\n\t\tcontent: "";\n\t\ttop: 13px;\n\t}\n\n\t&:hover .btn-menu__line,\n\t&:hover .btn-menu__line::before,\n\t&:hover .btn-menu__line::after {\n\t\tbackground: $violetColorHover;\n\t}\n}\n\n.back-btn {\n\tposition: relative;\n\tpadding: 5px 0 5px 22px;\n\tfont-weight: 700;\n\tfont-size: 16px;\n\tline-height: 14px;\n\tletter-spacing: 0.02em;\n\ttext-transform: uppercase;\n\tcolor: #606276;\t\n\t&__icon {\n\t\tposition: absolute;\n\t\ttop: -1px;\n\t\tleft: 0;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\ttransition: left .2s;\n\t}\n\t&:hover .back-btn__icon {\n\t\tleft: -5px;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.btn {\n\t\tfont-size: 14px;\n\t\tline-height: 14px;\n\t\tpadding: 12px 5px 9px;\n\t}\n\n\t.btn-menu {\n\t\twidth: 30px;\n\t\t&__line::before {\n\t\t\ttop: -12px;\n\t\t}\n\t\t&__line::after  {\n\t\t\ttop: 12px;\n\t\t}\n\t}\n}',"// Reset styles\n$bgBase: #FFFFFF;\n$colorBase: #41456B;\n$fontFamily: \"Gilroy\";\n$fontSize: 14px;\n$fontWeight: 400;\n$titleFontWeight: 700;\n$linkTransition: all .2s;\n//\n$textColor: #606276;\n$violetColor: #7481FF;\n$violetColorHover: #6270FF;\n// Width \n$width1220: 'max-width: 1220px';\n$width991: 'max-width: 991px';\n$width767: 'max-width: 767px';\n$width575: 'max-width: 575px';\n$width375: 'max-width: 375px';\n\n@mixin flex-center-center {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@mixin flex-ai-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-jc-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-center-between {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n@mixin flex-between {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}"],sourceRoot:""}]);const r=o},6677:(t,n,e)=>{var A=e(3379),i=e.n(A),a=e(7795),o=e.n(a),r=e(569),s=e.n(r),l=e(3565),p=e.n(l),C=e(9216),c=e.n(C),m=e(4589),u=e.n(m),x=e(4844),d={};d.styleTagTransform=u(),d.setAttributes=p(),d.insert=s().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=c();var f=i()(x.default,d);if(!x.default.locals||t.hot.invalidate){var h=!x.default.locals,_=h?x:x.default.locals;t.hot.accept(4844,(n=>{x=e(4844),function(t,n,e){if(!t&&n||t&&!n)return!1;var A;for(A in t)if((!e||"default"!==A)&&t[A]!==n[A])return!1;for(A in n)if(!(e&&"default"===A||t[A]))return!1;return!0}(_,h?x:x.default.locals,h)?(_=h?x:x.default.locals,f(x.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),x.default&&x.default.locals&&x.default.locals},4444:(t,n,e)=>{var A=e(3379),i=e.n(A),a=e(7795),o=e.n(a),r=e(569),s=e.n(r),l=e(3565),p=e.n(l),C=e(9216),c=e.n(C),m=e(4589),u=e.n(m),x=e(7838),d={};d.styleTagTransform=u(),d.setAttributes=p(),d.insert=s().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=c();var f=i()(x.default,d);if(!x.default.locals||t.hot.invalidate){var h=!x.default.locals,_=h?x:x.default.locals;t.hot.accept(7838,(n=>{x=e(7838),function(t,n,e){if(!t&&n||t&&!n)return!1;var A;for(A in t)if((!e||"default"!==A)&&t[A]!==n[A])return!1;for(A in n)if(!(e&&"default"===A||t[A]))return!1;return!0}(_,h?x:x.default.locals,h)?(_=h?x:x.default.locals,f(x.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),x.default&&x.default.locals&&x.default.locals},1803:(t,n,e)=>{var A=e(3379),i=e.n(A),a=e(7795),o=e.n(a),r=e(569),s=e.n(r),l=e(3565),p=e.n(l),C=e(9216),c=e.n(C),m=e(4589),u=e.n(m),x=e(4753),d={};d.styleTagTransform=u(),d.setAttributes=p(),d.insert=s().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=c();var f=i()(x.default,d);if(!x.default.locals||t.hot.invalidate){var h=!x.default.locals,_=h?x:x.default.locals;t.hot.accept(4753,(n=>{x=e(4753),function(t,n,e){if(!t&&n||t&&!n)return!1;var A;for(A in t)if((!e||"default"!==A)&&t[A]!==n[A])return!1;for(A in n)if(!(e&&"default"===A||t[A]))return!1;return!0}(_,h?x:x.default.locals,h)?(_=h?x:x.default.locals,f(x.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),x.default&&x.default.locals&&x.default.locals}}]);
//# sourceMappingURL=83.app.bcaecb1950579202fe9c.js.map