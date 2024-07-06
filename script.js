document.addEventListener('DOMContentLoaded', () => {
    // Simplify event handling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Text reveal animation
    const lines = [
        "Hi, I'm",
        "Faiaz Hossain",
        "A Fullstack Web Developer",
        "I'm passionate about crafting seamless and visually appealing web experiences. Let's build something amazing together!"
    ];

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let interval;

    function typeText() {
        const currentLine = lines[currentLineIndex];
        const lineSpan = document.getElementById(`line${currentLineIndex + 1}`);

        lineSpan.textContent += currentLine[currentCharIndex];
        currentCharIndex++;

        if (currentCharIndex === currentLine.length) {
            clearInterval(interval); // Stop typing when all characters are typed
            currentCharIndex = 0;
            currentLineIndex++;

            if (currentLineIndex < lines.length) {
                setTimeout(() => {
                    interval = setInterval(typeText, 30); // Typing speed (milliseconds)
                }, 1000); // Delay before typing the next line (milliseconds)
            }
        }
    }

    interval = setInterval(typeText, 0); // Start typing
});
