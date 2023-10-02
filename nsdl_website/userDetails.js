function IsNumeric(e) {
    var specialKeys = new Array();
     specialKeys.push(8); //Backspace
     specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
     var keyCode = e.which ? e.which : e.keyCode
     var ret = ((keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(keyCode) != -1 && e.charCode != e.keyCode));
   // document.getElementById("error").style.display = ret ? "none" : "inline";
    return ret;
}

function ajaxgetuserdetails(p_uri,path) {		
    var uri = extractUri(p_uri);
    var params="uri="+uri;
    retrieveURI=path+'/acst_t.jsp?uri='+uri;

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
                getuserdetails(uri);
            } else {
                //alert(xhr.status + ': failed csrf check');
            }
        }
    }
}

function expDateHashForUsrDet()
{
//alert('in function');
 var plaintext = document.getElementById('expiryDate').value;
 //alert(plaintext);
 var str=(encode(plaintext)).join("");
 var plaintext1 = document.getElementById('txtSecureCode').value;
 var str1=(encode(plaintext1)).join("");
 
 document.getElementById('expiryDate').value = str;
 document.getElementById('txtSecureCode').value = str1;
}

function getuserdetails(ref){
getMonth(ref);
getYear(ref);	
setCardHashValue();
document.getElementById("expiryDate").value=(month + year);
expDateHashForUsrDet();
document.getElementById('submitButton').disabled=true;
//alert(ref);
document.forms[0].action=ref;
document.forms[0].submit();
}

function getYear(ref)
{
year = document.getElementById("select2").value;
}


function getMonth(ref)
{
month = document.getElementById("select").value;
}

function setCardHashValue()
{
var plainText=document.getElementById('cardNo').value;
 document.getElementById('cardNo').value=MD5(plainText);
}

$(document).ready(function() {
$.ajaxSetup({
  cache: false
});
var timestamp = (new Date()).getTime();

$("#captchaRef").click(function() {
    var timestamp = (new Date()).getTime();
    var newSrc = $("#captchaimg").attr("src").split("?");
    newSrc = newSrc[0] + "?" + timestamp;
       $("#captchaimg").attr("src", newSrc);
    $("#captchaimg").slideDown("fast");

 });
 
});

function callReset()
{
 document.getElementById("captchaKey").value="";
 var list = document.getElementsByClassName("red");
 for(var i=0;i<list.length;i++)
 {
     list[i].style.display="none";
 }
}
function checkCard(cardNumber,path)
{
var plainText=document.getElementById('cardNo').value;
crdNo =MD5(plainText);
var url = path+"/verifyCrdNumberForUsrDet.action";
var queryString = "cardNumber=" + crdNo;
if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
}

req.open("POST", url, true);
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.onreadystatechange = callback;
req.send(queryString);

function callback() {
if (req.readyState == 4) {
    if (req.status == 200) {
        var res = req.responseText;
        if (res == 0)
        {
            document.getElementById('msg').innerHTML = "<font class='red'>It is an Add On Card.Only primary card holders can register for Prepaid Cards Netbanking </font>";
            document.getElementById('cardNo').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        } 
        else if(res == 1)
        {
            document.getElementById('msg').innerHTML = "<font class='red'>Invalid card Number</font>";
            document.getElementById('cardNo').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        }
        else  if(res == 2)
        {
            alert("Error Occured");
            document.getElementById('msg').innerHTML = "";
            document.getElementById('cardNo').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        }
        else  if(res == 3)
        {
            alert("Technical Error Occured");
            document.getElementById('msg').innerHTML = "";
            document.getElementById('cardNo').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        }else  if(res == 4)
        {
            document.getElementById('msg').innerHTML = "<font class='red'>Your card status is inactive.</font>";
            document.getElementById('cardNo').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        }/*else  if(res == 5)
        {
            document.getElementById('msg').innerHTML = "<font class='red'>Your card is not registered on our website.</font>";
            document.getElementById('logcardnumber').value = "";
            //document.getElementById('submitButton').disabled = true;
            return false;
        }*/
        else {
            document.getElementById('msg').innerHTML = "";
            //document.getElementById('submitButton').disabled = false;
        }
                                    
    } 
    else if (req.status == 999)
    {
        document.getElementById('msg').innerHTML = "<font class='red'> HTTP error " + req.statusText + "</font>";
    }
    else 
    {
        document.getElementById('msg').innerHTML = "<font class='red'>HTTP error " + req.statusText + "</font>";
    }
        
    }
}


}