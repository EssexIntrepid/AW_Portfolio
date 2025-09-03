const lines = [
    "Initializing Portfolio system...",
    "Loading modules...",
    "Starting code...",
    "Oh it broke...",
    "...",
    "Piece of sh-",
    "Oh it fixed itself",
    "Starting code again...",
    "System ready."
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
        setTimeout(typeChar, 35); // typing speed
      } else {
        consoleText.textContent += "\n"; // new line
        lineIndex++;
        charIndex = 0;
        setTimeout(typeChar, 250); // pause before next line
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