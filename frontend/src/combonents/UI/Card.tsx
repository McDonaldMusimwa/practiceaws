import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Card({ children, onClick }: CardProps) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export default Card;
