// script.js
const catBreedsData = [
    // Add your cat breed data here (same format as in your React app)
  ];
  
  const appContainer = document.querySelector('.App');
  
  catBreedsData.forEach((breedData, index) => {
    const catBreedBox = document.createElement('a');
    catBreedBox.className = 'cat-breed-box';
    catBreedBox.href = `/description/${breedData.breedName}`;
  
    const catBreedContent = document.createElement('div');
    catBreedContent.className = 'cat-breed-content';
  
    const catImage = document.createElement('img');
    catImage.className = 'cat-breed-image';
    catImage.src = breedData.imageSrc;
    catImage.alt = breedData.breedName;
  
    const catName = document.createElement('h3');
    catName.textContent = breedData.breedName;
  
    const catDescription = document.createElement('p');
    catDescription.textContent = breedData.description;
  
    catBreedContent.appendChild(catImage);
    catBreedContent.appendChild(catName);
    catBreedContent.appendChild(catDescription);
  
    catBreedBox.appendChild(catBreedContent);
    appContainer.appendChild(catBreedBox);
  });
  