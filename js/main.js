
const burgerBtn = document.querySelector("#burgerBtn");
const burgerContent = document.querySelector("#burgerContent");

burgerBtn.addEventListener("click", function(){
	burgerBtn.classList.toggle("burger__button_active");
	burgerContent.classList.toggle("trans");
});


let burgerLink = document.querySelectorAll(".burger__content_item");

burgerLink.forEach(function(item){
		
			item.addEventListener("click", function(){
				burgerContent.classList.toggle("trans");
				burgerBtn.classList.toggle("burger__button_active");
			});
});







