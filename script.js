const divs = document.querySelectorAll("div[id^='div']");

let draggedId = "";

divs.forEach(div => {
  div.setAttribute("draggable", true);

  div.addEventListener("dragstart", function (e) {
    draggedId = this.id;
    e.dataTransfer.setData("text/plain", this.id);
  });

  div.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  div.addEventListener("drop", function (e) {
    e.preventDefault();

    const targetId = this.id;

    if (draggedId !== targetId) {
      const draggedEl = document.getElementById(draggedId);
      const targetEl = document.getElementById(targetId);

      const temp = draggedEl.style.backgroundImage;
      draggedEl.style.backgroundImage = targetEl.style.backgroundImage;
      targetEl.style.backgroundImage = temp;
    }
  });
});