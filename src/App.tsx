import { useState } from "react";
import styles from "./App.module.css";
import { Category } from "./components/category/category";
// import { Add_screen } from "./components/add_screen/add_screen";
import { ItemType } from "./types/item";

const App: React.FC = () => {
  const [nextToDoId, setNextToDoId] = useState<number>(3);
  const [nextDoneId, setNextDoneId] = useState<number>(0);

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
        itemId: nextToDoId,
        title: newTitle,
        description: newDescription,
      },
    ]);
    setNextToDoId(nextToDoId + 1);
  };

  const handleAddItemDone = (newTitle: string, newDescription: string) => {
    setDone([
      ...done,
      {
        itemId: nextDoneId,
        title: newTitle,
        description: newDescription,
      },
    ]);

    setNextDoneId(nextDoneId + 1);
  };

  console.log(`NextToDoId: ${nextToDoId}`);
  console.log(`NextDoneId: ${nextDoneId}`);

  const handleDeleteItemToDo = (itemId: number) => {
    setToDo(toDo.filter((i) => i.itemId !== itemId));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteItemDone = (itemId: number) => {
    setDone(done.filter((i) => i.itemId !== itemId));
  };

  return (
    <>
      <div className={styles.disp}>
        <Category
          categoryTitle="TODO"
          categoryData={toDo}
          onAddItemDone={handleAddItemDone}
          onDeleteItemToDo={handleDeleteItemToDo}
          onDeleteItemDone={handleDeleteItemDone}
        ></Category>

        <Category
          categoryTitle="DONE"
          categoryData={done}
          onAddItemDone={handleAddItemDone}
          onDeleteItemToDo={handleDeleteItemToDo}
          onDeleteItemDone={handleDeleteItemDone}
        ></Category>

        <button
          className={styles.circularButton}
          onClick={() =>
            handleAddItemToDo(
              "NEW TITLE",
              "item added by pressure on the green +"
            )
          }
        >
          <span className={styles.plusIcon}>+</span>
        </button>
      </div>
    </>
  );
};

export default App;
