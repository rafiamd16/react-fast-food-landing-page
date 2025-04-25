import parse from "html-react-parser";
import "boxicons/css/boxicons.min.css";

const Card = ({ cardList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardList.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.image} alt="food" />
            {parse(card.content)}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
