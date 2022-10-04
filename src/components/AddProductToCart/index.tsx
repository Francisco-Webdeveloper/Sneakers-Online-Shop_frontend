import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import styles from "./AddProductToCart.module.scss";

const AddProductToCart = (): JSX.Element => {
  return (
    <form className={styles.addToCartContainer}>
      <div className={styles.input}>
        <button type="button">-</button>
        <p>0</p>
        <button type="button">+</button>
      </div>
      <button type="submit" className={styles.addToCartButton}>
        <CartIcon className={styles.cartIcon} />
        <p>Add to cart</p>
      </button>
    </form>
  );
};

export default AddProductToCart;
