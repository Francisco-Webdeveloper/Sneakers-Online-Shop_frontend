import styles from "./ProductImages.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { SneakerImages } from "../../types/SneakerImages";

interface Props {
  images: SneakerImages;
}

const ProductImages = ({ images }: Props): JSX.Element => {
  const { image1, image2, image3, image4 } = images;

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
