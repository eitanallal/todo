import { useState } from "react";
import styles from "./category.module.css";
import { Item } from "../item/item";

interface CategoryProps {
  categoryTitle: string;
  categoryData: {
    itemId: number;
    title: string;
    description: string;
  }[];
}

export const Category: React.FC<CategoryProps> = ({
  categoryTitle,
  categoryData,
}) => {
  return (
    <>
      <div className={styles.bigRectangle}>
        <h1>{categoryTitle}</h1>
        {categoryData.map((item: any) => (
          <Item
            itemTitle={item.title}
            itemDescription={item.description}
          ></Item>
        ))}
        {/*<Item
          itemTitle="Hello 1"
          itemDescription="Here is the description 1"
        ></Item>
        <Item
          itemTitle="Hello 2"
          itemDescription="Here is the description 2"
        ></Item> */}
      </div>
    </>
  );
};
