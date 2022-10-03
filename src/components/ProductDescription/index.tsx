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
    <div className={styles.descriptionContainer}>
      <h2>{brand}</h2>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
