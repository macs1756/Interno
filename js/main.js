
const burgerBtn = document.querySelector("#burgerBtn");
const burgerContent = document.querySelector("#burgerContent");

burgerBtn.addEventListener("click", function(){
	burgerBtn.classList.toggle("burger__button_active");
	burgerContent.classList.toggle("trans");
});


const bt = document.querySelectorAll(".hgt");

bt.forEach(function(item){
	item.addEventListener("click", function(){
		item.classList.toggle("hgt");
	});
});










