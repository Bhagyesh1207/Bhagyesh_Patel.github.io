/**
 * Initializes the Particles.js library on the element with ID 'particles-js'.
 * Creates an interactive particle background effect.
 */
function initParticles() {
    // Check if particlesJS is available
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80, // Number of particles
                    "density": {
                        "enable": true,
                        "value_area": 800 // Area density
                    }
                },
                "color": {
                    "value": "#ffffff" // Particle color
                },
                "shape": {
                    "type": "circle", // Shape of particles
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5, // Particle opacity
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3, // Particle size
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true, // Enable lines between particles
                    "distance": 150, // Max distance for lines
                    "color": "#ffffff", // Line color
                    "opacity": 0.4, // Line opacity
                    "width": 1 // Line width
                },
                "move": {
                    "enable": true, // Enable particle movement
                    "speed": 2, // Movement speed
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out", // Behavior when particles leave canvas
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true, // Enable interactivity on hover
                        "mode": "repulse" // Interaction mode (e.g., repulse, grab)
                    },
                    "onclick": {
                        "enable": true, // Enable interactivity on click
                        "mode": "push" // Push particles on click
                    },
                    "resize": true // Adjust particles on window resize
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100, // Distance for repulsion effect
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4 // Number of particles to push on click
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true // Enable retina display support
        });
    } else {
        console.error("particles.js library not loaded.");
    }
}

/**
 * Adds hover effects to elements with the 'highlight' class.
 * Causes them to scale up slightly on mouseover.
 */
function addHighlightHoverEffect() {
    const highlights = document.querySelectorAll(".highlight");
    highlights.forEach(highlight => {
        // Mouse enters the element
        highlight.addEventListener("mouseover", () => {
            highlight.style.transform = "scale(1.1)"; // Scale up
        });
        // Mouse leaves the element
        highlight.addEventListener("mouseout", () => {
            highlight.style.transform = "scale(1)"; // Return to normal size
        });
    });
}

/**
 * Animates the rocket element based on scroll position.
 * The rocket moves up as the user scrolls down.
 */
function animateRocketOnScroll() {
    const rocket = document.getElementById("rocket");
    if (!rocket) {
        console.error("Rocket element not found");
        return; // Exit if rocket element doesn't exist
    }

    window.addEventListener("scroll", function() {
        // Calculate the scrollable height (total height - visible height)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Avoid division by zero if scrollable height is 0
        if (scrollableHeight <= 0) {
            rocket.style.transform = 'translateY(0px)'; // Keep rocket at bottom
            return;
        }

        // Calculate scroll percentage (0 to 1)
        let scrollPercentage = window.scrollY / scrollableHeight;
        scrollPercentage = Math.min(scrollPercentage, 1); // Clamp value between 0 and 1

        // Calculate the vertical distance the rocket should move
        // Moves from bottom (0px) upwards. Adjust 'window.innerHeight + 100' as needed.
        // The '100' adds an offset so it moves further up.
        let moveDistance = -scrollPercentage * (window.innerHeight + rocket.offsetHeight + 20); // Move up relative to viewport height + rocket height + offset

        // Apply the transformation
        rocket.style.transform = `translateY(${moveDistance}px)`;
    });
}

// --- Initialization ---

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {
    initParticles(); // Set up the particle background
    addHighlightHoverEffect(); // Add hover effects to skills
    animateRocketOnScroll(); // Set up the rocket scroll animation
});
