'use strict';
	let score=0;
function game(num){
	let result=document.getElementById("result");
	result.textContent=null;
	let hoi=document.getElementById("hoi");
	hoi.textContent="ほい！";
	let img=document.getElementById("img");
	img.textContent=null;
	let face = Math.floor( Math.random() * (4 + 1 - 1) ) + 1 ;
	let image=document.createElement("img");
	image.src=`images/${face}.png`;
	image.style
	img.appendChild(image);
	if(num==face){
		score++;
		result.textContent="やるじゃん";
		result.style.color="#ff70ff";
		result.style.fontSize="50px";
	}else{
		result.textContent="出直してきな！";
		result.style.color="#e03a3a";
		result.style.fontSize="50px";
	}
}
