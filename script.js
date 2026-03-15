// Instagram-style Like Button
function likePhoto(btn){
    let countSpan = btn.querySelector("span");
    
    // Initialize raw count in data attribute if not set
    if(!countSpan.dataset.count){
        countSpan.dataset.count = countSpan.innerText;
    }
    
    let count = parseInt(countSpan.dataset.count);
    
    // Initialize liked state if not set
    if(!btn.dataset.liked){
        btn.dataset.liked = "false";
    }

    // Toggle like
    if(btn.dataset.liked === "false"){
        count += 1;
        btn.dataset.liked = "true";
        btn.classList.add("liked"); // Heart animation
    } else {
        count -= 1;
        btn.dataset.liked = "false";
        btn.classList.remove("liked");
    }

    // Update raw count
    countSpan.dataset.count = count;

    // Update displayed number with Instagram-like formatting
    countSpan.innerText = formatLikes(count);
}

// Format numbers like Instagram: 1K, 1.2M
function formatLikes(num){
    if(num < 1000) return num;
    else if(num < 1000000) return (num/1000).toFixed(1).replace('.0','') + 'K';
    else return (num/1000000).toFixed(1).replace('.0','') + 'M';
}

// Image Viewer
function openViewer(img){
    document.getElementById("imageViewer").style.display="flex";
    document.getElementById("viewerImg").src = img.src;
}

function closeViewer(){
    document.getElementById("imageViewer").style.display="none";
}

// Disable right-click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert("Right click is disabled on this website");
});

// Filter Photos
function filterPhotos(category, btn){
    let photos = document.querySelectorAll(".photo-card");
    photos.forEach(function(photo){
        if(category === "all" || photo.dataset.category === category){
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }
    });

    // Remove active class from all buttons
    document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));

    // Add active class to clicked button
    if(btn) btn.classList.add('active');
}
