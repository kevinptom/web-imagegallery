// 1. Array of Objects (Data Structure)
const imageData = [
    { src: 'https://picsum.photos/id/1015/800/600', alt: 'River valley landscape' },
    { src: 'https://picsum.photos/id/1016/800/600', alt: 'Rugged canyon' },
    { src: 'https://picsum.photos/id/1018/800/600', alt: 'Mountain road' },
    { src: 'https://picsum.photos/id/1019/800/600', alt: 'Ocean coastline' },
    { src: 'https://picsum.photos/id/1022/800/600', alt: 'Night sky with aurora' },
    { src: 'https://picsum.photos/id/1024/800/600', alt: 'Eagle in flight' }
];

// DOM Elements
const galleryContainer = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.getElementById('closeBtn');

// 2. Functions & Loops
function renderGallery() {
    // Loop through the image data to create elements dynamically
    for (let i = 0; i < imageData.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = imageData[i].src;
        imgElement.alt = imageData[i].alt;
        imgElement.className = 'gallery-item';

        // 3. Events: Add click listener to each image
        imgElement.addEventListener('click', function() {
            openModal(imageData[i].src, imageData[i].alt);
        });

        galleryContainer.appendChild(imgElement);
    }
}

function openModal(imageSrc, imageAlt) {
    fullImage.src = imageSrc;
    fullImage.alt = imageAlt;
    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
    modal.style.display = 'none'; // Hide the modal
}

// 4. Events
closeBtn.addEventListener('click', closeModal);

// 5. Conditionals & Events
// Close the modal if the user clicks anywhere outside the image itself
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Initialize the application
renderGallery();