const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted.");

});