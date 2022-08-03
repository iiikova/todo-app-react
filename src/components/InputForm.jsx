import React from "react";
import { TextField, Stack, Button } from "@mui/material";
import ButtonHoc from "../components/ButtonHOC";

function InputForm({ addTask, newTask, setNewTask }) {
  return (
    <Stack
      sx={{
        display: "flex ",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={addTask}
        style={{ display: "flex ", flexDirection: "row", width: "100%" }}
      >
        <TextField
          label="add task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          sx={{ marginRight: 1, width: "100%" }}
        />
        <ButtonHoc
          btnName={"+"}
          btnStyle={{ height: 56 }}
          btnVariant="contained"
          btnColor="primary"
          type="submit"
        />
      </form>
    </Stack>
  );
}

export default InputForm;
