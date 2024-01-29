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
    if (category === "To-Do") {
      onAddItemDone(item.title, item.description);
      console.log("Adding to the done column");
    }
    onDeleteItem(item.id);
  };
  return (
    <>
      <div className={styles.ItemBox}>
        <button
          className={styles.tickButton}
          onClick={() => handleButtonClick(item, category)}
        >
          <div className={styles.circleTick}>
            <CheckCircle2 color="grey" size={22} />
          </div>
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.plainText}>{item.description}</div>
        </div>
      </div>
    </>
  );
};
