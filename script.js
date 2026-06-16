let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let icone = document.getElementById('icone');
let segundos = 0;

setInterval(() => {
    segundos++;
    document.getElementById("tempo").textContent = segundos + "s";
}, 1000);

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        icone.classList.remove('bi-brightness-high-fill');
        icone.classList.add('bi-moon-fill');
    } else {
        icone.classList.remove('bi-moon-fill');
        icone.classList.add('bi-brightness-high-fill');
    }

const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const dados = new FormData(form);

        fetch("enviar.php", {
            method: "POST",
            body: dados
        })
        .then(response => response.text())
        .then(texto => {
            resposta.textContent = texto;
            resposta.style.color = "#3ef7ed";
            form.reset();
        })
        .catch(() => {
            resposta.textContent = "Erro ao enviar a mensagem.";
            resposta.style.color = "red";
        });
    });
}

})