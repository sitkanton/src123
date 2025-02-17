import styles from "./styles.module.css";

function ServiceItem({ text, color }) {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ServiceItem;
