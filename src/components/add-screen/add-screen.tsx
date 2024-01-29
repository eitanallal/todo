import { useState } from "react";
import styles from "./add-screen.module.css";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface AddScreenProps {
  handleCloseAdding: (
    title: string,
    description: string,
    switchFromToDoToDone: boolean
  ) => void;
}

export const AddScreen: React.FC<AddScreenProps> = ({ handleCloseAdding }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      style={{
        height: "20rem",
        width: "25em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DialogTitle
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "1rem",
        }}
      >
        Add Task
      </DialogTitle>
      <DialogContent
        style={{ display: "flex", flexDirection: "column", width: "60%" }}
      >
        <TextField
          id="title"
          label="Name"
          variant="standard"
          value={title}
          inputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          variant="standard"
          value={description}
          inputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }} //
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>

      <DialogActions style={{ justifyContent: "center" }}>
        <div className={styles.twoButtons}>
          <Button
            type="submit"
            onClick={() => handleCloseAdding(title, description, true)}
          >
            <div className={styles.button}>Add</div>
          </Button>
          <Button onClick={() => handleCloseAdding("", "", false)}>
            <div className={styles.button}>Close</div>
          </Button>
        </div>
      </DialogActions>
    </div>
  );
};
