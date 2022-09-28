import image1 from "../../../assets/images/image-product-1.jpg";
import image2 from "../../../assets/images/image-product-2.jpg";
import image3 from "../../../assets/images/image-product-3.jpg";
import image4 from "../../../assets/images/image-product-4.jpg";
import styles from "./ProductImages.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

interface IProps {
  images: {
    image1: string;
    imageThumbnail1: string;
    image2: string;
    imageThumbnail2: string;
    image3?: string;
    imageThumbnail3?: string;
    image4?: string;
    imageThumbnail4?: string;
  };
}

const ProductImages = ({ images }: IProps): JSX.Element => {
  console.log({ images });

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className={`${styles.imageContainer} ${styles.imageContainer1}`}
          src={image1}
          alt="product1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.imageContainer} ${styles.imageContainer2}`}
          src={image2}
          alt="product2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.imageContainer} ${styles.imageContainer3}`}
          src={image3}
          alt="product3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.imageContainer} ${styles.imageContainer4}`}
          src={image4}
          alt="product4"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductImages;
