
/** CSRF Common Script Start **/
function ajaxcommon( p_uri,path) {		

	
	var uri = extractUri(p_uri);
	var params="uri="+uri;
	retrieveURI=path + "/acst_t.jsp?uri=" + uri;
	var plaintext = document.getElementById("password").value;
	document.getElementById("password").value = MD5(plaintext);
	var xhr
	if(window.XMLHttpRequest){  
		 xhr=new XMLHttpRequest();  
	}else if(window.ActiveXObject){  
		xhr=new ActiveXObject("Microsoft.XMLHTTP");  
	}
	xhr.open("POST", retrieveURI, true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(params);
	xhr.onreadystatechange = function() {
		
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var val=xhr.responseText;	
				var tokenVal = val.split("#")[0];
				document.getElementById("TOKEN").value=tokenVal;
				commonPostReq(uri);	
			} else {
				//alert(xhr.status + ': failed csrf check');
			}
		}
	}
}


function commonPostReq(uriStr){
	document.forms[0].action=uriStr;
	document.forms[0].submit();
}

function extractUri(url) {
	var uri = "";
	var token = "://";
	var index = url.indexOf(token);
	var part = "";
	
	if(index > 0) {
		part = url.substring(index + token.length);
	} else if(url.charAt(0) != '/') {
		part = "<%=request.getContextPath()%>" + url;
	} else {
		part = url;
	}
	
	/** parse up to end or query string **/
	var uriContext = (index == -1);
	
	for(var i=0; i<part.length; i++) {
		var character = part.charAt(i);
		
		if(character == '/') {
			uriContext = true;
		} else if(uriContext == true && (character == '?' || character == '#')) {
			uriContext = false;
			break;
		}
		
		if(uriContext == true) {
			uri += character;
		}
	}
	
	return uri;
}

/** CSRF Common Script End **/


/** Other Common Script Start **/

function RightClickDisabled()
{
	alert("Right Click is not Allowed" );
	return false;
}
function pinhash1()
{
	 	
	    var plaintext = document.getElementById('newPin').value;
		var str=(encode(plaintext)).join("");
		document.getElementById('newPin').value = str;
		var plaintext1 = document.getElementById('newPin1').value;
		var str1=(encode(plaintext1)).join("");
		document.getElementById('newPin1').value = str1;
		
		
}
function expDateHash()
{
	// alert('in function');
	 var plaintext = document.getElementById('logexpirydate').value;
	// alert(plaintext);
	 var str=(encode(plaintext)).join("");
	 var plaintext1 = document.getElementById('registerDob').value;
	 var str1=(encode(plaintext1)).join("");
	 
	 document.getElementById('logexpirydate').value = str;
	 document.getElementById('registerDob').value = str1;
}
function setCardHashValue()
{
	var plainText=document.getElementById('cardNo').value;
 	document.getElementById('cardNo').value=MD5(plainText);
}
function regCrdOtpHash()
{
	// alert('in function');
	 var plaintext = document.getElementById('registerExpiryDate').value;
	// alert(plaintext);
	 var str=(encode(plaintext)).join("");
	 var plaintext1 = document.getElementById('registerDob').value;
	 var str1=(encode(plaintext1)).join("");
	 
	 document.getElementById('registerExpiryDate').value = str;
	 document.getElementById('registerDob').value = str1;
}
/** Other Common Script End **/
