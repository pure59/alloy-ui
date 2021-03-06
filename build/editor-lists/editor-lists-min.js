/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("editor-lists",function(g,f){var e=function(){e.superclass.constructor.apply(this,arguments);},b="li",c="ol",d="ul",a="host";g.extend(e,g.Base,{_onNodeChange:function(m){var k=this.get(a).getInstance(),h,p,q,i,j,n,o=false,r,l=false;if(m.changedType==="tab"){if(m.changedNode.test(b+", "+b+" *")){m.changedEvent.halt();m.preventDefault();p=m.changedNode;j=m.changedEvent.shiftKey;n=p.ancestor(c+","+d);r=d;if(n.get("tagName").toLowerCase()===c){r=c;}if(!p.test(b)){p=p.ancestor(b);}if(j){if(p.ancestor(b)){p.ancestor(b).insert(p,"after");o=true;l=true;}}else{if(p.previous(b)){i=k.Node.create("<"+r+"></"+r+">");p.previous(b).append(i);i.append(p);o=true;}}}if(o){if(!p.test(b)){p=p.ancestor(b);}p.all(e.REMOVE).remove();if(g.UA.ie){p=p.append(e.NON).one(e.NON_SEL);}(new k.EditorSelection()).selectNode(p,true,l);}}},initializer:function(){this.get(a).on("nodeChange",g.bind(this._onNodeChange,this));}},{NON:'<span class="yui-non">&nbsp;</span>',NON_SEL:"span.yui-non",REMOVE:"br",NAME:"editorLists",NS:"lists",ATTRS:{host:{value:false}}});g.namespace("Plugin");g.Plugin.EditorLists=e;},"3.7.1pr1",{"requires":["editor-base"]});