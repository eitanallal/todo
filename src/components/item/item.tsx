// import { useState, useEffect } from "react";
import styles from "./item.module.css";
import { CheckCircle2 } from "lucide-react";
// import { ItemType } from "../../types/item";
// import { App } from "../../App";

interface ItemProps {
  itemTitle: string;
  itemDescription: string;
  itemId: number;
  category: string;
  onAddItemDone: (newTitle: string, newDescription: string) => void;
  onDeleteItemToDo: (itemId: number) => void;
  onDeleteItemDone: (itemId: number) => void;
}

export const Item: React.FC<ItemProps> = ({
  itemTitle,
  itemDescription,
  itemId,
  category,
  onAddItemDone,
  onDeleteItemToDo,
  onDeleteItemDone,
}) => {
  const handleButtonClick = (
    itemTitle: string,
    itemDescription: string,
    itemId: number,
    category: string
  ) => {
    if (category === "TODO") {
      onAddItemDone(itemTitle, itemDescription);
      onDeleteItemToDo(itemId); //
    }
    if (category === "DONE") {
      console.log("Here I am");
      onDeleteItemDone(itemId); // Call your other function
    }
  };
  return (
    <>
      <div className={styles.smallRectangle}>
        <button
          className={styles.tickButton}
          onClick={() =>
            handleButtonClick(itemTitle, itemDescription, itemId, category)
          }
        >
          <CheckCircle2 color="grey" size={22} />
        </button>

        <div className={styles.title}>{itemTitle}</div>
        <div className={styles.plainText}>{itemDescription}</div>
      </div>
    </>
  );
};
