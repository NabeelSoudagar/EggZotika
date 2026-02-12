import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in and slide up element
export const slideUp = (element, delay = 0) => {
    gsap.fromTo(element,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Trigger when top of element hits 85% of viewport height
                toggleActions: "play none none reverse"
            }
        }
    );
};

// Fade in element
export const fadeIn = (element, delay = 0) => {
    gsap.fromTo(element,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1.5,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
};

// Stagger children elements (e.g., list items, cards)
export const staggerChildren = (elements, delay = 0) => {
    gsap.fromTo(elements,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Time between each element's start
            delay: delay,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: elements[0], // Trigger based on the first element
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
};

// Slide in from left
export const slideInLeft = (element, delay = 0) => {
    gsap.fromTo(element,
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
};

// Slide in from right
export const slideInRight = (element, delay = 0) => {
    gsap.fromTo(element,
        {
            opacity: 0,
            x: 100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
};
