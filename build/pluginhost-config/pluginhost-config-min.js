/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("pluginhost-config",function(c){var b=c.Plugin.Host,a=c.Lang;b.prototype._initConfigPlugins=function(e){var g=(this._getClasses)?this._getClasses():[this.constructor],d=[],h={},f,j,l,m,k;for(j=g.length-1;j>=0;j--){f=g[j];m=f._UNPLUG;if(m){c.mix(h,m,true);}l=f._PLUG;if(l){c.mix(d,l,true);}}for(k in d){if(d.hasOwnProperty(k)){if(!h[k]){this.plug(d[k]);}}}if(e&&e.plugins){this.plug(e.plugins);}};b.plug=function(e,j,g){var k,h,d,f;if(e!==c.Base){e._PLUG=e._PLUG||{};if(!a.isArray(j)){if(g){j={fn:j,cfg:g};}j=[j];}for(h=0,d=j.length;h<d;h++){k=j[h];f=k.NAME||k.fn.NAME;e._PLUG[f]=k;}}};b.unplug=function(e,h){var j,g,d,f;if(e!==c.Base){e._UNPLUG=e._UNPLUG||{};if(!a.isArray(h)){h=[h];}for(g=0,d=h.length;g<d;g++){j=h[g];f=j.NAME;if(!e._PLUG[f]){e._UNPLUG[f]=j;}else{delete e._PLUG[f];}}}};},"3.7.1pr1",{requires:["pluginhost-base"]});