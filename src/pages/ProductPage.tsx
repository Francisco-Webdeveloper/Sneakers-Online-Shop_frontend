import { Sneaker } from "../types/Sneaker";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductDescription from "../components/ProductDescription";
import ProductPrice from "../components/ProductPrice";
import AddProductToCart from "../components/AddProductToCart";
import styles from "./ProductPage.module.scss";

const ProductPage = (): JSX.Element => {
  const { sneakerId } = useParams();

  const [sneaker, setSneaker] = useState<Sneaker | null>(null);

  const fetchSneaker = async () => {
    console.log(`/sneakers/${sneakerId}`);
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/sneakers/${sneakerId}`
    );
    const json = await response.json();
    if (response.ok) {
      setSneaker(json);
    }
  };

  useEffect(() => {
    fetchSneaker();
  }, []);

  return (
    <>
      {sneaker && (
        <div className={styles.productPageContainer}>
          <div className={styles.imagesContainer}>
            <ProductImages images={sneaker.url} />
          </div>
          <div className={styles.descriptioAndFormContainer}>
            <ProductDescription
              brand={sneaker.brand}
              name={sneaker.name}
              description={sneaker.description}
            />
            <ProductPrice
              price={sneaker.price}
              discountPrice={sneaker.discountPrice}
            />
            <AddProductToCart
              thumbnailImage={sneaker.url.imageThumbnail1}
              name={sneaker.name}
              discountPrice={sneaker.discountPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
