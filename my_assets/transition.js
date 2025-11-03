// my_assets/transition.js
// Handles the chunky black grid wipe on navigation

document.addEventListener("DOMContentLoaded", () => {
  // Build overlay once per page
  const overlay = document.createElement("div");
  overlay.id = "transition-overlay";
  document.body.appendChild(overlay);

  const cols = 16, rows = 12;
  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "block";
    overlay.appendChild(cell);
  }

  // Function to trigger the wipe, then navigate
  function playWipeAndNavigate(targetUrl) {
    const blocks = Array.from(overlay.children);
    overlay.style.pointerEvents = "auto"; // prevent clicking during transition

    blocks.forEach(block => {
      const delay = Math.random() * 400; // fast, random blink
      setTimeout(() => (block.style.opacity = "1"), delay);
    });

    // After the animation completes, navigate
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // slightly longer than max delay
  }

  // Intercept clicks on any <a data-transition> element
  document.querySelectorAll("a[data-transition]").forEach(link => {
    link.addEventListener("click", evt => {
      evt.preventDefault();
      const url = link.getAttribute("href");
      playWipeAndNavigate(url);
    });
  });
});
