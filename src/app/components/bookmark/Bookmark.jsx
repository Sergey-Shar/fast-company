import React from "react";

export const Bookmark = (props) => {
  const changeClasses = () => {
    return props.status ? "bi-bookmark-heart-fill" : "bi-bookmark";
  };

  return <i className={`bi ${changeClasses()}`} onClick={() => props.toggle(props.id)}></i>;
};
