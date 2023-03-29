// Seleciona os campos de entrada de preço unitário e quantidade
var unitPriceField = document.getElementById("uniPrice");
var quantityField = document.getElementById("quanti");

// Adiciona um ouvinte de evento de mudança de valor para cada campo
unitPriceField.addEventListener("input", updateTotalPrice);
quantityField.addEventListener("input", updateTotalPrice);

// Função para atualizar o preço total com base no preço unitário e na quantidade
function updateTotalPrice() {
  // Seleciona o campo de entrada de preço total
  var totalPriceField = document.getElementById("totalPrice");

  // Obtém os valores atuais do preço unitário e da quantidade
  var unitPrice = Number(unitPriceField.value);
  var quantity = Number(quantityField.value);

  // Calcula o preço total multiplicando o preço unitário pela quantidade
  var totalPrice = unitPrice * quantity;

  // Define o valor do campo de entrada de preço total como o novo preço total calculado
  totalPriceField.value = totalPrice;
  console.log(typeof unitPrice);
  console.log(typeof quantity);
}

// Seleciona o botão "Adicionar item"
var addItemBtn = document.getElementById("addItem");

// Adiciona um ouvinte de evento de clique ao botão
addItemBtn.addEventListener("click", function () {
  // Seleciona os valores digitados nos campos de entrada
  var productName = document.getElementById("ProduName").value;
  var unitPrice = unitPriceField.value;
  var quantity = quantityField.value;
  var totalPrice = unitPrice * quantity;

  // Cria uma nova linha para a tabela
  var newRow = document.createElement("tr");

  // Adiciona células à nova linha com os valores inseridos pelo usuário
  newRow.innerHTML =
    "<td>" +
    productName +
    "</td><td>" +
    "€ " +
    unitPrice +
    "</td><td>" +
    quantity +
    "</td><td>" +
    "€ " +
    totalPrice +
    "</td><td><button class='deleteBtn'>Excluir</button></td><td><button class='editBtn'>Editar</button></td>";

  //Exibir mensagem de sucesso ao add item
  function showSuccessMessage() {
    document.getElementById("successMessage").style.display = "block";
    setTimeout(function showSuccessMessage() {
      document.getElementById("successMessage").style.display = "none";
    }, 2000);
  }
  showSuccessMessage();

  // Seleciona a tabela de itens
  var itemList = document.getElementById("listHeader");

  // Adiciona a nova linha à tabela de itens
  itemList.appendChild(newRow);

  // Seleciona os botões "Excluir" e "Editar" para a nova linha
  var deleteBtn = newRow.querySelector(".deleteBtn");
  var editBtn = newRow.querySelector(".editBtn");

  // Adiciona um ouvinte de evento de clique para o botão "Excluir"
  deleteBtn.addEventListener("click", function () {
    // Remove a linha correspondente da tabela
    newRow.remove();
  });

  // Adiciona um ouvinte de evento de clique para o botão "Editar"
  editBtn.addEventListener("click", function () {
    // Define os valores dos campos de entrada como os valores da linha correspondente
    document.getElementById("ProduName").value = productName;
    unitPriceField.value = unitPrice;
    quantityField.value = quantity;

    // Calcula o preço total com base nos novos valores de preço unitário e quantidade
    updateTotalPrice();

    // Remove a linha correspondente da tabela
    newRow.remove();
  });

  // Limpa os valores dos campos de entrada
  document.getElementById("ProduName").value = "";
  unitPriceField.value = "";
  quantityField.value = "";
  document.getElementById("totalPrice").value = "";
});
