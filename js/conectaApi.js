async function listaVideos() {

    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertido = await conexao.json();

    return conexaoConvertido;
}

async function criaVideos(url, titulo, visualizacao, imagem) {
    const conexao = fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${visualizacao} mil visualizações`,
            url: url,
            imagem: imagem
        }),
    })

    const conexaoConvertido = await conexao.json();
    return conexaoConvertido;
}

export const conectaApi = {
    listaVideos,
    criaVideos
}