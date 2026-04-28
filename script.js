//your code here
const divs = document.querySelectorAll(".container div");

let draggedId = null;

divs.forEach(div => {
  div.addEventListener("dragstart", (e) => {
    draggedId = e.target.id;
  });

  div.addEventListener("dragover", (e) => {
    e.preventDefault(); // required
  });

  div.addEventListener("drop", (e) => {
    e.preventDefault();

    const targetId = e.target.id;

    if (draggedId !== targetId) {
      const draggedEl = document.getElementById(draggedId);
      const targetEl = document.getElementById(targetId);

     
      const temp = draggedEl.style.backgroundImage;
      draggedEl.style.backgroundImage = targetEl.style.backgroundImage;
      targetEl.style.backgroundImage = temp;
    }
  });
});