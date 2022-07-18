import React from "react";
import UserImage from "./UserImage";

const UsersList = ({ users, selectUser, deleteUser }) => {
  return (
    <div className="container__list">
      <div>
      </div>
      <div className="wrapper__list">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div className="card__header">
              <figure>
              <UserImage/>
              </figure>
            </div>
            <div className="card__body">
              <h5>
                <i className="bx bxs-user bx-xs bx-tada-hover"></i>
                {user.first_name} {user.last_name}
              </h5>
              <h5>
                <i className="bx bxs-envelope bx-xs bx-tada-hover"></i>
                {user.email}
              </h5>
              <h5>
                <i className="bx bxs-cake bx-xs bx-tada-hover"></i>
                {user.birthday}
              </h5>
            </div>
            <div className="card__footer">
              <div className="group__btn-list">
                <button onClick={() => selectUser(user)} className="btn edit">
                  Edit{" "}
                  <i className="bx bx-edit-alt bx-xs bx-flashing-hover"></i>
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn delete"
                >
                  Delete <i className="bx bx-trash bx-xs bx-tada-hover"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
