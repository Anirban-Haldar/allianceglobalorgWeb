// Hide preloader
window.addEventListener('load', () => { 
    document.getElementById('preloader').style.opacity = '0'; 
    setTimeout(() => { 
        document.getElementById('preloader').style.display = 'none'; 
    }, 500); 
});
  
AOS.init({ duration: 1000, once: true, offset: 120 });
  
// Hero swiper
new Swiper('.hero-swiper', {
    loop: true, 
    autoplay: { delay: 4800, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});
  
new Swiper('.testimonial-swiper', {
    loop: true, 
    autoplay: { delay: 4500 }, 
    slidesPerView: 1, 
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2.5 } },
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 20 
});
  
// animated counters
const counters = document.querySelectorAll('.counter-num');
let started = false;

function startCounters() {
    counters.forEach(c => { 
        const update = () => { 
            const target = +c.getAttribute('data-target');
            let curr = +c.innerText; 
            let step = target / 45; 
            
            if(curr < target) {
                c.innerText = Math.ceil(curr + step);
                setTimeout(update, 25);
            } else c.innerText = target;
        };
        update(); 
    });
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !started) {
            started = true; startCounters();
        }
    });
}, { threshold: 0.4 });

counterObserver.observe(document.querySelector('.counter-box'));
  
// back to top + navbar scroll
window.addEventListener('scroll', () => {
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 500); 
    document.querySelector('.navbar-premium').classList.toggle('scrolled', window.scrollY > 80); 
});
  
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) { 
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
});
  
// dark/light mode toggle (dynamic)
const darkToggle = document.getElementById('darkModeToggle');
  
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); 
    if(document.body.classList.contains('light-mode')){
        document.body.style.background = '#f8f9fc';
        document.body.style.color = '#1e2a32';
        document.querySelectorAll('.service-card, .product-card, .glass-card, .contact-form, .testi-card').forEach(el => el.style.background = 'white');
    } else { 
        document.body.style.background = '#0a0c10';
        document.body.style.color = '#eef2f5'; 
        document.querySelectorAll('.service-card, .product-card, .glass-card, .contact-form, .testi-card').forEach(el => el.style.background = '');
    }
});
