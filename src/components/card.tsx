import "@/styles/card.scss";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  bg: string;
  title: string;
  value: string;
  icon: string;
  api?: string;
}

const Card: React.FC<CardProps> = ({ bg, title, value, icon, api }) => {
  return (
    <Link
      className="cc-card-ct"
      style={{ backgroundColor: `${bg}` }}
      href={`/list/${api}`}
    >
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
    </Link>
  );
};

export default Card;
