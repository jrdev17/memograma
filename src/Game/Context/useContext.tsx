import { Children, createContext, useEffect, useState } from "react";
import { col } from "sequelize";
import { card } from "../../models/card";
import Card from "../Card/Card";
import { shufleList } from "../Data/Data";
import useMemograph from "../useMemograph/useMemograph";

export const Context = createContext({});
interface props {
  children: JSX.Element | JSX.Element[];
}

const DataContext = ({ children }: props) => {
  const { copia, push, isClicked } = useMemograph();
  return (
    <>
      <Context.Provider value={{ copia, push, isClicked }}>
        {children}
      </Context.Provider>
    </>
  );
};
export default DataContext;
