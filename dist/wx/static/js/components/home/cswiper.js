var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([15],{85:function(n,e,t){t(86),t(87)},86:function(n,e){},87:function(n,e,t){function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=t(2),i=o(r),u=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),c=t(0),f=o(c),l=function(){function n(){a(this,n),this.data={bannerImgList:[]},this.methods={forbinding:function(n){n.stopPropagation()}}}return u(n,[{key:"created",value:function(){var n=this;(0,i.default)({url:"/cml-yanxuan/mock/getHomeImgList.json"}).then(function(e){if(0==e.code){var t=e.data.bannerImgList;n.bannerImgList=t}}).catch(function(n){console.log(n)})}}]),n}();e.default=new l,e.default=f.default.createComponent(e.default).getOptions()}},[85]);