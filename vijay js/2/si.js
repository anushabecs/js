function si()
{
var p=parseInt(document.getElementById("p").value);
var n=parseInt(document.getElementById("n").value);
var r=parseInt(document.getElementById("r").value);
var si=(p*n*r)/100;
document.getElementById("result").innerHTML=si;
}