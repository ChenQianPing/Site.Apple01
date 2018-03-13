/*
* 智能机浏览器版本信息:
*
*/

  var browser={
    versions:function(){
           var u = navigator.userAgent, app = navigator.appVersion;
           return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || (u.indexOf('Mac') > -1 && u.indexOf('Macintosh') < 0), //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
}





 

function addCookie(name,value,expiresHours){ 
expiresHours = 1 ;
var cookieString=name+"="+escape(value); 
//判断是否设置过期时间 
if(expiresHours>0){ 
var date=new Date(); 
date.setTime(date.getTime+expiresHours*3600*1000); 
cookieString=cookieString+"; expires="+date.toGMTString(); 
} 
document.cookie=cookieString; 
} 
function getCookie(name){ 
var strCookie=document.cookie; 
var arrCookie=strCookie.split("; "); 
for(var i=0;i<arrCookie.length;i++){ 
var arr=arrCookie[i].split("="); 
if(arr[0]==name)return arr[1]; 
} 
return ""; 
} 

//addCookie("popped2014","goto");
//alert(getCookie("popped2014"));

//if (browser.versions.ios||browser.versions.android||browser.versions.iPhone||browser.versions.iPad) {
if (browser.versions.ios||browser.versions.android||browser.versions.iPhone||browser.versions.iPad) {
	
	//self.location="http://wap.i-xunwei.com/";
	
	if (getCookie('popped2014')==''){
		/*
		if(confirm("是否跳转到手机版进行浏览？"))
		{
			addCookie("popped2014","goto");
			location.href="http://wap.i-xunwei.com";
		}
		else
		{
		  addCookie("popped2014","stop");
		  //alert("你按了取消，那就是返回false");
		}
		*/
		addCookie("popped2014","goto");
		location.href="http://wap.i-xunwei.com";
	}
	if (getCookie('popped2014')=='goto'){
		if (document.location.href=="http://www.i-xunwei.com" || document.location.href=="http://www.i-xunwei.com/")
		{
			location.href="http://wap.i-xunwei.com/";
		}
		else
		{
			addCookie("popped2014","stop");
		}
	}/**/
	
}