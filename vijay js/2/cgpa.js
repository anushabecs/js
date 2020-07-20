function cgpa()
{
var a,b,c,d,e,f,g,h,cgpa,cgpap;
a=parseInt(document.getElementById("a").value);
b=parseInt(document.getElementById("b").value);
c=parseInt(document.getElementById("c").value);
d=parseInt(document.getElementById("d").value);
e=parseInt(document.getElementById("e").value);
f=parseInt(document.getElementById("f").value);
g=parseInt(document.getElementById("g").value);
h=parseInt(document.getElementById("h").value);
cgpa= ((a+b+c+d+e+f+g+h)/8)*9.5;
document.getElementById("ans").value=cgpa;
}