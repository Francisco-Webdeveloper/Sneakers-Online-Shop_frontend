import styles from "./ProductImages.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { SneakerImages } from "../../types/SneakerImages";
import { useState } from "react";

interface Props {
  images: SneakerImages;
}

interface imageInterface {
  mainImage: string | undefined;
  thumbnailImage: string | undefined;
}

const ProductImages = ({ images }: Props): JSX.Element => {
  const {
    image1,
    image2,
    image3,
    image4,
    imageThumbnail1,
    imageThumbnail2,
    imageThumbnail3,
    imageThumbnail4,
  } = images;

  const allImages = {
    mainImages: [image1, image2, image3, image4],
    thumbnailImages: [
      imageThumbnail1,
      imageThumbnail2,
      imageThumbnail3,
      imageThumbnail4,
    ],
  };

  const [selectedImages, setSelectedImages] = useState<imageInterface>({
    mainImage: image1,
    thumbnailImage: imageThumbnail1,
  });

  const handleClick = (clickedImage?: string) => {
    const clickedThumbnailImage = allImages.thumbnailImages.find(
      (image) => image === clickedImage
    );

    setSelectedImages((prev) => ({
      ...prev,
      thumbnailImage: clickedThumbnailImage,
    }));

    allImages.thumbnailImages.forEach((imageThumbnail, index) => {
      if (clickedThumbnailImage === imageThumbnail) {
        setSelectedImages((prev) => ({
          ...prev,
          mainImage: allImages.mainImages[index],
        }));
      }
    });
  };

  return (
    <>
      <div className={styles.carouselImages}>
        <Carousel fade>
          {allImages.mainImages.map((image, index) => {
            return (
              <Carousel.Item key={image}>
                <img
                  className={`${styles.imageContainer} ${
                    styles[`imageContainer${index + 1}`]
                  }`}
                  src={image}
                  alt="product"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.selectedImages}>
        <img
          className={styles.imageContainer}
          src={selectedImages.mainImage}
          alt="product"
        />
        <div className={styles.thumbnailImagesContainer}>
          {allImages.thumbnailImages.map((image) => {
            return (
              <img
                key={image}
                className={`${styles.thumbnailImage} ${
                  image === selectedImages.thumbnailImage
                    ? styles.selectedImage
                    : ""
                }`}
                src={image}
                onClick={() => handleClick(image)}
                alt="product-thumbnail"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
