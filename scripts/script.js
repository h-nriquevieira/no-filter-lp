// Before & After functionality

const $beforeAfterTitle = document.querySelector('.js-before-after-title');
const $beforeAfterDescription = document.querySelector('.js-before-after-description');
const $arrowLeft = document.querySelector('.js-arrow-left');
const $arrowRight = document.querySelector('.js-arrow-right');

let counter = 0;

const content = [
    {
        before: document.querySelector('.js-img-before-1'),
        after: document.querySelector('.js-img-after-1'),
        title: 'Lympathic Drainage',
        description: 'This technique combines exclusives manouvers that deliver immediate treatment to results! The body benefits from a reduction in swelling, gains a better defined contour, accelerates its metabolism and heals faster. It also provides stress reduction and increase of a well-being sensation.'
    },
    {
        before: document.querySelector('.js-img-before-2'),
        after: document.querySelector('.js-img-after-2'),
        title: 'Custom Peel',
        description: 'Our custom peels will work help reducing fine lines and wrinkles, lightening pigmentation, healing acne, reducing scarring, even skin texture. Peels is one of our expertise so rest assured we know which blend is best for you.'
    }
]

function nextSlide() {
    if (counter === 18) {
        counter = 0;
    } else {
        counter++;
    }
    content[counter-1].before.classList.add('hidden');
    content[counter-1].after.classList.add('hidden');
    content[counter].before.classList.remove('hidden');
    content[counter].after.classList.remove('hidden');
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

function previousSlide() {
    if (counter === 0) {
        counter = 18;
    } else {
        counter--;
    }
    content[counter+1].before.classList.add('hidden');
    content[counter+1].after.classList.add('hidden');
    content[counter].before.classList.remove('hidden');
    content[counter].after.classList.remove('hidden');
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

$arrowLeft.addEventListener('click', previousSlide);
$arrowRight.addEventListener('click', nextSlide);