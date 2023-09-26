let itensList = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receive-item");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveItens();
});

function saveItens() {
  const shopItens = itensInput.value;

  itensList.push({
    value: shopItens,
  });

  console.log(itensList);
}
