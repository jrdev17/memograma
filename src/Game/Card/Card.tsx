import { useContext } from "react";
import { card } from "../../models/card";
import { Context } from "../Context/useContext";
import "./Card.css";
interface Props {
  card: card;
}

interface context {
  push: (card: card) => void;
  isClicked: boolean;
}
const Card = ({ card }: Props) => {
  const { push, isClicked } = useContext(Context) as context;

  return (
    <div
      className={`card ${card.state ? "frente" : ""}`}
      onClick={() => (isClicked ? push(card) : "")}
    >
      {card.state ? card.item : ""}
    </div>
  );
};
export default Card;
