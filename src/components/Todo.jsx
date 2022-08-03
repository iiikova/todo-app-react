import React from "react";
import ButtonHoc from "../components/ButtonHOC";
// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
// UI
import { ListItem, ListItemText, Stack } from "@mui/material";

function Todo({ id, title, check, status, deleteTodo, setUpdateTodo }) {
  return (
    <List style={{ padding: 0 }}>
      <ListItem key={id}>
        <ListItemButton onClick={() => check(id)} sx={{ padding: 0 }}>
          <ListItemIcon>
            <Checkbox onClick={() => check(id)} checked={status} />
          </ListItemIcon>
          <ListItemText
            id={id}
            className={status ? "complete" : null}
            primary={title}
          />
        </ListItemButton>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className={`${status} ? "complete" : "complete"`}
        >
          {!status ? (
            <ButtonHoc
              btnName={<EditIcon />}
              btnStyle={{ marginRight: 0.5, minWidth: 0 }}
              btnVariant="outlined"
              btnFnc={() =>
                setUpdateTodo({
                  id: id,
                  title: title,
                  status: status ? true : false,
                })
              }
            />
          ) : null}

          <ButtonHoc
            btnName={<DeleteIcon />}
            btnVariant="contained"
            btnColor="error"
            // btnColor="none"
            btnStyle={{ minWidth: 0 }}
            btnFnc={() => deleteTodo(id)}
          />
        </Stack>
      </ListItem>
    </List>
  );
}

export default Todo;
