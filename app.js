function pesquisar() {
    /* Seleciona a seção onde os resultados da pesquisa serão exibidos */
    let section = document.getElementById("resultados-pesquisa");
    

    /* Inicializa uma string vazia para armazenar o HTML dos resultados */
    let perguntas_frequentes = "";

    /* Itera sobre cada pergunta e gera o HTML correspondente */
    for (let dado of perguntas) {
        perguntas_frequentes += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Para mais informações</a>
            </div>
        `;
    }

    /* Atualiza o conteúdo HTML da seção com os resultados */
    section.innerHTML = perguntas_frequentes;
}


