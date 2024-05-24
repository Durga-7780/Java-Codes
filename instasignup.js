/**
 * 
 */
var email=document.getElementById("email");
var fullname=document.getElementById("fullname");
var username=document.getElementById("username");
var pass=document.getElementById("password");
var star=document.getElementById("asterick");
var star1=document.getElementById("asterick2");
var star2=document.getElementById("asterick3");
var star3=document.getElementById("asterick4");

email.oninput=()=>{
	if((email.value).match("^[a-z0-9]+[_.]?[a-z0-9]+@gmail.com$") || (email.value).match("^[6789]{1}[0-9]{9}$"))
	 star.style.color="green";
	else star.style.color="red";
}


fullname.oninput=()=>{
	let name=fullname.value;
	name=name.trim();
	if(!isNaN(name) || name=="\s")
	 star1.style.color="red";
	else star1.style.color="green";
}

username.oninput=()=>{
	let name=username.value;
	username.onkeyup=()=>{username.value=name.toLowerCase()}
	
	if(!isNaN(name) || name=="\s")
	 star2.style.color='red';
	else if(name.match("^[a-z]+[_!@#$%^&*()-=+?/.,<>;:'|`~]?[0-9]+$"))
	 star2.style.color='green';
}

pass.oninput=()=>{
	let name=pass.value;
	
	if(!isNaN(name) || name=="\s")
	 star3.style.color='red';
	else if(name.match("^[A-Z]+(?=.*[a-z0-9])(?=.*[^a-zA-Z0-9])(?=.*[0-9])"))
	{
	 star3.style.color='green';
	}
	else star3.style.color='red';
	console.log(name);
}
 
 var form1=document.getElementById("form1");
 var form2=document.getElementById("form2");
 var load=document.getElementById("loader");
 var getapp=document.getElementsByClassName("getapp")[0];

 form1.style.filter='blur(6px)';
 form2.style.filter='blur(6px)';
 getapp.style.filter='blur(6px)';
console.log(getapp);
	 setTimeout(()=>{form1.style.filter='none';
	 form2.style.filter='none';
	 getapp.style.filter='none';
	 load.style.display='none'},1500);

