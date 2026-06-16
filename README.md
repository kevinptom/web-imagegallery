markdown_content = """# 🌌 Interactive JavaScript Image Gallery ✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A beautiful, responsive, and interactive image gallery built entirely with **Vanilla JavaScript**, HTML5, and CSS3. This project was developed to demonstrate foundational web development concepts, featuring a dynamic image grid and a custom Lightbox modal.

---

## 🚀 Features

- **Dynamic Rendering:** Images are loaded dynamically via JavaScript arrays and DOM manipulation.
- **Responsive Grid:** Uses CSS Grid to automatically adjust columns based on screen size (mobile-friendly).
- **Lightbox Modal:** Click on any image to view it in an expanded, full-screen modal with a blurred background.
- **Smooth Animations:** Hover scale effects on the grid items and smooth zoom-in animations for the modal.
- **Smart UX:** Close the modal using the `X` button or simply by clicking anywhere outside the image overlay.

---

## 🧠 Core JavaScript Concepts Demonstrated

This project successfully implements the fundamental building blocks of JavaScript:

- 🔄 **Loops:** Utilized `for` loops to iterate over an array of image data objects and dynamically create HTML `<img>` elements in the DOM.
- 🛠️ **Functions:** Modularized code into distinct, reusable functions (`renderGallery()`, `openModal()`, `closeModal()`).
- 🖱️ **Events:** Applied `addEventListener` to handle user interactions, such as clicking images to trigger the modal, and clicking the close button.
- 🔀 **Conditionals:** Implemented `if` statements to check event targets (e.g., closing the modal *only* if the dark background overlay is clicked, not the image itself).


---

## 💻 Getting Started

To run this project locally, simply follow these steps:

1. **Clone the repository:**
   ```bash
   git clone  https://github.com/kevinptom/web-imagegallery.git
