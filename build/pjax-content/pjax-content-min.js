/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("pjax-content",function(c,b){function a(){}a.prototype={getContent:function(g){var f={},d=this.get("contentSelector"),i=c.Node.create(g||""),e=this.get("titleSelector"),h;if(d){f.node=i.all(d).toFrag();}else{f.node=i;}if(e){h=i.one(e);if(h){f.title=h.get("text");}}return f;},loadContent:function(g,e,f){var d=g.url;if(this._request){this._request.abort();}if(this.get("addPjaxParam")){d=d.replace(/([^#]*)(#.*)?$/,function(h,j,i){j+=(j.indexOf("?")>-1?"&":"?")+"pjax=1";return j+(i||"");});}this._request=c.io(d,{"arguments":{route:{req:g,res:e,next:f},url:d},context:this,headers:{"X-PJAX":"true"},timeout:this.get("timeout"),on:{complete:this._onPjaxIOComplete,end:this._onPjaxIOEnd}});},_onPjaxIOComplete:function(j,e,g){var i=this.getContent(e.responseText),d=g.route,h=d.req,f=d.res;h.ioURL=g.url;f.content=i;f.ioResponse=e;d.next();},_onPjaxIOEnd:function(){this._request=null;}};a.ATTRS={addPjaxParam:{value:true},contentSelector:{value:null},titleSelector:{value:"title"},timeout:{value:30000}};c.PjaxContent=a;},"3.7.1pr1",{"requires":["io-base","node-base","router"]});