async function conectaApi() {
    var conexao = await fetch("https://my-json-server.typicode.com/monicahillman/aluraplay-json/db");
    var conexaoConvertido = await conexao.json();

    var containerVideos = document.querySelector(".videos__container");

    console.log(containerVideos)


    conexaoConvertido.videos.map((elemento) => {
        var video = document.createElement('li');
        video.className = "videos__item";
        video.innerHTML = `
        <iframe width="100%" height="72%" src="${elemento.url}"
            title="${elemento.titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${elemento.imagem}" alt="logo canal alura">
            <h3>${elemento.titulo}</h3>
            <p>${elemento.descricao}</p>
        </div>
    `
        containerVideos.appendChild(video);
    }
    )


}

conectaApi();