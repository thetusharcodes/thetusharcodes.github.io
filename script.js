// 1. Particles.js Animation
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#00ffcc" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 3 } }
  }
});

// 2. Typewriter Effect
var typed = new Typed('#typed-text', {
    strings: ["Web Developer.", "Graphic Designer.", "Tech Enthusiast.", "3D Artist."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// 3. Custom Neon Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// 4. Secret Easter Egg 
let secretCode = "";
document.addEventListener('keydown', (e) => {
    secretCode += e.key.toLowerCase();
    if (secretCode.length > 5) secretCode = secretCode.slice(-5);
    
    if (secretCode === "rubik") {
        alert("🔥 Easter Egg Found! Welcome to the Secret Mode!");
        document.body.style.backgroundColor = "#1a0000";
        document.getElementById('particles-js').style.backgroundColor = "#1a0000";
        document.querySelector('.logo').style.color = "#ff0000";
        document.querySelector('.logo').innerText = "HACKED BY TUSHAR";
    }
});
// 5. Scroll Animation (AOS)
AOS.init({
    offset: 120,
    duration: 800, 
    once: false 
});