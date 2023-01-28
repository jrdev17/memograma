import DataContext from "./Context/useContext";
import "./Game.css";
import TableCard from "./TableCard/TableCard";

const Game = () => {
  return (
    <DataContext>
      <TableCard />
    </DataContext>
  );
};
export default Game;
