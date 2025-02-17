import styles from "./styles.module.css";
import image1 from "../../assets/image1.png";

const OfferSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Что мы предлагаем</h2>
            <p className={styles.description}>
              В нашей мастерской можно выполнить комплексное техническое
              обслуживание велосипеда, ремонт и настройку всех его узлов,
              шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
              избежать многих проблем и дорогого ремонта. Все работы выполняем
              качественно и с душой.
            </p>
          </div>
          <img className={styles.image} src={image1} />
        </div>
      </div>
    </div>
  );
};
export default OfferSection;
