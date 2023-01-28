import { useEffect, useState } from "react";
import { card } from "../../models/card";
import { shufleList } from "../Data/Data";

interface data {
  cards?: [];
}

function useMemograph(cards?: data) {
  const [state, setState] = useState(shufleList());
  const [copia, setCopia] = useState(state);
  const [cola, setCola] = useState<card[]>([]);
  const [isClicked, setIsclicked] = useState(true);

  useEffect(() => {
    if (cola.length != 2) {
      return;
    }
    setIsclicked((current) => (current = false));
    setTimeout(() => {
      if (cola[0].item == cola[1].item) {
        setState([...copia]);
      } else {
        setCopia([...state]);
      }
      setIsclicked(true);
    }, 1000);
    setCola([...[]]);
  }, [cola]);

  const push = (card: card) => {
    if (cola.length < 1 || cola[0].id != card.id) {
      setCola(cola.concat(card));
      const Update = copia.map((item) =>
        item == card ? { ...card, state: true } : item
      );
      setCopia([...Update]);
    }
  };

  return { push, copia, isClicked };
}

export default useMemograph;
