import { useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import styles from "./AddProductToCart.module.scss";

const AddProductToCart = (): JSX.Element => {
  const [numberOfProducts, setNumberOfProducts] = useState<number>(1);

  const handleClickIncrease = () => {
    setNumberOfProducts((prev) => prev + 1);
  };

  const handleClickDecrease = () => {
    if (numberOfProducts > 1) {
      setNumberOfProducts((prev) => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfProducts(parseInt(e.target.value, 10) || 1);
  };

  return (
    <form className={styles.addToCartContainer}>
      <div className={styles.input}>
        <button type="button" onClick={handleClickDecrease}>
          -
        </button>
        <input
          type="number"
          aria-label="quantity"
          onChange={handleChange}
          value={numberOfProducts}
        />
        <button type="button" onClick={handleClickIncrease}>
          +
        </button>
      </div>
      <button type="submit" className={styles.addToCartButton}>
        <CartIcon className={styles.cartIcon} />
        <p>Add to cart</p>
      </button>
    </form>
  );
};

export default AddProductToCart;
