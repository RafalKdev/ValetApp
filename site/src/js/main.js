const valetInput = document.querySelector(".valet__input");
const addBtn = document.querySelector(".valet__btn");
const alertInfo = document.querySelector(".alert__info");
const ulList = document.querySelector(".valet__list");
const liItem = document.querySelectorAll(".valet__item");
const liList = document.getElementsByTagName("li");
const popup = document.querySelector(".popup");
const popupInfo = document.querySelector(".popup__info");
const popupInput = document.querySelector(".popup__input");
const popupAddBtn = document.querySelector(".accept");
const popupDelBtn = document.querySelector(".cancel");
let idNumber = 0;
let editedValet;
const main = () => {
  prepareDOMEvents();
};

const addNewValet = () => {
  if (valetInput.value !== "") {
    idNumber++;
    const newValet = document.createElement("li");
    newValet.classList.add("valet__item");
    newValet.textContent = valetInput.value;
    newValet.setAttribute("id", `valet - ${idNumber}`);
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

const checkClick = (e) => {
  if (e.target.closest("button").classList.contains("complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.closest("button").classList.toggle("completed");
  } else if (e.target.closest("button").classList.contains("edit")) {
    editValet(e);
  } else if (e.target.closest("button").classList.contains("delete")) {
    deleteValet(e);
  }
};
const editValet = (e) => {
  const oldValet = e.target.closest("li").id;
  editedValet = document.getElementById(oldValet);
  popupInput.value = editedValet.firstChild.textContent;

  popup.style.display = "flex";
};
const changeValet = () => {
  if (popupInput.value !== "") {
    editedValet.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
    popupInfo.textContent = "You must enter some text";
  }
};
const deleteValet = (e) => {
  const deleteItem = e.target.closest("li");
  deleteItem.remove();
  if (liList.length === 0) {
    alertInfo.textContent = "There are no valets on the list";
  }
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};
const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewValet);
  ulList.addEventListener("click", checkClick);
  popupAddBtn.addEventListener("click", changeValet);
  popupDelBtn.addEventListener("click", closePopup);
};

document.addEventListener("DOMContentLoaded", main);
