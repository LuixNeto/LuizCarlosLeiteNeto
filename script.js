document.getElementById("formularioContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
