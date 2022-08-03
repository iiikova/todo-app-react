import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Check({ status, check, id }) {
  return (
    <div
      onClick={() => check(id)}
      className={`${status}  ? 'checkbox' : 'check'`}
    >
      <p>0</p>
    </div>
  );
}

export default Check;
