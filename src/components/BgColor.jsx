import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeBg } from "../actions/bgColorAction";
const BgColor = () => {
  const color = useSelector((state) => state.color);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: color }}>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(changeBg());
        }}
      >
        change
      </button>
    </div>
  );
};

export default BgColor;
