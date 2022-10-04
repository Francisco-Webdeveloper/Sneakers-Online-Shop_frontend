import styles from "./ProductPrice.module.scss";

interface Props {
  price: number;
  discountPrice: number;
}

const ProductPrice = ({ price, discountPrice }: Props): JSX.Element => {
  const discountInPercentage = Math.round((discountPrice / price) * 100);

  return (
    <div className={styles.priceAndDiscountContainer}>
      <div className={styles.discountContainer}>
        <h2 className={styles.discountPrice}>${discountPrice}.00</h2>
        <div className={styles.discountBox}>
          <p>{discountInPercentage}%</p>
        </div>
      </div>
      <p className={styles.price}>${price}.00</p>
    </div>
  );
};

export default ProductPrice;
