import React from "react";
import { User } from "../user/User";

export const Users = (props) => {
  return (
    props.users.length > 0 && (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="table-primary">
            <th>Имя</th>
            <th>Качества</th>
            <th>Прфессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
            <th>Избранное</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return <User key={user._id} {...user} onDelete={props.onDelete} onToggle={props.onToggle} />;
          })}
        </tbody>
      </table>
    )
  );
};
