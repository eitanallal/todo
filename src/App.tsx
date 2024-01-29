import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import styles from "./App.module.css";
import { Category } from "./components/category/category";
import { AddScreen } from "./components/add-screen/add-screen";
import { ItemType } from "./types/item.type";
import AddIcon from "@mui/icons-material/Add";

const App: React.FC = () => {
  const [openAddItemModal, setopenAddItemModal] = useState(false);
  const handleopenAddItemModal = () => setopenAddItemModal(true);
  const handleCloseAdding = (
    title: string,
    description: string,
    switchFromToDoToDone: boolean
  ) => {
    if (switchFromToDoToDone) handleAddItemToDo(title, description);
    setopenAddItemModal(false);
  };
  const [nextToDoId, setNextToDoId] = useState<number>(3);
  const [nextDoneId, setNextDoneId] = useState<number>(0);

  const [toDo, setToDo] = useState<ItemType[]>([]);
  const [done, setDone] = useState<ItemType[]>([]);

  const handleAddItemToDo = (newTitle: string, newDescription: string) => {
    setToDo([
      ...toDo,
      {
        id: nextToDoId,
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
        id: nextDoneId,
        title: newTitle,
        description: newDescription,
      },
    ]);

    setNextDoneId(nextDoneId + 1);
  };

  const handleDeleteItemToDo = (itemId: number) => {
    setToDo(toDo.filter((i) => i.id !== itemId));
  };

  const handleDeleteItemDone = (itemId: number) => {
    setDone(done.filter((i) => i.id !== itemId));
  };

  return (
    <>
      <div className={styles.disp}>
        <Category
          categoryTitle="To-Do"
          categoryData={toDo}
          onAddItemDone={handleAddItemDone}
          onDeleteItem={handleDeleteItemToDo}
        ></Category>
        <Category
          categoryTitle="Done"
          categoryData={done}
          onAddItemDone={handleAddItemDone}
          onDeleteItem={handleDeleteItemDone}
        ></Category>
        <button
          className={styles.circularButton}
          onClick={handleopenAddItemModal}
        >
          <AddIcon
            sx={{
              color: "white",
              backgroundColor: "transparent",
              fontSize: "3vi",
              maxHeight: "5vh",
              maxWidth: "5vh",
            }}
          />
        </button>
        <Dialog
          open={openAddItemModal}
          onClose={() => handleCloseAdding("", "", false)}
        >
          <AddScreen handleCloseAdding={handleCloseAdding} />
        </Dialog>{" "}
      </div>
    </>
  );
};

export default App;
