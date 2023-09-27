let itensList = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receive-item");
const ulItens = document.getElementById("itens-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveItens();
  showItem();
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
    });
  }

  console.log(itensList);
}

function showItem() {
  ulItens.innerHTML = "";
  itensList.forEach((element, index) => {
    ulItens.innerHTML += ` <li class="buy-item is-flex is-justify-content-space-between" data-value="${index}">
    <div>
        <input type="checkbox" class="is-clickable" />
        <input type="text" class="is-size-5" value="${element.value}"></input>
    </div>
    <div>
        <i class="fa-solid fa-trash is-clickable deletar"></i>
    </div>
</li>`;
  });
}
