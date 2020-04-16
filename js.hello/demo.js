//call on the function from onclick in html
function processForm(){
//get input from form
var txtnormal=document.getElementById("txtnormal");
var pwd=document.getElementById("pwd");
var hidden=document.getElementById("hidden");
var txtArea=document.getElementById("txtArea");

var normal=txtnormal.Value;
var Password=pwd.value;
var secret=hidden.value;
var bigtxt=txtArea.value;

// create output
var result=""
result +="<dl> \n";
result +=" <dt>normal</dt> \n";
result +="<dd>"+normal+ "</dd> \n";
result +="\n";
result +=" <dt>secret</dt> \n";
result +=" <dd>"+secret+"</dt>\n";
result +="\n";
result +=" <dt>big txt</dt>\n";
result +=" <dd>"+bigtxt+"</dt> \n";
result +=" </dl>\n";
var output= document.getElementById("output");
output.innerHTML=result;
}//end fumction