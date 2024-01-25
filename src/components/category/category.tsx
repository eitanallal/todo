import styles from "./category.module.css";
import { Item } from "../item/item";
import { ItemType } from "../../types/item.type";

interface CategoryProps {
  categoryTitle: string;
  categoryData: ItemType[];
  onAddItemDone: (newTitle: string, newDescription: string) => void;
  onDeleteItem: (itemId: number) => void;
}

export const Category: React.FC<CategoryProps> = ({
  categoryTitle,
  categoryData,
  onAddItemDone,
  onDeleteItem,
}) => {
  return (
    <div className={styles.bigRectangle}>
      <h1>{categoryTitle}</h1>
      <div className={styles.smallRectangleContainer}>
        {categoryData.map((item) => (
          <Item
            key={item.id}
            onAddItemDone={onAddItemDone}
            item={item}
            onDeleteItem={onDeleteItem}
            category={categoryTitle}
          />
        ))}
      </div>
    </div>
  );
};
