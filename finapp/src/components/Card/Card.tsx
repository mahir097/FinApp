import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://t4.ftcdn.net/jpg/05/62/16/01/360_F_562160112_92yO0mjcQbSCYoLGeT3i2ieTP9WF55le.jpg"
        alt="image"
      />
      <div className="details">
        <h2>{props.companyName}</h2>
        <p>{props.price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        labore.
      </p>
    </div>
  );
};

export default Card;
