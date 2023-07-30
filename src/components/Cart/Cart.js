import {Fragment, useState} from "react";
import getCart from "../../getCart";
import './Cart.css'
import close from '../../assets/icons/Close.svg'
import {Form} from "react-bootstrap";
import removeItemCart from "../../removeItemCart";
import updateCart from "../../updateCart";
function Cart() {
  const [cart, setCart] = useState(getCart())

  function onRemove(item) {
    item.remove = true
    setCart([...cart])
    removeItemCart(item)
  }

  function onAnimationEndHandler(item) {
    setCart(cart.filter((itemCart) => itemCart.id !== item.id))
  }

  function onChangeQuantity(quantity, item) {
    item.quantity = quantity
    updateCart(cart)
  }

  return (
    <div className="CartContainer">
      {cart.map((item, key) => (
        <Fragment key={Number(`${key}${item.id}`)}>
          <div
            onAnimationEnd={() => onAnimationEndHandler(item)}
            className={['CartRow', item.remove ? 'remove' : null].join(' ')}>
            <div className="Avatar">
              <img src={item.avatar} alt="" height={200} />
            </div>
            <div className="Info">
              <div className="Title">{item.title}</div>
              <div className="Description">{item.description}</div>
            </div>
            <div className="Size">{item.sizes}</div>
            <div className="Quantity">
              <div style={{ width: '60px' }}>
                <Form.Select defaultValue={item.quantity} onChange={(e) => onChangeQuantity(e.target.value, item)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </div>
            </div>
            <div className="Price">R$ {item.price.toLocaleString()}</div>
            <div className="Remove" onClick={() => onRemove(item)}>
              <img src={close} alt="" />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Cart