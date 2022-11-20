import React from "react";
import { Qualitie } from "../qualitie/Qualitie";
import { Bookmark } from "../bookmark/Bookmark";

export const User = (props) => {
  return (
    <tr key={props._id}>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">
        {props.qualities.map((qualitie) => {
          return <Qualitie key={qualitie._id} {...qualitie} />;
        })}
      </td>
      <td className="align-middle">{props.profession.name}</td>
      <td className="align-middle">{props.completedMeetings}</td>
      <td className="align-middle">{props.rate}</td>
      <td className="align-middle"><Bookmark id={props._id} status={props.bookmark} toggle={props.onToggle}/></td>
      <td className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(props._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};
