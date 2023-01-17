import forEach from "lodash/forEach";
import findIndex from "lodash/findIndex";

export const transformByHorse = (items) => {
  const newItems = [];
  forEach(items, (element) => {
    const index = findIndex(newItems, { name: element.horse });
    if (index === -1) {
      newItems.push({ name: element.horse, bet_amount: element.bet_amount });
    } else {
      newItems[index] = {
        ...newItems[index],
        bet_amount: newItems[index].bet_amount + element.bet_amount,
      };
    }
  });
  return newItems;
};

export const transformByJockey = (items) => {
  const newItems = [];
  forEach(items, (element) => {
    const index = findIndex(newItems, { name: element.jockey });
    if (index === -1) {
      newItems.push({ name: element.jockey, bet_amount: element.bet_amount });
    } else {
      newItems[index] = {
        ...newItems[index],
        bet_amount: newItems[index].bet_amount + element.bet_amount,
      };
    }
  });
  return newItems;
};
