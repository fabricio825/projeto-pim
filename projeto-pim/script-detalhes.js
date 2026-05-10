const params = new URLSearchParams(window.location.search);
const idUrl = params.get('id');


const produto = meusProdutos.find(p => p.id === idUrl);


if (produto) {
    
    document.getElementById('prod-nome').innerText = produto.nome;
    document.getElementById('bread-nome').innerText = produto.nome;
    document.getElementById('prod-preco').innerText = `R$ ${produto.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
    document.getElementById('prod-desc').innerText = produto.descricao;

    document.getElementById('spec-tela').innerText = produto.specs.tela;
    document.getElementById('spec-cpu').innerText = produto.specs.cpu;
    document.getElementById('spec-cores').innerText = produto.specs.cores;
    document.getElementById('spec-gpu').innerText = produto.specs.gpu;

    const fotoPrincipal = document.getElementById('main-img');
    fotoPrincipal.src = produto.imagens[0];

    const containerThumbs = document.getElementById('thumbs');
    containerThumbs.innerHTML = ""; 

    produto.imagens.forEach(img => {
        const miniImg = document.createElement('img');
        miniImg.src = img;
        miniImg.alt = produto.nome;
        
        miniImg.onclick = () => {
            fotoPrincipal.src = img;
        };
        
        containerThumbs.appendChild(miniImg);
    });

} else {
    
    document.querySelector('.container').innerHTML = "<h1>Produto não encontrado, mano! 😅</h1>";
}


function adicionarAoCarrinho() {
    
    window.location.href = `carrinho.html?id=${idUrl}`;
}