const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
// srcipt picture1
const imageContainer = document.getElementById('image-container');
  const imageData =  [
    { imageUrl: 'chinese/Thumnall/Chasing the Dragon (2017).jpg', linkUrl: 'https://www.example.com/page1' },
    { imageUrl: 'chinese/Thumnall/crouching tiger, hidden dragon.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/cuento de cazador sombras.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/double world.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Flying Swords of Dragon Gate.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Chasing the Dragon (2017).jpg', linkUrl: 'https://www.example.com/page1' },
    { imageUrl: 'chinese/Thumnall/crouching tiger, hidden dragon.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/cuento de cazador sombras.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/double world.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Flying Swords of Dragon Gate.jpg', linkUrl: 'https://www.example.com/page2' },
    
    // ... more image data
  ];

  for (let i = 0; i < imageData.length; i++) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('bg-white', 'rounded-lg', 'shadow-md',); // Added Tailwind classes

    const link = document.createElement('a');
    link.href = imageData[i].linkUrl;

    const image = document.createElement('img');
    image.src = imageData[i].imageUrl;
    image.alt = `Image ${i + 1} description`;
    image.classList.add('w-full', 'h-full', 'object-cover',); 
    image.onload = function() {
        this.style.opacity = '1'; 
    };
    image.style.opacity = '0'; 
    image.style.transition = 'opacity 1s ease-in-out'; 

    link.appendChild(image);
    imageDiv.appendChild(link);
    imageContainer.appendChild(imageDiv);
  }
// srcipt picture2
const imageContainer2 = document.getElementById('image-container2');
  const imageData2 =  [
    { imageUrl: 'chinese/Thumnall/Chasing the Dragon (2017).jpg', linkUrl: 'https://www.example.com/page1' },
    { imageUrl: 'chinese/Thumnall/crouching tiger, hidden dragon.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/cuento de cazador sombras.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/double world.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Flying Swords of Dragon Gate.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Chasing the Dragon (2017).jpg', linkUrl: 'https://www.example.com/page1' },
    { imageUrl: 'chinese/Thumnall/crouching tiger, hidden dragon.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/cuento de cazador sombras.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/double world.jpg', linkUrl: 'https://www.example.com/page2' },
    { imageUrl: 'chinese/Thumnall/Flying Swords of Dragon Gate.jpg', linkUrl: 'https://www.example.com/page2' },
    
    // ... more image data
  ];

  for (let i = 0; i < imageData2.length; i++) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('bg-white', 'rounded-lg', 'shadow-md',); // Added Tailwind classes

    const link = document.createElement('a');
    link.href = imageData2[i].linkUrl;

    const image = document.createElement('img');
    image.src = imageData2[i].imageUrl;
    image.alt = `Image ${i + 1} description`;
    image.classList.add('w-full', 'h-full', 'object-cover',); 
    image.onload = function() {
        this.style.opacity = '1'; 
    };
    image.style.opacity = '0'; 
    image.style.transition = 'opacity 1s ease-in-out'; 

    link.appendChild(image);
    imageDiv.appendChild(link);
    imageContainer2.appendChild(imageDiv);
  }