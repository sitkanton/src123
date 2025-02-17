import ServiceItem from "../serviceItem/ServiceItem";
import styles from "./styles.module.css";

const cards = [
  { text: "Годовое ТО", color: "#22356F" },
  { text: "Выравнивание колес", color: "#0052C1" },
  { text: "Настройка переключателей", color: "#76B58B" },
];

const ServiceSection = () => {
  return (
    <div className={styles.container}>
      {cards.map((el) => {
        return <ServiceItem text={el.text} color={el.color} />;
      })}
    </div>
  );
};
export default ServiceSection;
