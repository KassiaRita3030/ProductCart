import './Home.css';
import ProductCard from '../ProductCard';
import images from '../../assets/images'
import addItemToCart from "../../addItemToCart";

function Home() {
  function onClickHandler(item) {
    addItemToCart(item)
  }

  return (
    <div>
      <div className="Home">
        {images.map(item =>
          <ProductCard
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            title={item.title}
            description={item.description}
            price={item.price}
            sizes={item.size}
            onAddCart={onClickHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
