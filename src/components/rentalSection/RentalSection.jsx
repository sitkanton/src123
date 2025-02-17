import styles from "./styles.module.css";
import image1 from "../../assets/vell.png";

const RentalSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.main}>
        <div className={styles.content}>
        <img className={styles.image} src={image1} />
          <div className={styles.textContent}>
            <h2 className={styles.title}>Прокат велосипедов</h2>
            <p className={styles.description}>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalSection;
