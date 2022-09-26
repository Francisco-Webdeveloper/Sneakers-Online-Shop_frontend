import styles from "./Header.module.scss";
import menu from "../../assets/icons/icon-menu.svg";
import cart from "../../assets/icons/icon-cart.svg";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/images/image-avatar.png";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img className={styles.menuContainer} src={menu} alt="menu" />
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={cart} alt="cart" />
        <img className={styles.avatarContainer} src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
