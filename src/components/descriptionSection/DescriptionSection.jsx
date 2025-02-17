import styles from "./styles.module.css";

const DescriptionSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.main}>
        <p className={styles.text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. </p>
        <p className={styles.text}>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
        </div>
      </div>
  );
};
export default DescriptionSection;
