(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{317:function(t,e,n){"use strict";n.r(e);n(15),n(85);var l={name:"StyledInput",props:{type:{type:String,required:!1,default:"text"},placeholder:{type:String,required:!1,default:""},inputClass:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}},data:function(){return{value:"",focus:!1,id:0}},mounted:function(){this.id=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},methods:{onFocus:function(){this.focus=!0},onBlur:function(){this.focus=!1}}},o=n(46),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col",class:t.inputClass},[e("label",{class:{"text-black":!t.focus,"text-minsk-500 font-bold":t.focus},attrs:{for:"#"+t.id}},[t._v(t._s(t.label))]),t._v(" "),e("input",{staticClass:"py-3 px-2 border border-gray-400 rounded-lg outline-minsk-500",attrs:{id:t.id,type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur}})])}),[],!1,null,null,null);e.default=component.exports}}]);