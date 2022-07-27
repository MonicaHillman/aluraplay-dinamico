import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const visualizacao = Math.floor(Math.random() * 10).toString();
    const imagem = document.querySelector('[data-imagem]').value;

    const lista = {
        url,
        titulo,
        visualizacao,
        imagem
    }

    enviarVideos(lista);

});

async function enviarVideos(lista) {
    try {
        await conectaApi.criaVideos(lista.url, lista.titulo, lista.visualizacao, lista.imagem);
    } catch (e) {
        alert(e)
    }
}