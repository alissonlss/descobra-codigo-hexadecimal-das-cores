// muda o tema
window.onload = function () {
    const btnTema = document.getElementById("mudaTema");

    btnTema?.addEventListener("change", function setTheme() {
        document.body.classList.toggle("dark-mode");
    })
}

// retorna o cor selecionada
function corEscolhida(){
    let resultado = document.getElementById("result");
    let cor = document.getElementById("corEscolhida").value;

    let out = "<p><strong>Código:</strong> "+ cor +"</p>" + "<button type='submit' onclick='copiarTexto()'>Copiar</button>"
    resultado.innerHTML = out;
}

//copia texto
function copiarTexto(){
    let textoCopiado = document.getElementById("corEscolhida").value;

    navigator.clipboard.writeText(textoCopiado);
}