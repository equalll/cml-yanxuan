var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([3],{139:function(t,e,a){a(140),a(141)},140:function(t,e){},141:function(t,e,a){function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=a(142),n=o(i),r=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),c=a(144),d=o(c),u=a(0),p=o(u),l=[],f=function(){function t(){s(this,t),this.props={name:{type:String,default:"默认值"}},this.data={markers:[],latitude:"",longitude:"",textData:{}},this.methods={makertap:function(t){var e=t.markerId,a=this;a.showMarkerInfo(l,e),a.changeMarkerColor(l,e)},showMarkerInfo:function(t,e){this.textData={name:t[e].name,desc:t[e].address}},changeMarkerColor:function(t,e){var a=[];this.markers=a}}}return r(t,[{key:"mounted",value:function(){var t=this;this.$cmlEmit("onshow",{value:this.name}),new d.default.AMapWX({key:"b7f499f3cc98e7170b361d77c2e12c17"}).getPoiAround({success:function(e){l=e.markers,t.markers=l,t.latitude=l[0].latitude,t.longitude=l[0].longitude,t.showMarkerInfo(l,0)},fail:function(t){(0,n.default)({message:JSON.stringify(t.errMsg)})}})}}]),t}();e.default=new f,e.default=p.default.createComponent(e.default).getOptions()},142:function(t,e,a){function o(t){var e=t.message,a=void 0===e?"":e,o=t.duration,s=void 0===o?2e3:o;i.default.showToast({message:a,duration:s})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=a(143),i=function(t){return t&&t.__esModule?t:{default:t}}(s)},143:function(t,e,a){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),i=a(1),n=function(){function t(){o(this,t)}return s(t,[{key:"showToast",value:function(t){var e=t.message,a=t.duration;wx.showToast({icon:"none",title:e,duration:a})}}]),t}();e.default=new n,(0,i.copyProtoProperty)(e.default)},144:function(t,e){function a(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}a.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var a=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:a}),e(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:a.errMsg||""})}})},a.prototype.getRegeo=function(t){function e(e){var o=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:e,extensions:"all",s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var o,s,i,n,r,c,d,u,p;a.data.status&&"1"==a.data.status?(o=a.data.regeocode,s=o.addressComponent,i=[],n="",o&&o.roads[0]&&o.roads[0].name&&(n=o.roads[0].name+"附近"),r=e.split(",")[0],c=e.split(",")[1],o.pois&&o.pois[0]&&(n=o.pois[0].name+"附近",(d=o.pois[0].location)&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),s.provice&&i.push(s.provice),s.city&&i.push(s.city),s.district&&i.push(s.district),s.streetNumber&&s.streetNumber.street&&s.streetNumber.number?(i.push(s.streetNumber.street),i.push(s.streetNumber.number)):(u="",o&&o.roads[0]&&o.roads[0].name&&(u=o.roads[0].name),i.push(u)),i=i.join(""),p=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:i,desc:n,longitude:r,latitude:c,id:0,regeocodeData:o}],t.success(p)):t.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this;t.location?e(t.location):a.getWxLocation(t,function(t){e(t)})},a.prototype.getWeather=function(t){function e(e){var a="base";t.type&&"forecast"==t.type&&(a="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:o.key,city:e,extensions:a,s:s.s,platform:s.platform,appname:o.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var a,o;e.data.status&&"1"==e.data.status?e.data.lives?(a=e.data.lives)&&a.length>0&&(a=a[0],o=function(t){return{city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}}}(a),o.liveData=a,t.success(o)):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function a(a){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:a,extensions:"all",s:s.s,platform:s.platform,appname:o.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var o,s;a.data.status&&"1"==a.data.status?(s=a.data.regeocode,s.addressComponent?o=s.addressComponent.adcode:s.aois&&s.aois.length>0&&(o=s.aois[0].adcode),e(o)):t.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var o=this,s=o.requestConfig;t.city?e(t.city):o.getWxLocation(t,function(t){a(t)})},a.prototype.getPoiAround=function(t){function e(e){var s={key:a.key,location:e,s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion};t.querytypes&&(s.types=t.querytypes),t.querykeywords&&(s.keywords=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:s,method:"GET",header:{"content-type":"application/json"},success:function(e){var a,o,s,i;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(a=[],o=0;o<e.pois.length;o++)s=0==o?t.iconPathSelected:t.iconPath,a.push({latitude:parseFloat(e.pois[o].location.split(",")[1]),longitude:parseFloat(e.pois[o].location.split(",")[0]),iconPath:s,width:22,height:32,id:o,name:e.pois[o].name,address:e.pois[o].address});i={markers:a,poisData:e.pois},t.success(i)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,o=a.requestConfig;t.location?e(t.location):a.getWxLocation(t,function(t){e(t)})},a.prototype.getStaticmap=function(t){function e(e){s.push("location="+e),t.zoom&&s.push("zoom="+t.zoom),t.size&&s.push("size="+t.size),t.scale&&s.push("scale="+t.scale),t.markers&&s.push("markers="+t.markers),t.labels&&s.push("labels="+t.labels),t.paths&&s.push("paths="+t.paths),t.traffic&&s.push("traffic="+t.traffic);var a=i+s.join("&");t.success({url:a})}var a,o=this,s=[],i="https://restapi.amap.com/v3/staticmap?";s.push("key="+o.key),a=o.requestConfig,s.push("s="+a.s),s.push("platform="+a.platform),s.push("appname="+a.appname),s.push("sdkversion="+a.sdkversion),s.push("logversion="+a.logversion),t.location?e(t.location):o.getWxLocation(t,function(t){e(t)})},a.prototype.getInputtips=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.location&&(o.location=t.location),t.keywords&&(o.keywords=t.keywords),t.type&&(o.type=t.type),t.city&&(o.city=t.city),t.citylimit&&(o.citylimit=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getDrivingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),t.strategy&&(o.strategy=t.strategy),t.waypoints&&(o.waypoints=t.waypoints),t.avoidpolygons&&(o.avoidpolygons=t.avoidpolygons),t.avoidroad&&(o.avoidroad=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getWalkingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getTransitRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),t.strategy&&(o.strategy=t.strategy),t.city&&(o.city=t.city),t.cityd&&(o.cityd=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var a=e.data.route;t.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getRidingRoute=function(t){var e=this,a=e.requestConfig,o={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};t.origin&&(o.origin=t.origin),t.destination&&(o.destination=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=a}},[139]);