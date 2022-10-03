import { useContext } from "react";
import { SneakersContext } from "../context/sneakersContext";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
  const sneakers = useContext(SneakersContext);

  return (
    <div className={styles.homeContainer}>
      {sneakers &&
        sneakers.map(({ url, _id, brand, name, price, discountPrice }) => {
          const discountInPercentage = Math.round(
            (discountPrice / price) * 100
          );

          return (
            <Link
              to={`/sneaker/${_id}`}
              className={styles.productContainer}
              key={_id}
            >
              <img className={styles.image} src={url.image1} alt="product" />
              <div className={styles.productDetailsContainer}>
                <h3 className={styles.brand}>{brand}</h3>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.priceAndDiscountContainer}>
                  <div className={styles.discountContainer}>
                    <h2 className={styles.discountPrice}>
                      ${discountPrice}.00
                    </h2>
                    <div className={styles.discountBox}>
                      <p>{discountInPercentage}%</p>
                    </div>
                  </div>
                  <p className={styles.price}>
                    <span>
                      <b>${price}.00</b>
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
