"use strict";(self.webpackChunkvac=self.webpackChunkvac||[]).push([[133],{1133:(t,A,n)=>{n.r(A),n.d(A,{default:()=>a});var e=n(7294),i=(n(5939),e.lazy((function(){return n.e(615).then(n.bind(n,8615))})));const a=function(t){var A=t.state,n=A.images;return e.createElement("div",{className:"it-work"},e.createElement("div",{className:"container container_full"},e.createElement("div",{className:""}),e.createElement("div",{className:"it-work__body"},e.createElement("h1",{className:"it-work__title title"},A.title),e.createElement("h2",{className:"it-work__subtitle"},A.subtitle),e.createElement("p",{className:"it-work__text text"},A.text)),e.createElement(i,{img:n.sedan.img,webp:n.sedan.webp,className:"it-work__image it-work__image_sedan"}),e.createElement(i,{img:n.suv.img,webp:n.suv.webp,className:"it-work__image it-work__image_suv"})))}},4152:(t,A,n)=>{n.r(A),n.d(A,{default:()=>x});var e=n(7537),i=n.n(e),a=n(3645),p=n.n(a)()(i());p.push([t.id,".it-work{margin:0 auto 218px;width:100%;max-width:1440px;padding:0 0 74px;position:relative}.it-work__body{background:#fff;max-width:605px;padding:60px 60px 64px;box-shadow:0px 20px 25px rgba(0,0,0,.1);border-radius:5px;text-align:center;margin:-40px auto 0;position:relative;z-index:1}.it-work__subtitle{font-size:30px;line-height:140%;color:#7481ff;margin:0 0 20px}.it-work__image{position:absolute}.it-work__image_sedan{bottom:0;left:-101px;width:511px;height:210px}.it-work__image_suv{top:26px;right:-50px;width:510px;height:256px}@media(max-width: 992px){.it-work{margin:0 0 163px;padding:0 0 210px}.it-work__body{padding:40px;max-width:565px}.it-work__image_sedan{left:-108px;max-width:396px;width:396px;height:162px}.it-work__image_suv{right:-160px;top:185px;max-width:404px;width:404px;height:202px}}@media(max-width: 575px){.it-work{padding:0 0 182px;margin:0 0 84px}.it-work__body{padding:23px 20px 20px}.it-work__subtitle{font-size:24px;margin:0 0 12px;padding:0 33px}.it-work__image_sedan{left:-95px;max-width:274px;width:274px;height:112px}.it-work__image_suv{right:-81px;bottom:78px;top:auto;max-width:259px;width:259px;height:130px}}","",{version:3,sources:["webpack://./src/components/Home/HowItWork/HowItWork.scss","webpack://./src/styles/vars.scss"],names:[],mappings:"AAEA,SACC,mBAAA,CACA,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,eACC,eAAA,CACA,eAAA,CACA,sBAAA,CACA,uCAAA,CACA,iBAAA,CACA,iBAAA,CACA,mBAAA,CACA,iBAAA,CACA,SAAA,CAED,mBACC,cAAA,CACA,gBAAA,CACA,aCZY,CDaZ,eAAA,CAGD,gBACC,iBAAA,CACA,sBACC,QAAA,CACA,WAAA,CACA,WAAA,CACA,YAAA,CAED,oBACC,QAAA,CACA,WAAA,CACA,WAAA,CACA,YAAA,CAKH,yBACC,SACC,gBAAA,CACA,iBAAA,CACA,eACC,YAAA,CACA,eAAA,CAGA,sBACC,WAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAED,oBACC,YAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAAA,CAMJ,yBACC,SACC,iBAAA,CACA,eAAA,CACA,eACC,sBAAA,CAED,mBACC,cAAA,CACA,eAAA,CACA,cAAA,CAGA,sBACC,UAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAED,oBACC,WAAA,CACA,WAAA,CACA,QAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAAA",sourcesContent:["@import '../../../styles/vars.scss';\n\n.it-work {\n\tmargin: 0 auto 218px;\n\twidth: 100%;\n\tmax-width: 1440px;\n\tpadding: 0 0 74px;\n\tposition: relative;\n\t&__body {\n\t\tbackground: #fff;\n\t\tmax-width: 605px;\n\t\tpadding: 60px 60px 64px;\n\t\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 5px;\n\t\ttext-align: center;\n\t\tmargin: -40px auto 0;\n\t\tposition: relative;\n\t\tz-index: 1;\n\t}\n\t&__subtitle {\n\t\tfont-size: 30px;\n\t\tline-height: 140%;\n\t\tcolor: $violetColor;\n\t\tmargin: 0 0 20px;\n\t}\n\n\t&__image {\n\t\tposition: absolute;\n\t\t&_sedan {\n\t\t\tbottom: 0;\n\t\t\tleft: -101px;\n\t\t\twidth: 511px;\n\t\t\theight: 210px;\n\t\t}\n\t\t&_suv {\n\t\t\ttop: 26px;\n\t\t\tright: -50px;\n\t\t\twidth: 510px;\n\t\t\theight: 256px;\n\t\t}\n\t}\n}\n\n@media (max-width: 992px) {\n\t.it-work {\n\t\tmargin: 0 0 163px;\n\t\tpadding: 0 0 210px;\n\t\t&__body {\n\t\t\tpadding: 40px;\n\t\t\tmax-width: 565px;\n\t\t}\n\t\t&__image {\n\t\t\t&_sedan {\n\t\t\t\tleft: -108px;\n\t\t\t\tmax-width: 396px;\n\t\t\t\twidth: 396px;\n\t\t\t\theight: 162px;\n\t\t\t}\n\t\t\t&_suv {\n\t\t\t\tright: -160px;\n\t\t\t\ttop: 185px;\n\t\t\t\tmax-width: 404px;\n\t\t\t\twidth: 404px;\n\t\t\t\theight: 202px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media (max-width: 575px) {\n\t.it-work {\n\t\tpadding: 0 0 182px;\n\t\tmargin: 0 0 84px;\n\t\t&__body {\n\t\t\tpadding: 23px 20px 20px;\n\t\t}\n\t\t&__subtitle {\n\t\t\tfont-size: 24px;\n\t\t\tmargin: 0 0 12px;\n\t\t\tpadding: 0 33px;\n\t\t}\n\t\t&__image {\n\t\t\t&_sedan {\n\t\t\t\tleft: -95px;\n\t\t\t\tmax-width: 274px;\n\t\t\t\twidth: 274px;\n\t\t\t\theight: 112px;\n\t\t\t}\n\t\t\t&_suv {\n\t\t\t\tright: -81px;\n\t\t\t\tbottom: 78px;\n\t\t\t\ttop: auto;\n\t\t\t\tmax-width: 259px;\n\t\t\t\twidth: 259px;\n\t\t\t\theight: 130px;\n\t\t\t}\n\t\t}\n\t}\n}","// Reset styles\n$bgBase: #FFFFFF;\n$colorBase: #41456B;\n$fontFamily: \"Gilroy\";\n$fontSize: 14px;\n$fontWeight: 400;\n$titleFontWeight: 700;\n$linkTransition: all .2s;\n//\n$textColor: #606276;\n$violetColor: #7481FF;\n$violetColorHover: #6270FF;\n// Width \n$width1220: 'max-width: 1220px';\n$width991: 'max-width: 991px';\n$width767: 'max-width: 767px';\n$width575: 'max-width: 575px';\n$width375: 'max-width: 375px';\n\n@mixin flex-center-center {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@mixin flex-ai-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-jc-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-center-between {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n@mixin flex-between {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}"],sourceRoot:""}]);const x=p},5939:(t,A,n)=>{var e=n(3379),i=n.n(e),a=n(7795),p=n.n(a),x=n(569),o=n.n(x),C=n(3565),s=n.n(C),d=n(9216),r=n.n(d),l=n(4589),m=n.n(l),h=n(4152),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=r();var w=i()(h.default,g);if(!h.default.locals||t.hot.invalidate){var c=!h.default.locals,_=c?h:h.default.locals;t.hot.accept(4152,(A=>{h=n(4152),function(t,A,n){if(!t&&A||t&&!A)return!1;var e;for(e in t)if((!n||"default"!==e)&&t[e]!==A[e])return!1;for(e in A)if(!(n&&"default"===e||t[e]))return!1;return!0}(_,c?h:h.default.locals,c)?(_=c?h:h.default.locals,w(h.default)):t.hot.invalidate()}))}t.hot.dispose((function(){w()})),h.default&&h.default.locals&&h.default.locals}}]);
//# sourceMappingURL=133.app.bcaecb1950579202fe9c.js.map