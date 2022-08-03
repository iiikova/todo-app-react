import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchForm({
  searchItems,
  searchInput,
  filteredResults,
  cancelSearchTask,
}) {
  return (
    <Stack sx={{ display: "flex", marginBottom: 2 }}>
      <Stack
        sx={{
          display: "flex ",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextField
          id="filled-basic"
          label="search task..."
          variant="filled"
          value={searchInput}
          onChange={(e) => searchItems(e.target.value)}
          sx={{ width: 400 }}
        />
      </Stack>

      <div>
        {searchInput.length >= 1
          ? filteredResults.map((item) => {
              return (
                <div>
                  <div>
                    <div>{item.title}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </Stack>
  );
}

export default SearchForm;
