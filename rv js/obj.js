var obj = { mykey: "value" }; 
function getProperty(obj, key) 
{
 for(var x in obj)
{
return obj[x];
}
}
 console.log(getProperty.key);