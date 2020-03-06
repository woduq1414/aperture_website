var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    location.href = "../WE_LOVE_IE.html"
}else{
        // ie가 아닐 경우
}
