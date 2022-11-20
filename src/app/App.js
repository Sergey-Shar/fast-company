import React, { useState } from "react";
import { Users } from "./components/users/Users";
import { fetchAll } from "./api";
import { SearchStatus } from "./components/searchStatus/SearchStatus";

const App = () => {
  const [users, setUsers] = useState(fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    const updateUsers = users.map((user) =>
      user._id === id ? { ...user, bookmark: !user.bookmark } : user
    );
    setUsers(updateUsers);
  };

  return (
    <div className="wrapper">
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggle={handleToggleBookmark}
      />
    </div>
  );
};
export default App;
