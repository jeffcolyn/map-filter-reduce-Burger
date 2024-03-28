const list = document.querySelector("ul")
const buttonshowball = document.querySelector('.showball')
const buttonmapall = document.querySelector(".map-all")
const buttonsuumer = document.querySelector('.button-suumer')
const buttonfilterall = document.querySelector('.filter-all')


function formatcurrency(value) {
  const newvalue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


  return newvalue

}



function showball(myarray) {
  let myLi = ''




  myarray.forEach((product) => {
    myLi += `
      <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${formatcurrency(product.price)}</p>
      </li>
    `
  })
  list.innerHTML = myLi
}

function mapallitens() {
  const newprice = menuOptions.map((product) => ({
    name: product.name,
    price: product.price * 0.9,
    vegan: product.vegan,
    src: product.src,
  }))

  showball(newprice)
}



function suumerallitens() {

  const totalvalue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML =
    `
      <li>
        <p> O valor total dos itens é R$ ${formatcurrency(totalvalue)} </p>
      </li>
    `

}

function filterallitens() {
  const productvegan = menuOptions.filter((product) => product.vegan)

  showball(productvegan)

}

buttonshowball.addEventListener('click', () => showball(menuOptions));
buttonmapall.addEventListener('click', mapallitens)
buttonsuumer.addEventListener('click', suumerallitens)
buttonfilterall.addEventListener('click', filterallitens)
