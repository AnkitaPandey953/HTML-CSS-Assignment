function val()
{
var name = document.forms.myForm.na.value;
var z = document.forms.myForm.ph.value;
if(name == "")
{
	alert("name can not be empty");
	return false;
}
if(z == "" || z.length != 10)
{
	alert("no can contain 10 digits");
	return false;
}
}