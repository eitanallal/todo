import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import styles from "./App.module.css";
import { Category } from "./components/category/category";
import { AddScreen } from "./components/add-screen/add-screen"; //to be used in the future
import { ItemType } from "./types/item.type";
// import { PlusCircle } from "lucide-react";
import AddIcon from "@mui/icons-material/Add";

const App: React.FC = () => {
  const [openAdding, setOpenAdding] = useState(false);
  const handleOpenAdding = () => setOpenAdding(true);
  const handleCloseAdding = (
    title: string,
    description: string,
    write: boolean
  ) => {
    if (write) handleAddItemToDo(title, description);
    setOpenAdding(false);
  };
  const [nextToDoId, setNextToDoId] = useState<number>(3);
  const [nextDoneId, setNextDoneId] = useState<number>(0);

  const [toDo, setToDo] = useState<ItemType[]>([
    { id: 0, title: "Title 0", description: "Description todo 0" },
    { id: 1, title: "Title 1", description: "Description todo 1" },
    {
      id: 2,
      title: "Title 2",
      description:
        "Description todo 2 (adding some text here just for fun hahah)",
    }, //just an example, to be removed in the future
  ]);
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
    // setAddingMenu(false);
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

  console.log(`NextToDoId: ${nextToDoId}`);
  console.log(`NextDoneId: ${nextDoneId}`);

  const handleDeleteItemToDo = (itemId: number) => {
    setToDo(toDo.filter((i) => i.id !== itemId));
  };

  const handleDeleteItemDone = (itemId: number) => {
    setDone(done.filter((i) => i.id !== itemId));
  };

  // const handleAddingMenu = () => {
  //   // setAddingMenu(true);
  // };

  return (
    <>
      <div className={styles.disp}>
        {/* <div className={styles.addMenu}></div> */}
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
          className={styles.circularButton} // modal
          onClick={handleOpenAdding}
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
          open={openAdding}
          onClose={() => handleCloseAdding("", "", false)}
          // style={{ minWidth: "40rem" }}
        >
          <AddScreen handleCloseAdding={handleCloseAdding} />
        </Dialog>{" "}
      </div>
    </>
  );
};

export default App;
