import { useState } from "react";
import styles from "./item.module.css";
import { CheckCircle2 } from "lucide-react";
import handleAddItemDone from "../../App";

interface ItemProps {
  itemTitle: string;
  itemDescription: string;
}

export const Item: React.FC<ItemProps> = ({ itemTitle, itemDescription }) => {
  return (
    <>
      <div className={styles.smallRectangle}>
        <button className={styles.tickButton} onClick={handleAddItemDone}>
          <CheckCircle2 color="grey" size={22} />
        </button>

        <div className={styles.title}>{itemTitle}</div>
        <div className={styles.plainText}>{itemDescription}</div>
      </div>
    </>
  );
};
