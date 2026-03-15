function likePhoto(btn){
    let countSpan = btn.querySelector("span");
    let count = parseInt(countSpan.dataset.count || countSpan.innerText);

    count += 1; // Increment like

    // Store count in data attribute so we always know the raw number
    countSpan.dataset.count = count;

    // Format number like Instagram
    countSpan.innerText = formatLikes(count);

    // Animate heart
    btn.classList.add("liked");
    setTimeout(()=> btn.classList.remove("liked"), 500);
}

// Format numbers like Instagram: 1K, 1.2M
function formatLikes(num){
    if(num < 1000) return num;
    else if(num < 1000000) return (num/1000).toFixed(1).replace('.0','') + 'K';
    else return (num/1000000).toFixed(1).replace('.0','') + 'M';
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
