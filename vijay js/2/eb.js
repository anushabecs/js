function eb()
{
var hour,watt,daily,unit,rate,total;
watt=1;rate=10;
hour=100*watt;
daily=24*hour;
month=30*daily;
unit=month/1000;
total=unit*rate;
document.getElementById("ans").value=total;
}