import React, { useState, useMemo } from "react";
import Todo from "../components/Todo";

import ButtonHoc from "../components/ButtonHOC";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// UI
import { Stack } from "@mui/material";
import InputForm from "../components/InputForm";
import UpdateForm from "../components/UploadForm";
import SearchForm from "../components/SearchForm";

function TodosPage() {
  // state
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy coffee beans", status: false },
    { id: 2, title: "Buy cleaning kits", status: false },
    { id: 3, title: "Publish a new blog post", status: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [sortTodos, setSortTodos] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // function
  const addTask = (e) => {
    e.preventDefault();
    let num = todos.length + 1;
    if (newTask === "") {
      return null;
    }
    const task = {
      id: num,
      title: newTask,
      status: false,
    };
    setTodos([...todos, task]);
    setNewTask("");
  };

  const changeTask = (e) => {
    let newT = {
      id: updateTodo.id,
      title: e.target.value,
      status: updateTodo.status ? true : false,
    };
    setUpdateTodo(newT);
    console.log(newT);
  };

  const updateTask = () => {
    let filterRecords = [...todos].filter((task) => task.id !== updateTodo.id);
    let filteredObj = [...filterRecords, updateTodo];
    setTodos(filteredObj);
    setUpdateTodo("");
  };

  const sortTaskA = () => {
    const sort = todos.sort(
      (a, b) => (a.title > b.title ? 1 : -1) && (a.title > b.title ? 1 : -1)
    );

    setSortTodos([...todos, sort]);
  };

  const sortTaskB = () => {
    const sort = todos.sort(
      (a, b) => (b.title < a.title ? 1 : -1) && (b.title > a.title ? 1 : -1)
    );
    setSortTodos([...todos, sort]);
  };

  const cancelUpdateTask = () => {
    setUpdateTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const check = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });

    setTodos(newTodos);
    console.log(newTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = todos.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setTodos(filteredData);
    }
  };

  const cancelSearchTask = () => {
    setSearchInput("");
  };

  return (
    <Stack
      sx={{
        width: 400,
        display: "flex ",
        flexDirection: "column",
      }}
      className="app"
    >
      <h1 style={{ margin: "20px 0", paddingTop: 2 }}>Todo list app</h1>

      <SearchForm
        searchItems={searchItems}
        searchInput={searchInput}
        filteredResults={filteredResults}
        cancelSearchTask={cancelSearchTask}
      />

      {updateTodo && updateTodo.title ? (
        <>
          <UpdateForm
            updateTodo={updateTodo}
            setUpdateTodo={setUpdateTodo}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdateTask={cancelUpdateTask}
          />
        </>
      ) : (
        <>
          <InputForm
            addTask={addTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </>
      )}

      {todos.map((todo) => {
        return (
          <Todo
            id={todo.id}
            title={todo.title}
            status={todo.status}
            deleteTodo={deleteTodo}
            check={check}
            setUpdateTodo={setUpdateTodo}
          />
        );
      })}

      <Stack
        sx={{
          display: "flex ",
          flexDirection: "row",
          marginTop: 1,
        }}
      >
        {todos.length > 0 ? (
          <>
            <FormControl sx={{ marginRight: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Sort</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Sort"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem onClick={sortTaskA} value={10}>
                  A-Z
                </MenuItem>
                <MenuItem onClick={sortTaskB} value={20}>
                  Z-A
                </MenuItem>
              </Select>
            </FormControl>

            <ButtonHoc
              btnName={<DeleteForeverIcon sx={{ minWidth: 0 }} />}
              btnVariant="contained"
              btnColor="error"
              btnFnc={deleteAll}
            />
          </>
        ) : (
          <p style={{ margin: 10 }}> No todos...</p>
        )}
      </Stack>
    </Stack>
  );
}

export default TodosPage;
