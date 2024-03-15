import "@/styles/card.scss";

const InfoCard = ({ bg, title, value }) => {
  return (
    <div className="cc-infoCard-ct" style={{ backgroundColor: `${bg}` }}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default InfoCard;
