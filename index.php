<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Lista de compras</title>
</head>

<body>
    <!-- Header -->
    <header>
        <div class="container" style="text-align: center;">
            <h1>Lista de Compras</h1>
        </div>
    </header>

    <div class="container" style="padding: 0 50px;">
        <div class="col-sm-6 addProduct">
            <form id="myList" style="flex-direction: row; justify-content: center; text-align: center; flex-wrap: nowrap;">
                <span id="successMessage">Item adicionado! </span>
                <input type="text" id="ProduName" class="inputProduct" placeholder="Nome do produto" required>

                <input type="number" step="0.10" id="uniPrice" class="inputProduct" placeholder="Preço Unid." required>
                <input type="number" step="0.01" id="quanti" class="inputProduct" placeholder="Quantidade" min="1" required>
                <input type="number" id="totalPrice" class="inputProduct" placeholder="Preço Total." disabled>
            </form><br>
            <button id="addItem">Adicionar item</button>
        </div>
    </div>

    <div id="list" style="padding: 20px;">
        <div class="col-sm-6" style="display: flex; justify-content: center; padding-top: 20px;">
            <table id="listHeader" style="text-align: center;">
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Preço total</th>
                </tr>
                <tr style="text-align: center;">
                    <td> • </td>
                    <td> • </td>
                    <td> • </td>
                    <td> • </td>
                </tr>
            </table>
        </div>
    </div>


    <script src="addDadosLista.js"></script>
    <script src="precosForm.js"></script>
</body>

</html>