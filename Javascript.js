
const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    });



    
    const slides = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalSlides = indicators.length;

    const updateActiveIndicator = () => {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    };

    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveIndicator();
    };

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateActiveIndicator();
        });
    });

    setInterval(moveToNextSlide, 5000); // Auto-slide every 5 seconds

    updateActiveIndicator();


document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} TopEdge Designs`;

