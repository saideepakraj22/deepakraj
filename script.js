function likePhoto(btn){

let span = btn.querySelector("span")

let count = parseInt(span.dataset.count)

count++

span.dataset.count = count

span.innerText = count

}


function openViewer(img){

document.getElementById("imageViewer").style.display="flex"

document.getElementById("viewerImg").src = img.src

}

function closeViewer(){

document.getElementById("imageViewer").style.display="none"

}



function filterPhotos(category,btn){

let photos = document.querySelectorAll(".photo-card")

photos.forEach(function(photo){

if(category==="all" || photo.dataset.category===category){

photo.style.display="block"

}else{

photo.style.display="none"

}

})

document.querySelectorAll(".categories button").forEach(b=>b.classList.remove("active"))

if(btn) btn.classList.add("active")

}



function openPayment(name,price){

document.getElementById("paymentPopup").style.display="flex"

document.getElementById("photoName").innerText=name

document.getElementById("photoPrice").innerText="Price ₹"+price

document.getElementById("whatsappLink").href=

"https://wa.me/918074158967?text=Hi Sai Deepak Raj, I want to buy your photo "+name+" ₹"+price

}


function closePayment(){

document.getElementById("paymentPopup").style.display="none"

}
