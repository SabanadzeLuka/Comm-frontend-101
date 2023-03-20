export function displayProducts(products) {
  
    const container = document.getElementById("product-list")
    let html = ""
    products.forEach((product) => {
       html += ` 
         <div class="product">  
              <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.brand}</p>
                <p>${product.color}</p>
            </div>
       `
    })
    container.innerHTML = html

}