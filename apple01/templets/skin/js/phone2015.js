/*
* ���ܻ�������汾��Ϣ:
*
*/

  var browser={
    versions:function(){
           var u = navigator.userAgent, app = navigator.appVersion;
           return {//�ƶ��ն�������汾��Ϣ
                trident: u.indexOf('Trident') > -1, //IE�ں�
                presto: u.indexOf('Presto') > -1, //opera�ں�
                webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //�Ƿ�Ϊ�ƶ��ն�
                ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻���uc�����
                iPhone: u.indexOf('iPhone') > -1 || (u.indexOf('Mac') > -1 && u.indexOf('Macintosh') < 0), //�Ƿ�ΪiPhone����QQHD�����
                iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
                webApp: u.indexOf('Safari') == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
}





 

function addCookie(name,value,expiresHours){ 
expiresHours = 1 ;
var cookieString=name+"="+escape(value); 
//�ж��Ƿ����ù���ʱ�� 
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
		if(confirm("�Ƿ���ת���ֻ�����������"))
		{
			addCookie("popped2014","goto");
			location.href="http://wap.i-xunwei.com";
		}
		else
		{
		  addCookie("popped2014","stop");
		  //alert("�㰴��ȡ�����Ǿ��Ƿ���false");
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