
const burgerBtn = document.querySelector("#burgerBtn");
const burgerContent = document.querySelector("#burgerContent");

burgerBtn.addEventListener("click", function(){
	burgerBtn.classList.toggle("burger__button_active");
	burgerContent.classList.toggle("trans");
});


const bt = document.querySelector("#pages");
const ct = document.querySelector("#pagesList");

bt.addEventListener("click", function(){
	ct.classList.toggle("hgt");
});