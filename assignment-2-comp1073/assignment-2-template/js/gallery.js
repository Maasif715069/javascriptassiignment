// Gallery items data
const galleryItems = [
    { 
        title: "Pink Flowers",
        largeSrc: "images/flowers-pink-large.jpg", 
        thumbSrc: "images/flowers-pink-small.jpg" 
    },
    { 
        title: "Purple Flowers",
        largeSrc: "images/flowers-purple-large.jpg", 
        thumbSrc: "images/flowers-purple-small.jpg" 
    },
    { 
        title: "Red Flowers",
        largeSrc: "images/flowers-red-large.jpg", 
        thumbSrc: "images/flowers-red-small.jpg" 
    },
    { 
        title: "White Flowers",
        largeSrc: "images/flowers-white-large.jpg", 
        thumbSrc: "images/flowers-white-small.jpg" 
    },
    { 
        title: "Yellow Flowers",
        largeSrc: "images/flowers-yellow-large.jpg", 
        thumbSrc: "images/flowers-yellow-small.jpg" 
    }
];

// Function to populate thumbnails
function populateThumbnails() {
    const thumbnailsList = document.getElementById("thumbnails");

    galleryItems.forEach(item => {
        const listItem = document.createElement("li");
        const thumbnailImg = document.createElement("img");
        
        thumbnailImg.src = item.thumbSrc;
        thumbnailImg.onclick = function() {
            displayImage(item);
        };

        listItem.appendChild(thumbnailImg);
        thumbnailsList.appendChild(listItem);
    });
}

// Function to display clicked image
function displayImage(item) {
    const featuredImage = document.getElementById("featured-image");//chosing images by their id.
    const imageTitle = document.getElementById("image-title");//choosing tutle with their id.

    featuredImage.src = item.largeSrc;//shows clicked image in large type
    featuredImage.alt = item.title;
    imageTitle.textContent = item.title;//change title when click on image
}

// Populate thumbnails on page load
window.onload = function() {
    populateThumbnails();
};
