import styles from "./Header.module.scss";
import menu from "../../assets/icons/icon-menu.svg";
import cart from "../../assets/icons/icon-cart.svg";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(true);

  const handleCloseCart = () => setOpenCart(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.menuAndLogoContainer}>
          <img className={styles.mobileMenu} src={menu} alt="menu" />
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className={styles.desktopMenu}>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className={styles.cartAndAvatarContainer}>
          <button
            type="submit"
            onClick={handleOpenCart}
            className={styles.cartButton}
          >
            <img src={cart} alt="cart" />
          </button>
          <img className={styles.avatarContainer} src={avatar} alt="avatar" />
        </div>
      </header>
      {openCart && <Cart openCart={openCart} onHide={handleCloseCart} />}
    </>
  );
};

export default Header;
