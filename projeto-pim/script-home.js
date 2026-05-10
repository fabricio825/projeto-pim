let produtosFiltrados = [...meusProdutos];

function renderizarProdutos(lista) {
    const grid = document.getElementById('gridProdutos');
    const contador = document.getElementById('contador');
    
    if (!grid) return;
    
    grid.innerHTML = "";
    if (contador) contador.innerText = lista.length;

    lista.forEach(p => {
        grid.innerHTML += `
            <div class="card" onclick="location.href='detalhes.html?id=${p.id}'">
                <div class="card-img-container">
                    <img src="${p.imagens[0]}" 
                         onmouseover="this.src='${p.imagens[1] || p.imagens[0]}'" 
                         onmouseout="this.src='${p.imagens[0]}'"
                         alt="${p.nome}">
                </div>
                <h3>${p.nome}</h3>
                <p class="price">R$ ${p.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                <button class="btn-buy" onclick="event.stopPropagation(); location.href='carrinho.html?id=${p.id}'">
                    Adicionar ao carrinho
                </button>
            </div>
        `;
    });
}

function filtrar() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    produtosFiltrados = meusProdutos.filter(p => 
        p.nome.toLowerCase().includes(termo) || 
        p.descricao.toLowerCase().includes(termo)
    );
    
    renderizarProdutos(produtosFiltrados);
}

function ordenar() {
    const criterio = document.getElementById('selectOrdem').value;

    if (criterio === "maior") {
        produtosFiltrados.sort((a, b) => b.preco - a.preco);
    } else if (criterio === "menor") {
        produtosFiltrados.sort((a, b) => a.preco - b.preco);
    } else if (criterio === "az") {
        produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    renderizarProdutos(produtosFiltrados);
}

window.onload = () => {
    renderizarProdutos(meusProdutos);
};