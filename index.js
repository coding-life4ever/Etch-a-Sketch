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

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const newSize = prompt("Enter new grid size (max 100):");
  allDivs.forEach(div => {
    div.style.backgroundColor = "lightgray";
  });
  if (newSize > 0 && newSize <= 100) {
    containerDiv.innerHTML = ""; 
    for (let row = 0; row < newSize; row++) {
      for (let col = 0; col < newSize; col++) {
        const div = document.createElement("div");
        div.classList.add("divClass");
        containerDiv.appendChild(div);
        const squareSize = 500 / newSize;
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
      }
    }
      const allDivs = document.querySelectorAll(".divClass");
      allDivs.forEach(div => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
    })
    const clearButton = document.querySelector(".reset");
clearButton.addEventListener("click", () => {
  allDivs.forEach(div => {
    div.style.backgroundColor = "lightgray";
  });
});
  } else { 
    alert("Please enter a valid number between 1 and 100.");
  }
})


const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", () => {
  const newSize = prompt("Enter new grid size (max 100):");
  allDivs.forEach(div => {
    div.style.backgroundColor = "lightgray";
  });
  if (newSize > 0 && newSize <= 100) {
    containerDiv.innerHTML = ""; 
    for (let row = 0; row < newSize; row++) {
      for (let col = 0; col < newSize; col++) {
        const div = document.createElement("div");
        div.classList.add("divClass");
        containerDiv.appendChild(div);
        const squareSize = 500 / newSize;
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
      }
    }
    const allDivs = document.querySelectorAll(".divClass");
      allDivs.forEach(div => {
      div.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = `#${randomColor}`;
      }
      );
    }
    )
    const clearButton = document.querySelector(".reset");
clearButton.addEventListener("click", () => {
  allDivs.forEach(div => {
    div.style.backgroundColor = "lightgray";
  });
});
  }
});


// Clear button
const clearButton = document.querySelector(".reset");
clearButton.addEventListener("click", () => {
  allDivs.forEach(div => {
    div.style.backgroundColor = "lightgray";
  });
});

