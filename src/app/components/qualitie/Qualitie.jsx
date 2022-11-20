import React from "react";

export const Qualitie = (props) => {
  return (
    <span key={props._id} className={`badge m-1 bg-${props.color}`}>
      {props.name}
    </span>
  );
};
