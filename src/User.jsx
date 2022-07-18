import { useEffect, useState } from "react";
import "./User.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import axios from "axios";

function User() {
  /** */
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  /** LOAD */
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  /** EDIT */
  const selectUser = (user) => {
    console.log(user);
    setUserSelected(user);
  };

  /** GET USERS */
  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  /** DELETE */
  const deleteUser = (id) => {
    alert("Removing");
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  /** DESELECT (null) */
  const deselect = () => setUserSelected(null);

  // console.log(users);

  /** */
  return (
    <>
      <header className="users__header">
        <p>CRUD Deliverable 4</p>
      </header>
      <main className="main">
        <UsersForm
          userSelected={userSelected}
          getUsers={getUsers}
          deselect={deselect}
        />
        <UsersList
          users={users}
          selectUser={selectUser}
          getUsers={getUsers}
          deleteUser={deleteUser}
        />
      </main>
    </>
  );
}

export default User;
