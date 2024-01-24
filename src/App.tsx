import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import { Category } from "./components/category/category";

interface Item {
  itemId: number;
  title: string;
  description: string;
}

// interface AppProps {
//   handleAddItem: () => void;
// }

const App: React.FC = () => {
  let nextToDoId = 3;
  let nextDoneId = 3;

  const [toDo, setToDo] = useState<Item[]>([
    { itemId: 0, title: "Title 0", description: "Description todo 0" },
    { itemId: 1, title: "Title 1", description: "Description todo 1" },
    { itemId: 2, title: "Title 2", description: "Description todo 2" },
  ]);
  const [done, setDone] = useState<Item[]>([
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
        itemId: nextToDoId++,
        title: "Title 3",
        description: "Description 3",
      },
    ]);
  };

  const handleEditItemToDo = (nextItem: any) => {
    setToDo(
      toDo.map((i) => {
        if (i.itemId === nextItem.itemId) {
          return nextItem;
        } else {
          return i;
        }
      })
    );
  };

  const handleEditItemDone = (nextItem: any) => {
    setDone(
      done.map((i) => {
        if (i.itemId === nextItem.itemId) {
          return nextItem;
        } else {
          return i;
        }
      })
    );
  };

  const handleDeleteItemToDo = (itemId: number) => {
    setToDo(toDo.filter((i) => i.itemId !== itemId));
  };

  const handleDeleteItemDone = (itemId: number) => {
    setDone(done.filter((i) => i.itemId !== itemId));
  };

  return (
    <>
      <div className={styles.disp}>
        <Category categoryTitle="TODO" categoryData={toDo}></Category>
        <Category categoryTitle="DONE" categoryData={done}></Category>
        <button
          className={styles.circularButton}
          onClick={() => handleAddItemToDo("Title 3", "Description 3")}
        >
          <span className={styles.plusIcon}>+</span>
        </button>
      </div>
    </>
  );
};

export default App;
