import { conectaApi } from "./conectaApi.js";

const containerVideos = document.querySelector("[data-lista]");

// Função de construção de card dinâmico

function constroiCard(url, titulo, imagem, descricao) {
    let video = document.createElement('li');
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


// Função que puxa a API listando todo os vídeos

async function listaVideos() {
    try {
        let lista = await conectaApi.listaVideos();
        lista.forEach(elemento => {
            containerVideos.appendChild(constroiCard(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao))
        });
    } catch {
        containerVideos.innerHTML = "<h2 class='mensagem__titulo'>Não foi possível carregar os vídeos da página.</h2>"
    }
}

listaVideos();


// Detectar clique no botão de pesquisa

const botaoPesquisar = document.querySelector('[data-pesquisa-botao]');

botaoPesquisar.addEventListener("click", (evento) => {
    evento.preventDefault();

    let termoDeBusca = document.querySelector('[data-pesquisa]').value;
    buscarVideos(termoDeBusca);
});

// Buscar os vídeos na API e imprimir na tela

async function buscarVideos(termoDeBusca) {
    containerVideos.innerHTML = "";


    let listaVideosFiltrados = await conectaApi.buscaVideos(termoDeBusca);
    listaVideosFiltrados.forEach(elemento => {
        containerVideos.appendChild(constroiCard(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao))
    });

    if (listaVideosFiltrados.length == 0) {
        containerVideos.innerHTML = "<h2 class='mensagem__titulo'>Não há vídeos com esse nome.</h2>"
    }
}