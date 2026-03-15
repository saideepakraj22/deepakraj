function likePhoto(btn){
    let countSpan = btn.querySelector("span");
    
    // Get raw count (stored in data-count) or initialize
    let count = parseInt(countSpan.dataset.count || countSpan.innerText);
    
    // Check if user already liked this photo
    let liked = btn.dataset.liked === "true";

    if(!liked){
        count += 1;             // Add like
        btn.dataset.liked = "true";  // Mark as liked
        btn.classList.add("liked");  // Heart pop animation
    } else {
        count -= 1;             // Remove like
        btn.dataset.liked = "false"; // Unmark liked
        btn.classList.remove("liked"); // Remove animation
    }

    // Store raw count in data attribute
    countSpan.dataset.count = count;

    // Update displayed number with Instagram-style formatting
    countSpan.innerText = formatLikes(count);
}

// Format numbers like Instagram: 1K, 1.2M
function formatLikes(num){
    if(num < 1000) return num;
    else if(num < 1000000) return (num/1000).toFixed(1).replace('.0','') + 'K';
    else return (num/1000000).toFixed(1).replace('.0','') + 'M';
}

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
