const valetInput = document.querySelector(".valet__input");
const addBtn = document.querySelector(".valet__btn");
const alertInfo = document.querySelector(".alert__info");
const ulList = document.querySelector(".valet__list");
const liItem = document.querySelector(".valet__item");
// let newValet;

const main = () => {
  prepareDOMEvents();
};

const addNewValet = () => {
  if (valetInput.value !== "") {
    const newValet = document.createElement("li");
    newValet.classList.add("valet__item");
    newValet.textContent = valetInput.value;
    ulList.append(newValet);

    createToolsPanel(newValet);

    valetInput.value = "";
    alertInfo.textContent = "";
  } else {
    alertInfo.textContent = "Enter valet information!";
  }
};
const createToolsPanel = (newTools) => {
  const newToolsPanel = document.createElement("div");
  newToolsPanel.classList.add("valet__tools");
  newTools.append(newToolsPanel);
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  newToolsPanel.append(completeBtn, editBtn, deleteBtn);
};
const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewValet);
};

document.addEventListener("DOMContentLoaded", main);
