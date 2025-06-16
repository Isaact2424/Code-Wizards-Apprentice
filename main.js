function runCode() {
  const input = document.getElementById("codeInput").value.trim();
  const outputArea = document.getElementById("animation-area");
  const feedback = document.getElementById("feedback");

  outputArea.innerHTML = "";
  feedback.textContent = "";

  if (input === 'print("hello world")') {
    const bridgeText = "hello world";

    for (const letter of bridgeText) {
      const block = document.createElement("div");
      block.textContent = letter;
      block.style.width = "30px";
      block.style.height = "30px";
      block.style.background = "#4c8ef7";
      block.style.color = "#fff";
      block.style.textAlign = "center";
      block.style.lineHeight = "30px";
      block.style.display = "inline-block";
      block.style.marginRight = "3px";
      outputArea.appendChild(block);
    }

    feedback.textContent = "The Word Bridge forms! You may now cross.";
  } else {
    feedback.textContent = 'A bridge starts to form but quickly crumbles. (Hint: try print("hello world"))';
  }
}
