/*
necessidades

pegar os dados do input quando for clicado
ir ate o servidor e trazer os produtos
colocar os produtos na tela 
criar o grafico de preços

*/

const searchForm = document.querySelector('.search-form')
const productList = document.querySelector('.product-list')

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    const inputValue = event.target[0].value

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = (await data.json()).results.slice(0, 10)

})

function displayItems(products){
 
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</3>
            <p>${product.price.toLocailString('pt-br',{style: "currency", currency: "BRL"})}</p>
            <p>Loja: ${product.seller.nickname}</p>
        
        </div>
        `).join()

}
