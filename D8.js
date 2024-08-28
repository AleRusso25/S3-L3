const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
  attachComplete();
};

const addTask = function () {
  let tasks = document.querySelector("#tasks");
  let inputField = document.querySelector("#container2 input");
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;
  tasks.innerHTML += container2;
  inputField.value = "";
};

const attachComplete = function () {
  let allTasks = document.querySelectorAll(".task");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};
