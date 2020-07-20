function avg()
{
var a,b,c,d,e,avg;
a=parseInt(document.getElementById("a").value);
b=parseInt(document.getElementById("b").value);
c=parseInt(document.getElementById("c").value);
d=parseInt(document.getElementById("d").value);
e=parseInt(document.getElementById("e").value);
avg= ((a+b+c+d+e)/5);
document.getElementById("ans").value=avg;
}