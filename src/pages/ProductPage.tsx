import { Sneaker } from "../types/Sneaker";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductDescription from "../components/ProductDescription";
import ProductPrice from "../components/ProductPrice";
import AddProductToCart from "../components/AddProductToCart";

const ProductPage = (): JSX.Element => {
  const { sneakerId } = useParams();

  const [sneaker, setSneaker] = useState<Sneaker | null>(null);

  const fetchSneaker = async () => {
    const response = await fetch(`http://localhost:4000/sneakers/${sneakerId}`);
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
        <div>
          <ProductImages images={sneaker.url} />
          <ProductDescription
            brand={sneaker.brand}
            name={sneaker.name}
            description={sneaker.description}
          />
          <ProductPrice
            price={sneaker.price}
            discountPrice={sneaker.discountPrice}
          />
          <AddProductToCart />
        </div>
      )}
    </>
  );
};

export default ProductPage;
