/**
 * 
 */
var heartempty=document.getElementById("heartsym");
var heartfill=document.getElementById("heartsymfill");
var likecount=document.getElementById("likecount1");
var heartempty1=document.getElementById("heartsym1");
var heartfill1=document.getElementById("heartsymfill1");
var likecount1=document.getElementById("likecount");
var imgclick1=document.getElementById("changeimg");
var imgclick2=document.getElementById("changeimg1");
let imgcli=false;
let imgcli1=false;
var fillbook=document.getElementById("fillbook");
var emptybook=document.getElementById("emptybook");
var fillbook1=document.getElementById("fillbook1");
var emptybook1=document.getElementById("emptybook1");
var imgheartanimie1=document.getElementById("aniheart1");
var imgheartanimie2=document.getElementById("aniheart2");

heartempty.onclick=()=>{
		heartempty.style.display='none';
		heartfill.style.display='inline';
		heartfill.style.color='red';
		var count=parseInt(likecount.textContent);
		likecount.textContent=count+1;
}

heartfill.onclick=()=>{
	heartempty.style.display='inline';
	heartfill.style.display='none';
	imgcli=false;
	var count=parseInt(likecount.textContent);
		likecount.textContent=count-1;
}
heartempty1.onclick=()=>{
	heartfill1.style.display='inline';
	heartfill1.style.color='red';
	heartempty1.style.display='none';
	var count=parseInt(likecount1.textContent);
		likecount1.textContent=count+1;
}
heartfill1.onclick=()=>{
	imgcli1=false;
	heartempty1.style.display='inline';
	heartfill1.style.display='none';
	var count=parseInt(likecount1.textContent);
		likecount1.textContent=count-1;
}

imgclick1.ondblclick=()=>{
	if(!imgcli){
		heartempty.style.display='none';
		heartfill.style.display='inline';
		heartfill.style.color='red';
		var count=parseInt(likecount.textContent);
		likecount.textContent=count+1;
		imgcli=true;
	}
	 imgheartanimie1.style.display='block';
		setTimeout(()=>{
			imgheartanimie1.style.display='none';
		},2000);
}

imgclick2.ondblclick=()=>{
	if(!imgcli1){
		heartempty1.style.display='none';
		heartfill1.style.display='inline';
		
		heartfill1.style.color='red';
		var count=parseInt(likecount1.textContent);
		likecount1.textContent=count+1;
		imgcli1=true;
	}
     imgheartanimie2.style.display='block';
		setTimeout(()=>{
			imgheartanimie2.style.display='none';
		},2000);
}
emptybook.onclick=()=>{
	fillbook.style.display='inline';
	emptybook.style.display='none';
}

fillbook.onclick=()=>{
	emptybook.style.display='inline';
	fillbook.style.display='none';
}

emptybook1.onclick=()=>{
	fillbook1.style.display='inline';
	emptybook1.style.display='none';
}

fillbook1.onclick=()=>{
	emptybook1.style.display='inline';
	fillbook1.style.display='none';
}
