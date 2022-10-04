import styles from "./ProductDescription.module.scss";

interface IProps {
  brand: string;
  name: string;
  description: string;
}

const ProductDescription = ({
  brand,
  name,
  description,
}: IProps): JSX.Element => {
  return (
    <section className={styles.descriptionContainer}>
      <h3 className={styles.brand}>{brand}</h3>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default ProductDescription;
