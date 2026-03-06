// Dark Mode Toggle and Counter Animations

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    console.log(`Switched to ${currentMode} mode`);
}

// Counter Animation Function
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100;
    const intervalId = setInterval(() => {
        count += increment;
        element.textContent = Math.round(count);
        if (count >= target) {
            clearInterval(intervalId);
        }
    }, 20);
}

// Example usage:
// document.getElementById('dark-mode-toggle').onclick = toggleDarkMode;
// animateCounter(document.getElementById('counter'), 1000);