// Before & After functionality

const $img1 = document.querySelector('.js-img-1');
const $img2 = document.querySelector('.js-img-2');
const $beforeAfterTitle = document.querySelector('.js-before-after-title');
const $beforeAfterDescription = document.querySelector('.js-before-after-description');
const $arrowLeft = document.querySelector('.js-arrow-left');
const $arrowRight = document.querySelector('.js-arrow-right');

let counter = 0;

const content = [
    {
        beforeImg: './img/before-1.png',
        afterImg: './img/after-1.png',
        title: 'Lympathic Drainage',
        description: 'This technique combines exclusives manouvers that deliver immediate treatment to results! The body benefits from a reduction in swelling, gains a better defined contour, accelerates its metabolism and heals faster. It also provides stress reduction and increase of a well-being sensation.'
    },
    {
        beforeImg: './img/before-2.png',
        afterImg: './img/after-2.png',
        title: 'Custom Peel',
        description: 'Our custom peels will work help reducing fine lines and wrinkles, lightening pigmentation, healing acne, reducing scarring, even skin texture. Peels is one of our expertise so rest assured we know which blend is best for you.'
    }
]

function nextSlide() {
    counter++;
    $img1.src = content[counter].beforeImg;
    $img2.src = content[counter].afterImg;
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

function previousSlide() {
    counter--;
    $img1.src = content[counter].beforeImg;
    $img2.src = content[counter].afterImg;
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

$arrowLeft.addEventListener('click', previousSlide);
$arrowRight.addEventListener('click', nextSlide);