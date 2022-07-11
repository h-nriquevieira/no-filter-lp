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
    },
    {
        before: document.querySelector('.js-img-before-3'),
        after: document.querySelector('.js-img-after-3'),
        title: 'Classic Lashes',
        description: 'Classic lashes is our most natural set that will give you subtle drama on your eyes.'
    },
    {
        before: document.querySelector('.js-img-before-4'),
        after: document.querySelector('.js-img-after-4'),
        title: 'Custom treatment',
        description: 'We mix a variety of treatments personalized according to the need of every single client. You are unique and your skin is not the same as everyone else’s!'
    },
    {
        before: document.querySelector('.js-img-before-5'),
        after: document.querySelector('.js-img-after-5'),
        title: 'Lympathic Drainage',
        description: 'This technique combines exclusives manouvers that deliver immediate treatment to results! The body benefits from a reduction in swelling, gains a better defined contour, accelerates its metabolism and heals faster. It also provides stress reduction and increase of a well-being sensation.'
    },
    {
        before: document.querySelector('.js-img-before-6'),
        after: document.querySelector('.js-img-after-6'),
        title: 'Rose de Mer Peel',
        description: 'This technique combines exclusives manouvers that deliver immediate treatment to results! The body benefits from a reduction in swelling, gains a better defined contour, accelerates its metabolism and heals faster. It also provides stress reduction and increase of a well-being sensation.'
    },
    {
        before: document.querySelector('.js-img-before-7'),
        after: document.querySelector('.js-img-after-7'),
        title: 'Wet Effect Lashes',
        description: 'Wet Effect will give you a more natural set than our volumes but more fullness than our classic.'
    },
    {
        before: document.querySelector('.js-img-before-8'),
        after: document.querySelector('.js-img-after-8'),
        title: 'Custom peel',
        description: 'Our custom peels will work help reducing fine lines and wrinkles, lightening pigmentation, healing acne, reducing scarring, even skin texture. Peels is one of our expertise so rest assured we know which blend is best for you.'
    },
    {
        before: document.querySelector('.js-img-before-9'),
        after: document.querySelector('.js-img-after-9'),
        title: 'Custom treatment',
        description: 'We mix a variety of treatments personalized according to the need of every single client. You are unique and your skin is not the same as everyone else’s!'
    },
    {
        before: document.querySelector('.js-img-before-10'),
        after: document.querySelector('.js-img-after-10'),
        title: 'Custom treatment',
        description: 'We mix a variety of treatments personalized according to the need of every single client. You are unique and your skin is not the same as everyone else’s!'
    },
    {
        before: document.querySelector('.js-img-before-11'),
        after: document.querySelector('.js-img-after-11'),
        title: 'Custom treatment',
        description: 'We mix a variety of treatments personalized according to the need of every single client. You are unique and your skin is not the same as everyone else’s!'
    },
    {
        before: document.querySelector('.js-img-before-12'),
        after: document.querySelector('.js-img-after-12'),
        title: 'Custom Deep Cleansing Facial',
        description: 'This signature 2.5 hour facial is fully customized to target your specific skin concern. Very detailed extractions are performed removing dirt and other debris on your pores. High Frequency and LED Celluma Therapy are also included.'
    },
    {
        before: document.querySelector('.js-img-before-13'),
        after: document.querySelector('.js-img-after-13'),
        title: 'Volume-Y Lashes',
        description: 'Volume-Y is a quicker lashes extension service that will give you the fullness of Russian volume or hybrid set. '
    },
    {
        before: document.querySelector('.js-img-before-14'),
        after: document.querySelector('.js-img-after-14'),
        title: 'Lympathic Drainage',
        description: 'This technique combines exclusives manouvers that deliver immediate treatment to results! The body benefits from a reduction in swelling, gains a better defined contour, accelerates its metabolism and heals faster. It also provides stress reduction and increase of a well-being sensation.'
    },
    {
        before: document.querySelector('.js-img-before-15'),
        after: document.querySelector('.js-img-after-15'),
        title: 'Custom treatment',
        description: 'We mix a variety of treatments personalized according to the need of every single client. You are unique and your skin is not the same as everyone else’s!'
    },
    {
        before: document.querySelector('.js-img-before-16'),
        after: document.querySelector('.js-img-after-16'),
        title: 'Classic Lashes',
        description: 'Classic lashes is our most natural set that will give you subtle drama on your eyes.'
    },
    {
        before: document.querySelector('.js-img-before-17'),
        after: document.querySelector('.js-img-after-17'),
        title: 'Classic Lashes',
        description: 'Classic lashes is our most natural set that will give you subtle drama on your eyes.'
    },
    {
        before: document.querySelector('.js-img-before-18'),
        after: document.querySelector('.js-img-after-18'),
        title: 'Classic Lashes',
        description: 'Classic lashes is our most natural set that will give you subtle drama on your eyes.'
    }
]

function nextSlide() {
    if (counter === 17) {
        counter = 0;
        content[17].before.classList.add('hidden');
        content[17].after.classList.add('hidden');
    } else {
        counter++;
        content[counter-1].before.classList.add('hidden');
        content[counter-1].after.classList.add('hidden');
    }
    content[counter].before.classList.remove('hidden');
    content[counter].after.classList.remove('hidden');
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

function previousSlide() {
    if (counter === 0) {
        counter = 17;
        content[0].before.classList.add('hidden');
        content[0].after.classList.add('hidden');
    } else {
        counter--;
        content[counter+1].before.classList.add('hidden');
        content[counter+1].after.classList.add('hidden');
    }
    content[counter].before.classList.remove('hidden');
    content[counter].after.classList.remove('hidden');
    $beforeAfterTitle.textContent = content[counter].title;
    $beforeAfterDescription.textContent = content[counter].description;
}

$arrowLeft.addEventListener('click', previousSlide);
$arrowRight.addEventListener('click', nextSlide);

// Change nav style on scroll

const $header = document.querySelector("header");
const $nav = document.querySelector("nav");

const headerOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            $nav.classList.add('scrolled');
        } else {
            $nav.classList.remove('scrolled');
        }
    })
}, headerOptions);

headerObserver.observe($header);