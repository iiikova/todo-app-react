import React from "react";
import { TextField, Button, Stack } from "@mui/material";

import UpdateIcon from "@mui/icons-material/Update";
import UpdateDisabledIcon from "@mui/icons-material/UpdateDisabled";

function UploadForm({ updateTodo, changeTask, updateTask, cancelUpdateTask }) {
  return (
    <Stack
      sx={{
        width: 400,
        display: "flex ",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="filled-basic"
        label="change task..."
        variant="filled"
        value={updateTodo && updateTodo.title}
        onChange={(e) => changeTask(e)}
        sx={{ width: 300 }}
      />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={updateTask}
          variant="contained"
          color="secondary"
          sx={{ height: 56 }}
        >
          <UpdateIcon />
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={cancelUpdateTask}
          sx={{ height: 56 }}
        >
          <UpdateDisabledIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default UploadForm;
