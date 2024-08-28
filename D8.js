const addButton = document.getElementById("task-button");
const liMaker = function () {
  const input = document.getElementById("task-input");
  const inputValue = input.value;
  if (inputValue !== " ") {
    const li = document.createElement("li");
    li.innerText = inputValue;
    li.onclick = function (event) {
      event.currentTarget.style.textDecoration = "line-through";
    };
    const delButton = document.createElement("button");
    delButton.classList.add("task-delete");
    delButton.innerText = "🗑";
    delButton.onclick = function (event) {
      event.currentTarget.parentNode.remove();
    };
    delButton.addEventListener("click", function () {
      li.remove;
    });
    li.appendChild(delButton);
    li.addEventListener("click", function () {
      li.classList.toggle("strike");
    });
    const ol = document.getElementById("task-list");
    ol.appendChild(li);
  } else {
    alert("devi compilare il campo");
    input.focus();
  }
};
addButton.addEventListener("click", liMaker);
