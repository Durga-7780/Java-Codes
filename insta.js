/**
 * 
 */

var click=document.getElementById("texter");
        var pass=document.getElementById("passw");
        let c=true;
        click.onclick=()=>{
            if(c){
            pass.type="text";
            click.textContent=" Show";
            c=false;
            }
            else{
                c=true;
                pass.type="password";
                click.textContent=" Hide";
            }
        }
var langdiv=document.getElementById("language");
var lag=document.querySelectorAll("ul li");
let replaclang=document.getElementById("eng");
document.getElementById("changelang").onclick=()=>{
	langdiv.style.display="block";
	lag.forEach((item)=>{
        item.onclick=()=>{
            replaclang.textContent=item.textContent;
            langdiv.style.display="none";
        }
    }
)
}


var login=document.getElementById("click");
