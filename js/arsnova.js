var xmlhttp = null;
if(window.XMLHttpRequest){        // Firefox, Safari, ... 
   xmlhttp = new XMLHttpRequest();
} else if(window.ActiveXObject){  // IE Windows
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
if (xmlhttp) {
   xmlhttp.open("HEAD", "jsBeispiele/xml/data.xml", true);
   xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4) {
         var res = document.createElement('pre');
         var resText = document.createTextNode(xmlhttp.getAllResponseHeaders());
         res.appendChild(resText);
         httpHead.appendChild(res);
      }
   }
   xmlhttp.send(null);
}