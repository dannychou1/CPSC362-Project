document.addEventListener('DOMContentLoaded', function() {
  const toggleElement = document.querySelector('.toggleBar'); // Corrected selector
  const body = document.body;

  if (toggleElement) {
      toggleElement.addEventListener('click', () => {
          body.classList.toggle('dark');
          console.log('Dark mode toggled');
      });
  }
});



// function for cat description generally healthy info drop down box
function toggleHealthInfo() {
  const content = document.getElementById('health-info-content');
  const toggleIcon = document.getElementById('toggle-icon');
  
  if (content.style.display === 'block') {
      content.style.display = 'none';
      toggleIcon.textContent = '+';
  } else {
      content.style.display = 'block';
      toggleIcon.textContent = '-';
  }
}




// function for cat description drop down boxes
function toggleDropdown(id) {
  var content = document.getElementById(id + '-content');
  var icon = document.getElementById(id + '-icon');
  if (content.style.display === 'none') {
      content.style.display = 'block';
      icon.textContent = '-';
  } else {
      content.style.display = 'none';
      icon.textContent = '+';
  }
}








 
 
 // Add your cat breed data here (same format as in your React app)

  const catBreedsData = [
    {
      breedName: 'Siamese Cat',
      imageSrc: 'images/siamese.jpg',
      description: 'siamese cats are gregarious, kind, intelligent, and family-oriented.',
    },
    // Add more cat breed data objects here
  ];


// const appContainer = document.querySelector('.App');


// catBreedsData.forEach((breedData, index) => {
//   const catBreedBox = document.createElement('a');
//   catBreedBox.className = 'cat-breed-box';
//   catBreedBox.href = `/description/${breedData.breedName}`;

//   const catBreedContent = document.createElement('div');
//   catBreedContent.className = 'cat-breed-content';

//   const catImage = document.createElement('img');
//   catImage.className = 'cat-breed-image';
//   catImage.src = breedData.imageSrc;
//   catImage.alt = breedData.breedName;

//   const catName = document.createElement('h3');
//   catName.textContent = breedData.breedName;

//   const catDescription = document.createElement('p');
//   catDescription.textContent = breedData.description;

//   catBreedContent.appendChild(catImage);
//   catBreedContent.appendChild(catName);
//   catBreedContent.appendChild(catDescription);

//   catBreedBox.appendChild(catBreedContent);
//   appContainer.appendChild(catBreedBox);
// });


// // meowGpt window integration
// const iframe = document.getElementById('svelteAppFrame');


// // Send a message to the iframe
// iframe.contentWindow.postMessage('Hello from the parent page!', 'https://your-vercel-app-url.com');


// // Listen for messages from the iframe
// window.addEventListener('message', (event) => {
//   if (event.origin === 'https://your-vercel-app-url.com') {
//     console.log('Received message from iframe:', event.data);
//   }
// });





// header animation

// Define the logoSpan variable and select the logo elements
// const logoSpan = document.querySelectorAll('.logo');
// const intro = document.querySelector('.intro');



// window.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     logoSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add('active');
//       }, (idx + 1) * 400);
//     });

//     setTimeout(() => {
//       logoSpan.forEach((span, idx) => {
//         setTimeout(() => {
//           span.classList.remove('active');
//           span.classList.add('fade');
//         }, (idx + 1) * 50);
//       });
//     }, 2000);

//     setTimeout(() => {
//       intro.style.transition = 'top 1s ease-in-out';
//       intro.style.top = '-100vh';
//     }, 2300);
//   });


//});

