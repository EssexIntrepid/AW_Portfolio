const lines = [
    "Initializing Portfolio system...",
    "Loading modules...",
    "Starting code...",
    "Oh it broke...",
    "...",
    "Piece of sh-",
    "Oh it fixed itself",
    "Starting code again...",
    "System ready.",
    "Press ENTER when ready (:"
  ];

  const consoleText = document.getElementById("console-text");
  const cursor = document.querySelector(".cursor");
  const enterText = document.getElementById("enter-text");
  const bootScreen = document.getElementById("boot-screen");

  let lineIndex = 0;
  let charIndex = 0;

  function typeChar() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        consoleText.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeChar, 1); // typing speed
      } else {
        consoleText.textContent += "\n"; // new line
        lineIndex++;
        charIndex = 0;
        setTimeout(typeChar, 2); // pause before next line
      }
    } else {
      // Done typing
      enterText.style.display = "block";
      // Waiting for Enter
      document.addEventListener("keydown", function handler(e) {
        if (e.key === "Enter") {
          bootScreen.style.display = "none";
          document.removeEventListener("keydown", handler);
        }
      });
    }
  }

  typeChar();

// Dark theme/Light theme things
  const toggleBtn = document.getElementById("Toggle-Theme");
  const body = document.body;

  toggleBtn.addEventListener("click",() =>{
    body.classList.toggle("darkmode");
  } )

  // Reveal sections on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run on load
