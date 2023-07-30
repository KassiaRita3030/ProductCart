import { Link, useHistory } from "react-router-dom";
import cart from "../../assets/icons/cart.svg";
import './Header.css'

function Header() {
  const history = useHistory()

  function goToHome() {
    history.push('/')
  }

  return (
    <>
      <header onClick={goToHome}>
        FEATURE PRODUCTS
      </header>
      <Link to="/cart">
        <img title="Ir para carrinho" className="Cart" src={cart} alt="Meu carrinho"/>
      </Link>
    </>
  )
}

export default Header