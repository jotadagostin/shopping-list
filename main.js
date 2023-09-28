let itensList = [];
let editItemA;

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receive-item");
const ulItens = document.getElementById("itens-list");
const ulPurchasedItems = document.getElementById("purchased-itens");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveItens();
  showItem();
  itensInput.focus();
});

function saveItens() {
  const shopItens = itensInput.value;
  const checkDuplicate = itensList.some(
    (element) => element.value.toUpperCase() === shopItens.toUpperCase()
  );

  if (checkDuplicate) {
    alert("This item already exist!");
  } else {
    itensList.push({
      value: shopItens,
      check: false,
    });
  }

  itensInput.value = "";
}

function showItem() {
  ulItens.innerHTML = "";
  ulPurchasedItems.innerHTML = "";

  itensList.forEach((element, index) => {
    if (element.check) {
      ulPurchasedItems.innerHTML += `
      <li class="buy-item is-flex is-justify-content-space-between" data-value="${index}">
      <div>
          <input type="checkbox" checked class="is-clickable" />
          <span class="purchased-itens is-size-5">${element.value}</span>
      </div>
      <div>
          <i class="fa-solid fa-trash is-clickable delet"></i>
      </div>
  </li>
      `;
    } else {
      ulItens.innerHTML += ` <li class="buy-item is-flex is-justify-content-space-between" data-value="${index}">
      <div>
          <input type="checkbox" class="is-clickable" />
          <input type="text" class="is-size-5" value="${element.value}"></input>
      </div>
      <div>
        <button onclick="saveEdition()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button><i class="fa-regular is-clickable fa-pen-to-square edit"></i>
        <i class="fa-solid fa-trash is-clickable delet"></i>

      </div>
     </li>`;
    }
  });
  const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

  inputsCheck.forEach((i) => {
    i.addEventListener("click", (event) => {
      const elementValue =
        event.target.parentElement.parentElement.getAttribute("data-value");
      itensList[elementValue].check = event.target.checked;
      showItem();
    });
  });

  const deleteObjects = document.querySelectorAll(".delet");

  deleteObjects.forEach((i) => {
    i.addEventListener("click", (event) => {
      const elementValue =
        event.target.parentElement.parentElement.getAttribute("data-value");
      itensList.splice(elementValue, 1);
      showItem();
    });
  });

  const editItens = document.querySelectorAll(".edit");

  editItens.forEach((i) => {
    i.addEventListener("click", (event) => {
      editItemA =
        event.target.parentElement.parentElement.getAttribute("data-value");
      showItem();
    });
  });
}

function saveEdition() {
  const editedtItem = document.querySelector(
    `[data-value="${editItemA}"] input[type="text"]`
  );
  // console.log(editedtItem.value);
  itensList[editItemA].value = editedtItem.value;
  console.log(itensList);
  editItemA = -1;
  showItem();
}
