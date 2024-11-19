8081426113
// Change welcome text dynamically
const welcomeText = document.getElementById('welcome-text');
welcomeText.addEventListener('mouseover', () => {
    welcomeText.textContent = "Glad to Have You Here!";
});
welcomeText.addEventListener('mouseout', () => {
    welcomeText.textContent = "Welcome to My Portfolio";
});

// Smooth scrolling to the projects section
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetSection = document.querySelector('#projects');
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    }
});

// Add hover effect to highlight boxes dynamically
const aboutBoxes = document.querySelectorAll('.about-box');

aboutBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.1)';
        box.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});

// Add dynamic typing effect for "Welcome to My Portfolio" header
const typingText = document.querySelector('.about-box.box1 h2');
let typingTextContent = "Welcome to My Portfolio";
let typingIndex = 0;

function typeEffect() {
    if (typingIndex < typingTextContent.length) {
        typingText.textContent += typingTextContent.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeEffect, 100); // Adjust typing speed
    }
}
typeEffect();

// Add fade-in animation on scroll for each box
const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing once element is visible
        }
    });
};

const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2, // Trigger when 20% of the element is visible
});

aboutBoxes.forEach((box) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Smooth scrolling for the "Get in Touch" button
const contactButton = document.querySelector('.cta-button');
contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
});

// Add glowing effect to the "Get in Touch" button on hover
contactButton.addEventListener('mouseover', () => {
    contactButton.style.boxShadow = '0 0 15px #ffbc00';
    contactButton.style.transition = 'box-shadow 0.3s ease';
});
contactButton.addEventListener('mouseout', () => {
    contactButton.style.boxShadow = 'none';
});

// Select all education boxes
const educationBoxes = document.querySelectorAll('.education-image-box');

// Add hover effect to each education box
educationBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});

// Add fade-in animation on scroll for education boxes
const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
};

const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2, // Trigger when 20% of the element is visible
});

educationBoxes.forEach((box) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Highlight the year on hover
educationBoxes.forEach((box) => {
    const yearSpan = box.querySelector('.education-year');
    box.addEventListener('mouseover', () => {
        yearSpan.style.color = '#ffbc00';
        yearSpan.style.fontWeight = 'bold';
    });
    box.addEventListener('mouseout', () => {
        yearSpan.style.color = '';
        yearSpan.style.fontWeight = '';
    });
});

// Select all certificate boxes
const certificateBoxes = document.querySelectorAll('.certificate-box');

// Add smooth hover effect to each certificate box
certificateBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease';
        box.style.filter = 'brightness(1.1)';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
        box.style.filter = 'brightness(1)';
    });
});

// Add fade-in animation on scroll for certificate boxes
const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
};

const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2, // Trigger when 20% of the element is visible
});

certificateBoxes.forEach((box) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Highlight and flip certificate box on click
certificateBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        // Remove flip and highlight from all boxes
        certificateBoxes.forEach((b) => b.classList.remove('flipped', 'highlighted'));
        
        // Add flip effect to the clicked box
        box.classList.add('flipped');
        
        // Add highlight effect
        box.classList.add('highlighted');

        // Smooth scroll to the details section
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

// Add CSS for flip, highlighted, and pulse effects
const style = document.createElement('style');
style.innerHTML = `
    .certificate-box {
        perspective: 1000px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .certificate-box.flipped {
        transform: rotateY(180deg);
    }

    .certificate-box.highlighted {
        border: 2px solid #ffbc00;
        background-color: rgba(255, 188, 0, 0.1);
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        animation: pulse 1.5s infinite;
    }

    .certificate-box .certificate-text {
        transition: opacity 0.3s ease;
        opacity: 1;
    }

    .certificate-box.flipped .certificate-text {
        opacity: 0;
    }

    .certificate-box .certificate-details {
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    .certificate-box.flipped .certificate-details {
        opacity: 1;
    }

    .certificate-box .tooltip {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 10;
        transition: opacity 0.3s ease;
    }

    .certificate-box:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

    @keyframes pulse {
        0% {
            transform: scale(1.05);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Add tooltips to each certificate box
certificateBoxes.forEach((box) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Click to view details!';
    box.appendChild(tooltip);
});

// Internship Section: Fade-in Animation on Scroll
const internshipSection = document.getElementById('internship');
const internshipCard = document.querySelector('.internship-card');

// Intersection Observer for fade-in effect
const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
};

// Observer options
const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2, // Trigger when 20% of the element is visible
});

// Initially set the internship card opacity to 0 for fade-in effect
internshipCard.style.opacity = '0';
internshipCard.style.transform = 'translateY(50px)';
internshipCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

// Observe the internship card for fade-in effect
observer.observe(internshipCard);

// Add fade-in class for animation
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Background video control: Pause video when user scrolls past it
const videoElement = internshipSection.querySelector('video');
let hasPlayed = false;

window.addEventListener('scroll', () => {
    const sectionPosition = internshipSection.getBoundingClientRect();
    // If the section is in the viewport and the video has not played, play it
    if (sectionPosition.top <= window.innerHeight && !hasPlayed) {
        videoElement.play();
        hasPlayed = true;
    } else if (sectionPosition.top > window.innerHeight) {
        // Pause video when scrolling past the section
        videoElement.pause();
    }
});

// Smooth Scroll to Internship Section on Button Click (Optional)
const internshipButton = document.querySelector('#go-to-internship-btn');
if (internshipButton) {
    internshipButton.addEventListener('click', (e) => {
        e.preventDefault();
        internshipSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}


