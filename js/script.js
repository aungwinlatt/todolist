let i = 1;
let minTextLength = 3;
let getInputList = document.getElementById("inputText");
let getOutputList = document.getElementById("outputList");

const textFilter = (x) => {
  if (x) {
    if (x.length >= minTextLength) {
      return x;
    } else {
      alert("Min Text Length 3");
      return false;
    }
  } else {
    alert("Input Text Empty");
    return false;
  }
};

const showList = (text) => {
  getOutputList.innerHTML += `   <li class="list-item" id="listItem${i}">
        <span id="spanText${i}">${text}</span>
        <button class="del-btn" onclick='deleteList(${i})''><i class="far fa-trash-alt fa-lg"></i></button>
        <button class="edit-btn" onclick='editList(${i})'><i class="far fa-edit fa-lg."></i></button>
      </li>`;
  i++;
};
const deleteList = (listId) => {
  let currentItem = document.getElementById(`listItem${listId}`);
  let currentText = document.getElementById(`spanText${listId}`).innerHTML;
  let deleteConfirm = confirm(`Are You Sure To Delete List '${currentText}'`);
  if (deleteConfirm) {
    getOutputList.removeChild(currentItem);
  } else {
    console.log("Delete Cancel");
  }
};

const editList = (listId) => {
  let current = document.getElementById(`spanText${listId}`);
  let newText = prompt("Say Something", current.innerHTML);
  if (textFilter(newText)) {
    current.innerHTML = newText;
  }
};

const pressBtn = () => {
  //   get data
  let inputTextValue = textFilter(getInputList.value);
  // set data
  if (inputTextValue) {
    showList(inputTextValue);
    console.log(inputTextValue);
    getInputList.value = "";
  }
};
