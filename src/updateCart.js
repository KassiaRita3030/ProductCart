function updateCart(listCart) {
  localStorage.setItem('cart', JSON.stringify(listCart))
}

export default updateCart