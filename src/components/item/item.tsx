// import { useState, useEffect } from "react";
import styles from "./item.module.css";
import { CheckCircle2 } from "lucide-react";
import { ItemType } from "../../types/item.type";
// import { App } from "../../App";

interface ItemProps {
  item: ItemType;
  category: string;
  onAddItemDone: (newTitle: string, newDescription: string) => void;
  onDeleteItem: (itemId: number) => void;
}

export const Item: React.FC<ItemProps> = ({
  item,
  category,
  onAddItemDone,
  onDeleteItem,
}) => {
  const handleButtonClick = (item: ItemType, category: string) => {
    onDeleteItem(item.id);
    if (category === "TODO") {
      onAddItemDone(item.title, item.description);
    }
  };
  return (
    <>
      <div className={styles.smallRectangle}>
        <button
          className={styles.tickButton}
          onClick={() => handleButtonClick(item, category)}
        >
          <CheckCircle2 color="grey" size={22} />
        </button>

        <div className={styles.title}>{item.title}</div>
        <div className={styles.plainText}>{item.description}</div>
      </div>
    </>
  );
};
