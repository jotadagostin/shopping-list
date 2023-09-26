let itensList = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receive-item");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveItens();
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
