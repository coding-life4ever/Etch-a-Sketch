// Create a grid of divs
const containerDiv = document.querySelector(".container");
for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    const div = document.createElement("div");
    div.classList.add("divClass");
    containerDiv.appendChild(div);
    
  }
}


// Hover Effect
const allDivs = document.querySelectorAll(".divClass");
allDivs.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
})
