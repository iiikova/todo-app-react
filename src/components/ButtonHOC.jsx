import React from "react";
import { Button } from "@mui/material";

function ButtonHOC({ btnName, btnFnc, btnStyle, btnVariant, btnColor }) {
  return (
    <Button
      size="small"
      type={"submit"}
      sx={btnStyle}
      variant={btnVariant}
      color={btnColor}
      onClick={btnFnc}
    >
      {btnName}
    </Button>
  );
}

export default ButtonHOC;
