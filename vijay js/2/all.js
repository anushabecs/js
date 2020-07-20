function ad()
{
var a=parseInt(document.getElementById("a").value);
var b=parseInt(document.getElementById("b").value);
var c=a+b;
document.getElementById("ans").value=c;
}
function sub()
{
var a,b,c;
a=document.getElementById("a").value;
b=document.getElementById("b").value;
c=a-b;
document.getElementById("ans").value=c;
}
function mult()
{
var a,b,c;
a=document.getElementById("a").value;
b=document.getElementById("b").value;
c=a*b;
document.getElementById("ans").value=c;
}
function div()
{
var a,b,c;
a=document.getElementById("a").value;
b=document.getElementById("b").value;
c=a/b;
document.getElementById("ans").value=c;
}