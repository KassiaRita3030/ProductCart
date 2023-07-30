function removeItemCart(item) {
  const cart = localStorage.getItem('cart')
  if (cart) {
    const listCart = JSON.parse(cart)
    const result = listCart.filter(function (itemCart) {
      return item.id !== itemCart.id
    })
    localStorage.setItem('cart', JSON.stringify(result))
  }
}

export default removeItemCart