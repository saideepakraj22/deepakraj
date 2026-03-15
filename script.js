function likePhoto(btn){

let count = btn.querySelector("span")

count.innerText = parseInt(count.innerText) + 1

}

function openViewer(img){

document.getElementById("imageViewer").style.display="flex"

document.getElementById("viewerImg").src = img.src

}

function closeViewer(){

document.getElementById("imageViewer").style.display="none"

}

document.addEventListener("contextmenu", function(e){

e.preventDefault()

alert("Right click is disabled on this website")

})

function filterPhotos(category){

let photos = document.querySelectorAll(".photo-card")

photos.forEach(function(photo){

if(category === "all"){

photo.style.display = "block"

}

else if(photo.dataset.category === category){

photo.style.display = "block"

}

else{

photo.style.display = "none"

}

})

}
