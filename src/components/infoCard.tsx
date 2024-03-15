import "@/styles/card.scss";

interface InfoCardProps {
  bg: string;
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ bg, title, value }) => {
  return (
    <div className="cc-infoCard-ct" style={{ backgroundColor: `${bg}` }}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default InfoCard;
