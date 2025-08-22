# Rewards & Recognitions

## Overview

At Accionlabs, we believe in celebrating excellence and acknowledging the outstanding contributions of our team members. Our Rewards & Recognitions program showcases the exceptional achievements and client appreciation received by our teams.

These awards represent direct recognition from our clients, highlighting exceptional service delivery, technical excellence, and the significant impact our team members have made on their projects.

## 🏆 Customer Appreciation Awards & Team Recognition

<div class="rewards-carousel-container">
    <div class="carousel-wrapper">
        <div class="carousel-main">
            <div class="carousel-slide active" data-slide="1">
                <img src="../assets/media/reward-1.png" alt="Azira Customer Appreciation" loading="lazy">
                <div class="slide-caption">
                    <h4>Azira - Customer Appreciation</h4>
                    <p>Team recognition for engineering excellence and dedicated support</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="2">
                <img src="../assets/media/reward-2.png" alt="CodaMetrix Customer Appreciation" loading="lazy">
                <div class="slide-caption">
                    <h4>CodaMetrix - Customer Appreciation</h4>
                    <p>Kore Project Team recognition for security excellence</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="3">
                <img src="../assets/media/reward-3.png" alt="ABS Customer Appreciation - Ganesh" loading="lazy">
                <div class="slide-caption">
                    <h4>ABS - Customer Appreciation</h4>
                    <p>Individual excellence recognition for Ganesh Ghuge</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="4">
                <img src="../assets/media/reward-4.png" alt="Team Marvel Award - LeadVenture PSM" loading="lazy">
                <div class="slide-caption">
                    <h4>Team Marvel Award - LeadVenture PSM</h4>
                    <p>Performance enhancement excellence recognition</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="5">
                <img src="../assets/media/reward-5.png" alt="Team Marvel Award - LeadVenture Ignition" loading="lazy">
                <div class="slide-caption">
                    <h4>Team Marvel Award - LeadVenture Ignition</h4>
                    <p>Platform development excellence recognition</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="6">
                <img src="../assets/media/reward-6.png" alt="Veracode Customer Appreciation - Mabub" loading="lazy">
                <div class="slide-caption">
                    <h4>Veracode - Customer Appreciation</h4>
                    <p>IT Operations excellence recognition for Mabub</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="7">
                <img src="../assets/media/reward-7.png" alt="Magnifact Customer Appreciation" loading="lazy">
                <div class="slide-caption">
                    <h4>Magnifact - Customer Appreciation</h4>
                    <p>GenAI implementation excellence recognition</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="8">
                <img src="../assets/media/reward-8.png" alt="Azira Customer Appreciation - Mrinal" loading="lazy">
                <div class="slide-caption">
                    <h4>Azira - Customer Appreciation</h4>
                    <p>Individual excellence recognition for Mrinal Pandey</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="9">
                <img src="../assets/media/reward-9.png" alt="Neighbourly Software Customer Appreciation" loading="lazy">
                <div class="slide-caption">
                    <h4>Neighbourly Software - Customer Appreciation</h4>
                    <p>Team excellence and project recovery recognition</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="10">
                <img src="../assets/media/reward-10.png" alt="Veracode Customer Appreciation - Pushpa" loading="lazy">
                <div class="slide-caption">
                    <h4>Veracode - Customer Appreciation</h4>
                    <p>QE excellence recognition for Pushpa Angadi</p>
                </div>
            </div>
            
            <div class="carousel-slide" data-slide="11">
                <img src="../assets/media/reward-11.png" alt="Rotary Customer Appreciation" loading="lazy">
                <div class="slide-caption">
                    <h4>Rotary - Customer Appreciation</h4>
                    <p>Multi-team collaboration excellence recognition</p>
                </div>
            </div>
        </div>
        
        <div class="carousel-controls">
            <button class="carousel-btn prev-btn" onclick="changeSlide(-1)">
                <span>‹</span>
            </button>
            <button class="carousel-btn next-btn" onclick="changeSlide(1)">
                <span>›</span>
            </button>
        </div>
        
        <div class="carousel-indicators">
            <span class="indicator active" onclick="currentSlide(1)"></span>
            <span class="indicator" onclick="currentSlide(2)"></span>
            <span class="indicator" onclick="currentSlide(3)"></span>
            <span class="indicator" onclick="currentSlide(4)"></span>
            <span class="indicator" onclick="currentSlide(5)"></span>
            <span class="indicator" onclick="currentSlide(6)"></span>
            <span class="indicator" onclick="currentSlide(7)"></span>
            <span class="indicator" onclick="currentSlide(8)"></span>
            <span class="indicator" onclick="currentSlide(9)"></span>
            <span class="indicator" onclick="currentSlide(10)"></span>
            <span class="indicator" onclick="currentSlide(11)"></span>
        </div>
        
        <div class="carousel-info">
            <span class="slide-counter">1 / 11</span>
            <button class="fullscreen-btn" onclick="toggleFullscreen()">⛶</button>
        </div>
    </div>
</div>

<style>
.rewards-carousel-container {
    max-width: 1000px;
    margin: 30px auto;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    position: relative;
}

.carousel-wrapper {
    position: relative;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.carousel-main {
    position: relative;
    height: 700px;
    overflow: hidden;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}

.carousel-slide.active {
    opacity: 1;
    transform: translateX(0);
}

.carousel-slide.prev {
    transform: translateX(-100%);
}

.carousel-slide img {
    width: 100%;
    height: 600px;
    object-fit: contain;
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
}

.slide-caption {
    padding: 16px 24px;
    background: white;
    flex-grow: 1;
    text-align: center;
}

.slide-caption h4 {
    margin: 0 0 8px 0;
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
}

.slide-caption p {
    margin: 0;
    color: #6c757d;
    font-size: 0.9rem;
    line-height: 1.4;
}

.carousel-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    pointer-events: none;
}

.carousel-btn {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.9);
    color: #2c3e50;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.carousel-btn:hover {
    background: white;
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}

.carousel-indicators {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 8px;
    background: #f8f9fa;
    flex-wrap: wrap;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #dee2e6;
    cursor: pointer;
    transition: all 0.3s ease;
}

.indicator.active {
    background: #667eea;
    transform: scale(1.2);
}

.indicator:hover {
    background: #764ba2;
}

.carousel-info {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
}

.fullscreen-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background 0.3s ease;
}

.fullscreen-btn:hover {
    background: rgba(255,255,255,0.2);
}

@media (max-width: 768px) {
    .rewards-carousel-container {
        margin: 16px;
        padding: 16px;
    }
    
    .carousel-main {
        height: 500px;
    }
    
    .carousel-slide img {
        height: 420px;
    }
    
    .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
    
    .carousel-indicators {
        padding: 16px;
        gap: 6px;
    }
    
    .indicator {
        width: 10px;
        height: 10px;
    }
}
</style>

<script>
let currentSlideIndex = 1;
const totalSlides = 11;

function changeSlide(direction) {
    const currentSlide = document.querySelector('.carousel-slide.active');
    const currentIndicator = document.querySelector('.indicator.active');
    
    currentSlide.classList.remove('active');
    currentIndicator.classList.remove('active');
    
    currentSlideIndex += direction;
    
    if (currentSlideIndex > totalSlides) {
        currentSlideIndex = 1;
    } else if (currentSlideIndex < 1) {
        currentSlideIndex = totalSlides;
    }
    
    const newSlide = document.querySelector(`[data-slide="${currentSlideIndex}"]`);
    const newIndicator = document.querySelectorAll('.indicator')[currentSlideIndex - 1];
    
    newSlide.classList.add('active');
    newIndicator.classList.add('active');
    
    updateSlideCounter();
}

function currentSlide(slideIndex) {
    const currentSlide = document.querySelector('.carousel-slide.active');
    const currentIndicator = document.querySelector('.indicator.active');
    
    currentSlide.classList.remove('active');
    currentIndicator.classList.remove('active');
    
    currentSlideIndex = slideIndex;
    
    const newSlide = document.querySelector(`[data-slide="${slideIndex}"]`);
    const newIndicator = document.querySelectorAll('.indicator')[slideIndex - 1];
    
    newSlide.classList.add('active');
    newIndicator.classList.add('active');
    
    updateSlideCounter();
}

function updateSlideCounter() {
    const counter = document.querySelector('.slide-counter');
    counter.textContent = `${currentSlideIndex} / ${totalSlides}`;
}

function toggleFullscreen() {
    const carousel = document.querySelector('.carousel-wrapper');
    if (!document.fullscreenElement) {
        carousel.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-main').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel-main').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        changeSlide(1); // Swipe left - next slide
    }
    if (touchEndX > touchStartX + 50) {
        changeSlide(-1); // Swipe right - previous slide
    }
}
</script>

## 🌟 Recognition Impact

Our recognition program showcases:

- **Client Satisfaction**: Direct appreciation from our valued clients
- **Technical Excellence**: Recognition for outstanding technical contributions
- **Team Collaboration**: Celebrating exceptional teamwork and partnership
- **Innovation**: Acknowledgment of creative solutions and implementations
- **Leadership**: Honoring exceptional guidance and mentorship

---

*These awards reflect our collective commitment to delivering exceptional value and building lasting partnerships with our clients.*