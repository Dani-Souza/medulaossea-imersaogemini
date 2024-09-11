function pesquisar() {
    /* Seleciona a seção onde os resultados da pesquisa serão exibidos */
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = `<p class="item-resultado-nao-encontrado">Essa palavra não foi encontrada.Utilize palavras chaves para identificar sua dúvida </p>`;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    /* Inicializa uma string vazia para armazenar o HTML dos resultados */
    let perguntas_frequentes = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    /* Itera sobre cada pergunta e gera o HTML correspondente */
    for (let dado of perguntas) {
        titulo = dado.titulo.toLowerCase()
         descricao = dado.descricao.toLowerCase()
         tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
        perguntas_frequentes += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Para mais informações</a>
        </div>
    `;
        }
      
    }

    if(!perguntas_frequentes){
        perguntas_frequentes = `<p class="item-resultado-nao-encontrado" >Nada foi encontrado</p>`;

    }

    /* Atualiza o conteúdo HTML da seção com os resultados */
    section.innerHTML = perguntas_frequentes;
}


