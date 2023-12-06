import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import "./Spinner.css";

function Spinner({ color, size }) {
  return (
    <div className='spinner'>
      <CircularProgress color={color} sx={{ "--CircularProgress-size": size }} />
    </div>
  );
}

export default Spinner;
