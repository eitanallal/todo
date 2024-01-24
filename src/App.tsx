import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import { Category } from "./components/category/category";
import { Item } from "./components/item/item";

// interface ItemType {
//   itemId: number;
//   title: string;
//   description: string;
// }

const App: React.FC = () => {
  //   let nextToDoId = 3;
  //   let nextDoneId = 0;

  //   const [toDo, setToDo] = useState<ItemType[]>([
  //     { itemId: 0, title: "Title 0", description: "Description todo 0" },
  //     { itemId: 1, title: "Title 1", description: "Description todo 1" },
  //     { itemId: 2, title: "Title 2", description: "Description todo 2" },
  //   ]);
  //   const [done, setDone] = useState<ItemType[]>([
  //     // { itemId: 0, title: "Title 0", description: "Description done 0" },
  //     // { itemId: 1, title: "Title 1", description: "Description done 1" },
  //   ]);

  //   const handleAddItemToDo = (newTitle: string, newDescription: string) => {
  //     setToDo([
  //       ...toDo,
  //       {
  //         itemId: nextToDoId++,
  //         title: "Title 3",
  //         description: "Description 3",
  //       },
  //     ]);
  //   };

  //   const handleAddItemDone = (newTitle: string, newDescription: string) => {
  //     setDone([
  //       ...done,
  //       {
  //         itemId: nextDoneId++,
  //         title: "Title 3",
  //         description: "Description 3",
  //       },
  //     ]);
  //   };

  //   const handleDeleteItemToDo = (itemId: number) => {
  //     setToDo(toDo.filter((i) => i.itemId !== itemId));
  //   };

  //   const handleDeleteItemDone = (itemId: number) => {
  //     setDone(done.filter((i) => i.itemId !== itemId));
  //   };

  return (
    <>
      <div className={styles.disp}>
        <Category categoryTitle="TODO" categoryData={toDo}></Category>
        <Category categoryTitle="DONE" categoryData={done}></Category>
        <button
          className={styles.circularButton}
          onClick={() => Item handleAddItemToDo("Title 3", "Description 3")}
        >
          <span className={styles.plusIcon}>+</span>
        </button>
      </div>
    </>
  );
};

export default App;
