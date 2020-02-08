function val(){
var i = document.forms.myForm.name.value;
if(i == null || i == " ")
{
alert("fill details");
return false;
}
}