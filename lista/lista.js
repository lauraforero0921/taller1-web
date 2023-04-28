import "./component-productos.js"

let products = []
async function arreglo(){
   let response= await fetch("https://apimocha.com/appleproject/allproducts")
     let data  = await response.json()
         data.forEach(element => {
      products.push(element)  
    })
    console.log(products);
    createElement()}
let productos
    
    const productContainer=document.querySelector('#actual-product')
    const botones=document.querySelectorAll("#buttons-filter button")
    console.log(botones);
    function createElement(){
productos=document.createElement("product-item")
productos.array =products;
console.log(productos.array);
productContainer.append(productos)
    }

    arreglo()


    
  
 botones.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)))
  
  function setCategory(elem) {
      console.log(elem.textContent)
      productos.ProductsFilter(elem.textContent)
  }
  
   