import Logo from "../../assets/logo.svg";
import din1 from "../../assets/din1.png";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.main}>
        <div className={styles.headerTop}>
          <img src={Logo} className={styles.logo} />
          <nav className={styles.nav}>
            <a>О нас</a>
            <a>Услуги</a>
            <a>Аренда</a>
          </nav>
          <button className={styles.button}>Связаться</button>
        </div>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Веломастерская “Велозар”</h1>
            <p className={styles.description}>
              Мы, мастера веломастерской «Велозар», как раз те самые счастливые
              люди, которые смогли превратить свое увлечение и хобби в
              профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный
              друг приносил Вам только радость и удовольствие от езды.
            </p>
          </div>
          <img className={styles.image} src={din1} />
        </div>
      </div>
    </div>
  );
};
export default Header;
