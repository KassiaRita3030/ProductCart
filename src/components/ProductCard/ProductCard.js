import './ProductCard.css'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function ProductCard({
  id,
  avatar,
  title,
  description,
  sizes,
  price,
  onAddCart
}) {
  const [disable, setDisable] = useState(false)

  function onClickHandler() {
    setDisable(true)
    onAddCart({
      id,
      avatar,
      title,
      description,
      sizes,
      price,
    })
  }

  return (
    <div className="ProductCard">
      <div className="Avatar">
        <img src={avatar}  alt="" height={448} />
      </div>
      <div className="Title">
        {title}
      </div>
      <div className="Description">
        {description}
      </div>
      <div className="Size">
        {sizes}
      </div>
      <div className="Price">
        R$ {price.toLocaleString()}
      </div>
      <div className="Actions">
        <Button
          variant="success"
          disabled={disable}
          onClick={onClickHandler}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard