import { useState } from "react";
import styles from "./item.module.css";
import { CheckCircle2 } from "lucide-react";
// import handleAddItemDone from "../../App";

interface ItemType {
  itemId: number;
  title: string;
  description: string;
}

interface ItemProps {
  itemTitle: string;
  itemDescription: string;
  // handleAddItemToDo?: (newTitle: string, newDescription: string) => void;
  // handleAddItemDone?: (newTitle: string, newDescription: string) => void;
  // handleDeleteItemToDo?: (itemId: number) => void;
  // handleDeleteItemDone?: (itemId: number) => void;
}

export const Item: React.FC<ItemProps> = ({ itemTitle, itemDescription }) => {
  let nextToDoId = 3;
  let nextDoneId = 0;

  const [toDo, setToDo] = useState<ItemType[]>([
    { itemId: 0, title: "Title 0", description: "Description todo 0" },
    { itemId: 1, title: "Title 1", description: "Description todo 1" },
    { itemId: 2, title: "Title 2", description: "Description todo 2" },
  ]);
  const [done, setDone] = useState<ItemType[]>([
    // { itemId: 0, title: "Title 0", description: "Description done 0" },
    // { itemId: 1, title: "Title 1", description: "Description done 1" },
  ]);

  const handleAddItemToDo = (newTitle: string, newDescription: string) => {
    setToDo([
      ...toDo,
      {
        itemId: nextToDoId++,
        title: "Title 3",
        description: "Description 3",
      },
    ]);
  };

  const handleAddItemDone = (newTitle: string, newDescription: string) => {
    setDone([
      ...done,
      {
        itemId: nextDoneId++,
        title: "Title 3",
        description: "Description 3",
      },
    ]);
  };

  const handleDeleteItemToDo = (itemId: number) => {
    setToDo(toDo.filter((i) => i.itemId !== itemId));
  };

  const handleDeleteItemDone = (itemId: number) => {
    setDone(done.filter((i) => i.itemId !== itemId));
  };

  return (
    <>
      <div className={styles.smallRectangle}>
        <button
          className={styles.tickButton}
          onClick={() => handleAddItemDone("hello", "hello")}
        >
          <CheckCircle2 color="grey" size={35} />
        </button>

        <div className={styles.title}>{itemTitle}</div>
        <div className={styles.plainText}>{itemDescription}</div>
      </div>
    </>
  );
};

export default Item;
