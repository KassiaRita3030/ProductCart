function addItemToCart(item) {
  const cart = localStorage.getItem('cart')
  if (cart) {
    const tempCart = JSON.parse(cart)
    tempCart.push(item)
    localStorage.setItem('cart', JSON.stringify(tempCart))
  } else {
    const tempCart = []
    tempCart.push(item)
    localStorage.setItem('cart', JSON.stringify(tempCart))
  }
}

export default addItemToCart