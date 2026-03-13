const filterButtons = document.querySelectorAll(".filter-btn");
const photos = document.querySelectorAll(".photo-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

let filter = button.getAttribute("data-filter");

photos.forEach(photo => {

if(filter === "all" || photo.getAttribute("data-category") === filter){

photo.style.display = "block";

}else{

photo.style.display = "none";

}

});

});

});
