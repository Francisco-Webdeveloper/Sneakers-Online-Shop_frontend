import { useEffect, useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";

export interface IState {
  sneakers: {
    _id: string;
    brand: string;
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    stock: number;
    url: {
      image1: string;
      imageThumbnail1: string;
      image2: string;
      imageThumbnail2: string;
      image3?: string;
      imageThumbnail3?: string;
      image4?: string;
      imageThumbnail4?: string;
    };
  }[];
}

const Product = (): JSX.Element => {
  const [sneakers, setSneakers] = useState<IState["sneakers"]>([]);

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
