function swap()
{
var a,b,c;
a=document.getElementById("a").value;
b=document.getElementById("b").value;
c=a;
a=b;
b=c;
document.getElementById("1st").value=a;
document.getElementById("2nd").value=b;
}