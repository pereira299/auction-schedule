(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,11,12,13],{298:function(t,e,l){"use strict";var n=l(2),r=l(301);n({target:"String",proto:!0,forced:l(302)("link")},{link:function(t){return r(this,"a","href",t)}})},299:function(t,e,l){var content=l(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(84).default)("9ed6781e",content,!0,{sourceMap:!1})},300:function(t,e,l){"use strict";l.r(e);l(298);var n={name:"StyledButton",props:{text:{type:String,required:!1,default:"Button"},rounded:{type:Boolean,required:!1,default:!1},btnClass:{type:String,required:!1,default:""},link:{type:String,required:!1,default:"#"}}},r=(l(303),l(46)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.link&&"#"!==t.link&&""!==t.link?e("button",{staticClass:"bg-sun-500 text-minsk-500 px-4 py-2",class:t.btnClass+(t.rounded?" rounded-md":"")},[t._v("\n  "+t._s(t.text)+"\n")]):e("a",{staticClass:"bg-sun-500 text-minsk-500 px-4 py-2",class:t.btnClass+(t.rounded?" rounded-md":""),attrs:{href:t.link}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"1c8a89a8",null);e.default=component.exports},301:function(t,e,l){var n=l(3),r=l(23),o=l(13),c=/"/g,d=n("".replace);t.exports=function(t,e,l,n){var m=o(r(t)),f="<"+e;return""!==l&&(f+=" "+l+'="'+d(o(n),c,"&quot;")+'"'),f+">"+m+"</"+e+">"}},302:function(t,e,l){var n=l(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},303:function(t,e,l){"use strict";l(299)},304:function(t,e,l){var n=l(83)((function(i){return i[1]}));n.push([t.i,"a[data-v-1c8a89a8]{display:flex;justify-content:center;vertical-align:middle}",""]),n.locals={},t.exports=n},305:function(t,e,l){"use strict";l.r(e);l(298),l(40);var n={name:"StyledHeader",components:{StyledButton:l(300).default},data:function(){return{navs:[{id:1,name:"Home",link:"/"},{id:2,name:"Agenda de Leilões",link:"/agenda"},{id:3,name:"Pregão online",link:"/pregao"},{id:4,name:"Resultados",link:"/resultados"}]}}},r=l(46),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"w-screen fixed z-50"},[t._m(0),t._v(" "),e("div",{staticClass:"bg-minsk-500 w-screen py-4 flex flex-row max-lg:justify-center"},[t._m(1),t._v(" "),e("nav",{staticClass:"w-8/12 lg:w-6/12 hidden lg:block"},[e("ul",{staticClass:"flex flex-row justify-around my-3"},t._l(t.navs,(function(l){return e("li",{key:l.id,staticClass:"text-white hover:text-sun-500 cursor-pointer"},[e("a",{attrs:{href:l.link}},[t._v("\n            "+t._s(l.name)+"\n          ")])])})),0)]),t._v(" "),e("StyledButton",{staticClass:"hidden lg:block",attrs:{text:"Meu cadastro"}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-white hidden justify-around py-1 bg-minsk-700 lg:flex flex-row w-screen"},[e("div"),t._v(" "),e("div",{staticClass:"flex flex-row divide-x-2 justify-evenly w-auto"},[e("a",{staticClass:"mb-0 mr-2",attrs:{href:"tel:08000492000"}},[t._v(" 0800 049 2000 ")]),t._v(" "),e("a",{staticClass:"mb-0 pl-2",attrs:{href:"mailto:atendimento@camargoagronegocios.com.br"}},[t._v("\n        atendimento@camargoagronegocios.com.br\n      ")])]),t._v(" "),e("div",{staticClass:"flex flex-row w-1/12 justify-around pl-5"},[e("a",{attrs:{href:"https://www.facebook.com/camargoagronegocios",target:"_blank"}},[e("img",{staticClass:"h-6",attrs:{src:"/images/facebook.svg",alt:"Facebook"}})]),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/camargoagronegocios/",target:"_blank"}},[e("img",{attrs:{src:"/images/instagram.svg",alt:"Instagram"}})]),t._v(" "),e("a",{attrs:{href:"https://www.youtube.com/camargoagronegocios/",target:"_blank"}},[e("img",{attrs:{src:"/images/youtube.svg",alt:"Youtube"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"w-2/12 lg:w-4/12 flex flex-row"},[t("div",{staticClass:"w-5/12"},[t("div",{staticClass:"w-32 h-32 p-5 pt-3 ml-auto header-icon lg:mx-0 z-20 -m-4 lg:absolute bg-minsk-500 rounded-full"},[t("img",{attrs:{src:"/images/icon.svg",alt:"Ícone da marca"}})])]),this._v(" "),t("img",{staticClass:"hidden lg:block mx-auto",attrs:{src:"/images/logo.svg",alt:"Camargo Agronegócios"}})])}],!1,null,null,null);e.default=component.exports},306:function(t,e,l){"use strict";l.r(e);l(298),l(40);var n={name:"StyledFooter",data:function(){return{navs:[{id:1,name:"Home",link:"/"},{id:2,name:"Agenda de Leilões",link:"/agenda"},{id:3,name:"Pregão online",link:"/pregao"},{id:4,name:"Resultados",link:"/resultados"},{id:5,name:"Contato",link:"/contato"}]}}},r=l(46),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"bg-minsk-900 w-screen pt-3 pb-7 text-poppins flex flex-row justify-evenly"},[t._m(0),t._v(" "),e("article",{staticClass:"mt-10 hidden lg:block"},[e("h3",{staticClass:"text-white text-lg font-normal mb-5"},[t._v("Mapa do site")]),t._v(" "),e("ul",{staticClass:"text-white text-md"},t._l(t.navs,(function(l){return e("li",{key:l.id,staticClass:"text-white"},[e("a",{attrs:{href:l.link}},[t._v("\n          "+t._s(l.name)+"\n        ")])])})),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-5/12 lg:w-3/12"},[e("img",{staticClass:"mx-auto 2xl:w-16 xl:w-12 lg:w-1/12 md:w-2/12 w-3/12",attrs:{src:"/images/icon.svg",alt:"Ícone da marca"}}),t._v(" "),e("img",{staticClass:"mx-auto my-3 2xl:w-5/12 lg:w-6/12 w-8/12",attrs:{src:"/images/logo.svg",alt:"Camargo Agronegócios"}}),t._v(" "),e("p",{staticClass:"text-white xl:text-sm text-xs"},[t._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut\n      quam autem voluptate saepe, fugiat sed harum molestias quisquam veniam\n      reprehenderit optio voluptas exercitationem.\n    ")])])},function(){var t=this,e=t._self._c;return e("article",{staticClass:"mt-10 hidden lg:block"},[e("h3",{staticClass:"text-white text-lg font-normal mb-5"},[t._v("Links úteis")]),t._v(" "),e("ul",{staticClass:"text-white text-md"},[e("li",[t._v("FAQ")]),t._v(" "),e("li",[t._v("Webmail")]),t._v(" "),e("li",[t._v("Painel de Acesso")])])])},function(){var t=this,e=t._self._c;return e("article",{staticClass:"mt-10"},[e("h3",{staticClass:"text-white text-lg font-normal mb-5"},[t._v("Siga-nos")]),t._v(" "),e("ul",{staticClass:"text-white text-md flex flex-row"},[e("li",[e("a",{attrs:{href:"https://www.youtube.com/channel",target:"_blank"}},[e("img",{staticClass:"w-12 my-auto",attrs:{src:"/images/youtube.svg",alt:"Youtube"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/camargoagronegocios/",target:"_blank"}},[e("img",{staticClass:"w-8 my-auto mt-2",attrs:{src:"/images/instagram.svg",alt:"Instagram"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.twitter.com/camargoagronegocios/",target:"_blank"}},[e("img",{staticClass:"w-10 my-auto",attrs:{src:"/images/twitter.svg",alt:"Twitter"}})])])])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,l){"use strict";l.r(e);var n=l(305),r=l(306),o={name:"BaseLayout",components:{StyledHeader:n.default,StyledFooter:r.default},props:{mainClass:{type:String,required:!1,default:""}},head:function(){return{script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js",crossorigin:"anonymous"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",crossorigin:"anonymous"}]}}},c=l(46),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("StyledHeader"),t._v(" "),e("main",{staticClass:"min-h-screen pt-28",class:t.mainClass},[t._t("default")],2),t._v(" "),e("StyledFooter")],1)}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,l){var content=l(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(84).default)("064010d1",content,!0,{sourceMap:!1})},317:function(t,e,l){"use strict";l.r(e);l(15),l(85);var n={name:"StyledInput",props:{type:{type:String,required:!1,default:"text"},placeholder:{type:String,required:!1,default:""},inputClass:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}},data:function(){return{value:"",focus:!1,id:0}},mounted:function(){this.id=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},methods:{onFocus:function(){this.focus=!0},onBlur:function(){this.focus=!1}}},r=l(46),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col",class:t.inputClass},[e("label",{class:{"text-black":!t.focus,"text-minsk-500 font-bold":t.focus},attrs:{for:"#"+t.id}},[t._v(t._s(t.label))]),t._v(" "),e("input",{staticClass:"py-3 px-2 border border-gray-400 rounded-lg outline-minsk-500",attrs:{id:t.id,type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur}})])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,l){"use strict";l(315)},321:function(t,e,l){var n=l(83)((function(i){return i[1]}));n.push([t.i,"main{background:url(/images/mancha-1.svg),url(/images/mancha-2.svg);background-position:100% 0,0 100%;background-repeat:no-repeat;background-size:12%,4%}@media screen and (max-width:768px){main{background-size:16%,7%}}@media screen and (max-width:480px){main{background-size:20%,10%}}",""]),n.locals={},t.exports=n},326:function(t,e,l){"use strict";l.r(e);var n=l(307),r=l(317),o=l(300),c={name:"Cadastro",components:{BaseLayout:n.default,StyledInput:r.default,StyledButton:o.default},data:function(){return{}}},d=(l(320),l(46)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("BaseLayout",[e("div",{staticClass:"p-10"},[e("header",{staticClass:"mb-10"},[e("h2",{staticClass:"uppercase text-3xl"},[t._v("Formulario para cadastro")]),t._v(" "),e("p",{staticClass:"text-lg mb-5"},[t._v("\n        Para realizar seu cadastro junto com a Camargo Agronegócios, preencha\n        todo formulário abaixo.\n      ")]),t._v(" "),e("p",{staticClass:"text-lg mb-5"},[t._v("\n        A análise de cadastro será realizada com as informações e os\n        documentos solicitados.\n      ")]),t._v(" "),e("p",{staticClass:"text-lg font-bold"},[e("strong",[t._v(" O cadastro esta sujeito a análise para aprovação. ")])])]),t._v(" "),e("form",{},[e("div",{staticClass:"w-full"},[e("label",{attrs:{for:"#pf"}},[t._v("\n          Pessoa Física\n          "),e("input",{attrs:{id:"pf",type:"radio",name:"tipo",value:"F"}})]),t._v(" "),e("label",{staticClass:"ml-5",attrs:{for:"#pj"}},[t._v("\n          Pessoa Jurídica\n          "),e("input",{attrs:{id:"pj",type:"radio",name:"tipo",value:"J"}})])]),t._v(" "),e("section",{staticClass:"lg:flex lg:flex-row lg:flex-wrap justify-between"},[e("section",{staticClass:"flex flex-row flex-wrap justify-between w-full lg:w-5/12"},[e("header",{staticClass:"my-3 w-full"},[e("h3",{staticClass:"text-lg uppercase"},[t._v("Dados Básicos")])]),t._v(" "),e("StyledInput",{attrs:{label:"Nome","input-class":"w-full"}}),t._v(" "),e("StyledInput",{attrs:{label:"CPF","input-class":"w-5/12"}}),t._v(" "),e("StyledInput",{attrs:{label:"Telefone","input-class":"w-5/12"}}),t._v(" "),e("StyledInput",{attrs:{label:"E-mail","input-class":"w-full",type:"email"}}),t._v(" "),e("StyledInput",{attrs:{label:"Senha","input-class":"w-full",type:"password"}})],1),t._v(" "),e("section",{staticClass:"flex flex-row flex-wrap justify-between w-full lg:w-5/12"},[e("header",{staticClass:"my-3 w-full"},[e("h3",{staticClass:"text-lg uppercase"},[t._v("Endereço")])]),t._v(" "),e("StyledInput",{attrs:{label:"CEP","input-class":"w-full"}}),t._v(" "),e("StyledInput",{attrs:{label:"Logradouro","input-class":"w-full"}}),t._v(" "),e("StyledInput",{attrs:{label:"Bairro","input-class":"w-full"}}),t._v(" "),e("StyledInput",{attrs:{label:"Cidade/UF","input-class":"w-5/12"}}),t._v(" "),e("StyledInput",{attrs:{label:"Número","input-class":"w-5/12",type:"number"}}),t._v(" "),e("StyledInput",{attrs:{label:"Complemento","input-class":"w-full"}})],1)]),t._v(" "),e("label",[e("input",{attrs:{type:"checkbox",name:"termos",value:"1"}}),t._v("\n        Li e concordo com os termos apresentados acima, e quero prosseguir com\n        o meu cadastro.\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-row justify-center w-full"},[e("StyledButton",{staticClass:"w-6/12 font-bold mt-10",attrs:{text:"Cadastrar"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);