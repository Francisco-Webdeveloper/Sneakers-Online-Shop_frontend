import styles from "./Cart.module.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface Props {
  openCart: boolean;
  onHide: boolean;
  productsAddedToCart: number;
  thumbnailImage: string;
  name: string;
  discountPrice: number;
}

const Cart = ({
  openCart,
  onHide,
  productsAddedToCart,
  thumbnailImage,
  name,
  discountPrice,
}: Props): JSX.Element => {
  const [show, setShow] = useState(openCart);

  const handleClose = () => setShow(onHide);

  return (
    <Modal show={openCart} onHide={handleClose}>
      {productsAddedToCart > 0 ? (
        <>
          <Modal.Header>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={thumbnailImage} alt="product-image" />
              <div>
                <p>{name}</p>
                <p>
                  ${discountPrice} x {productsAddedToCart}
                  <strong> ${discountPrice * productsAddedToCart}</strong>
                </p>
              </div>
            </div>
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your cart is empty.</Modal.Body>{" "}
        </>
      )}
    </Modal>
  );
};

export default Cart;
