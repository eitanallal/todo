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
    <div className={styles.CategoryBox}>
      <div className={styles.categoryTitleBox}>
        <div className={styles.categoryTitle}>{categoryTitle}</div>
      </div>
      <div className={styles.ItemBoxContainer}>
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
