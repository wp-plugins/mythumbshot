if(typeof Array.prototype.push!="function") {
	Array.prototype.push=ArrayPush;
	function ArrayPush(_1) {
		this[this.length] = _1;
	}
}
function WSR_getElementsByClassName(node, tag_name, class_name) {
	var nodes =(tag_name=="*" && node.all) ? node.all : node.getElementsByTagName(tag_name);
	var data = new Array();
	class_name = class_name.replace(/\-/g,"\\-");
	var find_class = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
	var n;
	for(var i=0;i<nodes.length;i++){
		n = nodes[i];
		if(find_class.test(n.className)) {
			data.push(n);
		}
	}
	return(data);
}
function bindBubbles(e) {
	var entries = WSR_getElementsByClassName(document.getElementById("content"), "div", "entry");
	for(var i=0;i<entries.length;i++) {
		var nodes = entries[i].getElementsByTagName('a');
		for(var j=0;j<nodes.length;j++) {
			str = new String(nodes[j]);
			var myDomain = "http://"+document.domain;
			var flgExternal = str.search(myDomain);
			var flgFtp = str.search("ftp://");
			var flgMailto = str.search("mailto:");
			if(flgExternal==-1 && flgFtp==-1 && flgMailto==-1) {
				var flgNoFile = 1;
				if(str.substr(str.lastIndexOf(".")+1).match(/zip|exe|rar|swf|mp3|wav|mid|avi|mov|mpg|mpeg|wmv|pdf|doc|ppt|xls|jpeg|jpg|gif|png/)) flgNoFile = 0;
				if(flgNoFile) {
					if(window.addEventListener) {
						nodes[j].addEventListener("mouseover",attachBubble,false);
						nodes[j].addEventListener("mouseout",detachBubble,false);
					} else {
						nodes[j].attachEvent("onmouseover",attachBubble);
						nodes[j].attachEvent("onmouseout",detachBubble);
					}
				}
			}
		}
	}
}
function attachBubble(_b, url_image) {
	var _c;
	if(_b["srcElement"]) {
		_c=_b["srcElement"];
	} else {
		_c=_b["target"];
	}
	var _d=_c.href;
	var _e=findPos(_c)[0]+5;
	var _f=findPos(_c)[1]+17;
	var _10=document.createElement("div");
	_10.className="previewbubble";
	_10.setAttribute("style","text-align: left;z-index: 99999;position: absolute;top: "+_f+"px ;left: "+_e+"px ;background: url("+ bubbleImagePath +");width: 175px;height: 118px;padding-top: 8px;padding-left: 8px;padding-bottom: 0;padding-right: 0;margin: 0;");
	_10.style.width="175px";
	_10.style.position="absolute";
	_10.style.top=_f;
	_10.style.zIndex=99999;
	_10.style.left=_e;
	_10.style.textAlign="left";
	_10.style.height="118px";
	_10.style.paddingTop="16px";
	_10.style.paddingLeft="15px";
	_10.style.paddingBottom="15px";
	_10.style.paddingRight="0";
	_10.style.marginTop="0";
	_10.style.marginLeft="0";
	_10.style.marginBottom="0";
	_10.style.marginRight="0";
	_10.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + bubbleImagePath + "',sizingMethod='scale')";
	var img=document.createElement("img");
	img.setAttribute("style","margin: 0;padding: 0;border: 0");
	img.style.paddingTop="0";
	img.style.paddingLeft="0";
	img.style.paddingBottom="0";
	img.style.paddingRight="0";
	img.style.marginTop="0";
	img.style.marginLeft="0";
	img.style.marginBottom="0";
	img.style.marginRight="0";
	img.style.borderTop="0";
	img.style.borderLeft="0";
	img.style.borderBottom="0";
	img.style.borderRight="0";
	img.setAttribute("src", url_image ? url_image :("http://www.mythumbshot.com/get?url="+ _d + "&size=s"));
	img.setAttribute("width",160);
	img.setAttribute("height",120);
	img.setAttribute("alt","Snapshot");
	_10.appendChild(img);
	document.getElementsByTagName("body")[0].appendChild(_10);
}
function detachBubble(_12) {
	lbActions=WSR_getElementsByClassName(document,"div","previewbubble");
	for(i=0;i<lbActions.length;i++) {
		lbActions[i].parentNode.removeChild(lbActions[i]);
	}
}
if(window.addEventListener){
	addEventListener("load",bindBubbles,false);
} else {
	attachEvent("onload",bindBubbles);
}
function findPos(obj) {
	var _14=curtop=0;
	if(obj.offsetParent) {
		_14=obj.offsetLeft;
		curtop=obj.offsetTop;
		while(obj=obj.offsetParent) {
			_14+=obj.offsetLeft;
			curtop+=obj.offsetTop;
		}
	}
	return [_14,curtop];
}
