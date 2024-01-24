// import { useState } from "react";
import styles from "./category.module.css";
import { Item } from "../item/item";
import { ItemType } from "../../types/item";

interface CategoryProps {
  categoryTitle: string;
  categoryData: ItemType[];
  onAddItemDone: (newTitle: string, newDescription: string) => void;
  onDeleteItemToDo: (itemId: number) => void;
  onDeleteItemDone: (itemId: number) => void;
}

export const Category: React.FC<CategoryProps> = ({
  categoryTitle,
  categoryData,
  onAddItemDone,
  onDeleteItemToDo,
  onDeleteItemDone,
}) => {
  return (
    <>
      <div className={styles.bigRectangle}>
        <h1>{categoryTitle}</h1>
        <div className={styles.smallRectangleContainer}>
          {categoryData.map((item) => (
            <Item
              key={item.itemId}
              itemTitle={item.title}
              itemDescription={item.description}
              onAddItemDone={onAddItemDone}
              itemId={item.itemId}
              onDeleteItemToDo={onDeleteItemToDo}
              onDeleteItemDone={onDeleteItemDone}
              category={categoryTitle}
            ></Item>
          ))}
        </div>
      </div>
    </>
  );
};
