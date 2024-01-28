import { useState } from "react";
// import styles from "./add-screen.module.css";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";

interface AddScreenProps {
  handleCloseAdding: (
    title: string,
    description: string,
    write: boolean
  ) => void;
}

export const AddScreen: React.FC<AddScreenProps> = ({ handleCloseAdding }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ height: "50rem", width: "50rem" }}>
      {/* <div className={styles.addWindow}>Hello</div> */}

      <DialogTitle style={{ textAlign: "center", fontSize: "44px" }}>
        Add a Task
      </DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="title"
          label="Title"
          variant="standard"
          value={title}
          inputProps={{ style: { fontSize: 40 } }}
          InputLabelProps={{ style: { fontSize: 40 } }} // font size of input label
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          variant="standard"
          value={description}
          inputProps={{ style: { fontSize: 40 } }}
          InputLabelProps={{ style: { fontSize: 40 } }} // font size of input label
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        {/* onClick={() => handleButtonClick(item, category)} */}
        <Button onClick={() => handleCloseAdding("", "", false)}>Cancel</Button>

        <Button
          type="submit"
          onClick={() => handleCloseAdding(title, description, true)}
        >
          Validate
        </Button>
      </DialogActions>
    </div>
  );
};
