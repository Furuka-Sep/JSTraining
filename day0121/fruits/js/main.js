'use strict';
window.addEventListener('load',()=>{
	const result=document.getElementById('result');
	const fruits=document.getElementsByClassName('fruits');
	const numberChange=()=>{
		let sum=0;
		for(let i=0;i<fruits.length;i++){
			sum+=parseInt(fruits[i].value) * parseInt(fruits[i].getAttribute('data-price'));
		}
		result.textContent=`${sum}円になり申す!`;
	};
	for(let i=0;i<fruits.length;i++){
		fruits[i].addEventListener('change',numberChange);
		fruits[i].addEventListener('keyup',numberChange);
		fruits[i].addEventListener('mouseup',numberChange);
	}
});
