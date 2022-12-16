import { useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/icon-cart.svg";
import Cart from "../Cart";
import styles from "./AddProductToCart.module.scss";

interface Props {
  thumbnailImage: string;
  name: string;
  discountPrice: number;
}

const AddProductToCart = ({
  thumbnailImage,
  name,
  discountPrice,
}: Props): JSX.Element => {
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);

  const [productsAddedToCart, setProductsAddedToCart] = useState<number>(0);

  const [openCart, setOpenCart] = useState(false);

  const handleClickIncrease = () => {
    setNumberOfProducts((prev) => prev + 1);
  };

  const handleClickDecrease = () => {
    if (numberOfProducts > 0) {
      setNumberOfProducts((prev) => prev - 1);
    }
  };

  const handleOpenCart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpenCart(true);
    setProductsAddedToCart(numberOfProducts);
  };

  console.log({ productsAddedToCart });

  const handleCloseCart = () => setOpenCart(false);

  console.log({ openCart });

  return (
    <>
      <form className={styles.addToCartContainer}>
        <div className={styles.input}>
          <button
            className={styles.minusButton}
            type="button"
            onClick={handleClickDecrease}
          >
            -
          </button>
          <p>{numberOfProducts}</p>
          <button
            className={styles.plusButton}
            type="button"
            onClick={handleClickIncrease}
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className={styles.addToCartButton}
          onClick={handleOpenCart}
        >
          <CartIcon className={styles.cartIcon} />
          <p>Add to cart</p>
        </button>
      </form>
      {openCart && (
        <Cart
          openCart={openCart}
          onHide={handleCloseCart}
          productsAddedToCart={productsAddedToCart}
          thumbnailImage={thumbnailImage}
          name={name}
          discountPrice={discountPrice}
        />
      )}
    </>
  );
};

export default AddProductToCart;
