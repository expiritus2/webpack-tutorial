import Kiwi from './components/kiwi-image/kiwi.jpg';
import Orange from './components/kiwi-image/orange.jpeg';

export function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Kiwi;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export function addImage2() {
    const img = document.createElement('img');
    img.alt = 'Orange';
    img.width = 300;
    img.src = Orange;

    const body = document.querySelector('body');
    body.appendChild(img);
}