import "@/styles/card.scss";
import Image from "next/image";

interface CardProps {
  bg: string;
  title: string;
  value: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ bg, title, value, icon }) => {
  return (
    <div className="cc-card-ct" style={{ backgroundColor: `${bg}` }}>
      <h4>{title}</h4>
      <p>{value} €</p>
      <span className="cc-card-icon">
        <Image
          src={icon}
          width={25}
          height={25}
          alt="Card Icon"
          title="Card Icon"
          style={{ filter: "invert(100%)" }}
        />
      </span>
    </div>
  );
};

export default Card;
