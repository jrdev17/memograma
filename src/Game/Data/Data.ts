import { card } from "../../models/card";

const emoji = ["😀", "😁", "😂", "🤣", "😥", "😄"];

export const shufleList = () => {
  const blocks = [...emoji, ...emoji].sort(() => Math.random() - 0.5);

  return blocks.map<card>((item, i) => ({
    id: i,
    item: item,
    index: i,
    state: false,
  }));
};
