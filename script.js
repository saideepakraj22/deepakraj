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
// Like system with counter

document.querySelectorAll(".photo-card").forEach((card,index)=>{

let likeBtn = card.querySelector(".like-btn");
let countSpan = card.querySelector(".like-count");

let savedLikes = localStorage.getItem("photoLikes"+index);

if(savedLikes){
countSpan.innerText = savedLikes;
}

likeBtn.addEventListener("click",()=>{

let count = parseInt(countSpan.innerText);

count++;

countSpan.innerText = count;

localStorage.setItem("photoLikes"+index,count);

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
  let selectedImage = "";

function openPayment(image, price){

selectedImage = image;

document.getElementById("paymentPopup").style.display = "flex";

document.getElementById("photoPrice").innerText =
"Price: ₹" + price;

document.getElementById("upiLink").href =
"upi://pay?pa=8074158967@upi&pn=SaiDeepakRaj&am="+price+"&cu=INR";

document.getElementById("downloadLink").href = image;

}

function closePayment(){

document.getElementById("paymentPopup").style.display = "none";

}

function confirmPayment(){

document.getElementById("downloadLink").style.display = "block";

}

});

closeBtn.onclick = () => {
lightbox.style.display="none";
}
document.addEventListener("dragstart", function(e) {
if (e.target.tagName === "IMG") {
e.preventDefault();
}
});
