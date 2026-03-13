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
// Like Button

document.querySelectorAll(".like-btn").forEach(btn => {

btn.addEventListener("click", () => {

btn.classList.toggle("liked");

if(btn.classList.contains("liked")){
btn.innerHTML="💖";
}else{
btn.innerHTML="❤️";
}

});

});


// Lightbox Photo Viewer

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

closeBtn.onclick = () => {
lightbox.style.display="none";
}
