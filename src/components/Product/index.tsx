import { useEffect, useState } from "react";
import { Sneaker } from "../../types/Sneaker";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";

const Product = (): JSX.Element => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);

  const fetchSneakers = async () => {
    const response = await fetch("http://localhost:4000/sneakers");
    const json = await response.json();

    if (response.ok) {
      setSneakers(json);
    }
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  console.log(sneakers);

  return (
    <>
      {sneakers &&
        sneakers.map(({ url, _id, brand, name, description }) => {
          return (
            <div key={_id}>
              <ProductImages images={url} />
              <ProductDescription
                brand={brand}
                name={name}
                description={description}
              />
            </div>
          );
        })}
    </>
  );
};

export default Product;
