document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.id = "white-transition";
  document.body.appendChild(container);

  const totalBlocks = Math.ceil(window.innerWidth / 60) * Math.ceil(window.innerHeight / 60);
  for (let i = 0; i < totalBlocks; i++) {
    const block = document.createElement("div");
    block.className = "white-block";
    container.appendChild(block);
  }

  const blocks = Array.from(container.children);
  // Shuffle random order
  blocks.sort(() => Math.random() - 0.5);

  let shown = 0;
  const step = 20; // number of blocks per tick
  const interval = setInterval(() => {
    for (let i = 0; i < step && shown < blocks.length; i++, shown++) {
      blocks[shown].style.opacity = 1;
    }
    if (shown >= blocks.length) {
      clearInterval(interval);
      setTimeout(() => {
        container.style.transition = "opacity 0.3s ease-out";
        container.style.opacity = 0;
        setTimeout(() => container.remove(), 400);
      }, 150);
    }
  }, 25);
});
