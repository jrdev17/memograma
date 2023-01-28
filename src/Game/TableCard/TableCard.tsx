import { useContext, useEffect, useState } from "react";
import { col } from "sequelize";
import { card } from "../../models/card";
import Card from "../Card/Card";
import { Context } from "../Context/useContext";

interface Blocks {
  copia: card[];
}
const TableCard = () => {
  const { copia } = useContext(Context) as Blocks;

  return (
    <div className="table">
      {copia.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
export default TableCard;
