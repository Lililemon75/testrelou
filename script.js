const instagramFeed = document.getElementById('instagram-feed');

// Images de test (simulant les images de Notion)
const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
];

// Affiche chaque image dans la grille
images.forEach((url) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('instagram-photo');
    photoDiv.innerHTML = `<img src="${url}" alt="Photo Instagram">`;
    instagramFeed.appendChild(photoDiv);
});
