var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([24],{79:function(t,e,n){n(80),n(81)},80:function(t,e){},81:function(t,e,n){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),l=function(t){return t&&t.__esModule?t:{default:t}}(i),r=function t(){a(this,t),this.props={tabs:{type:Array,default:function(){return[]}},activeLabel:{type:String},inline:{type:Boolean,default:!0},lineStyle:{type:String,default:""},hasUnderline:{type:Boolean,default:!0},activeLabelStyle:{type:String,default:"color:#FC9153;"},activeIconStyle:{type:String,default:""}},this.data={},this.computed={tabLineStyle:function(){var t=this;if(!this.tabs.length)return"";var e=750/this.tabs.length,n=this.tabs.findIndex(function(e,n,a){return t.activeLabel===e.label}),a=-1==n?0:n,i=a*e,l=";width:"+e+"cpx;transform: translateX("+i+"cpx);";return this.lineStyle+l}},this.methods={handleTabTap:function(t){var e=t.detail.label,n=this.tabs.findIndex(function(t){return t.label===e});this.$cmlEmit("tabclick",{label:e,activeIndex:n})}}};e.default=new r,e.default=l.default.createComponent(e.default).getOptions()}},[79]);