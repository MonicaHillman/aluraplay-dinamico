import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (evento) => {
    enviarVideos(evento);
});

async function enviarVideos(evento) {
    evento.preventDefault();

    let url = document.querySelector('[data-url]').value;
    let titulo = document.querySelector('[data-titulo]').value;
    let visualizacao = Math.floor(Math.random() * 10).toString();
    let imagem = document.querySelector('[data-imagem]').value;

    try {
        await conectaApi.criaVideos(url, titulo, visualizacao, imagem);
    } catch (e) {
        alert(e)
    }

}
