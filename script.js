document.getElementById('show-contact-form').addEventListener('click', function() {
    document.getElementById('contact-form').style.display = 'block';
});



function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageUrl = data.message;
            showDogImagePopup(dogImageUrl);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}


function showDogImagePopup(imageUrl) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = () => {
        document.body.removeChild(popup);
    };

    popup.appendChild(img);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    if (username === 'user' && password === 'pass') {
        document.getElementById('contact-details').style.display = 'block';
        document.getElementById('contact-form').style.display = 'none';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('fetch-dog-breed').addEventListener('click', fetchDogImage);
