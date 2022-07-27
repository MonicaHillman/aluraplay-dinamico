import { conectaApi } from "./conectaApi.js";

function constroiCard(url, titulo, imagem, descricao) {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo" class="imagem__logo">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `

    return video;

}

const containerVideos = document.querySelector("[data-lista]");

async function listaVideos() {
    try {
        const lista = await conectaApi.listaVideos();
        lista.forEach(elemento => {
            containerVideos.appendChild(constroiCard(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao))
        });
    } catch {
        containerVideos.innerHTML = "<h2 class='mensagem__titulo'>Não foi possível carregar os vídeos da página.</h2>"
    }
}

listaVideos();