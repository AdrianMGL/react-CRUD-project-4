import React, { useState, useEffect } from "react";
import axios from "axios";
import "../User.css";

const UsersForm = ({ userSelected, getUsers, deselect }) => {
  /** */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  /** LOAD DATA EDIT  */
  useEffect(() => {
    if (userSelected !== null) {
      setFirstName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    } else {
      reset();
    }
  }, [userSelected]);

  /** */
  const submit = (e) => {
    e.preventDefault();
    //
    const userForm = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };

    if (userSelected !== null) {
      alert("Updating...");
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          userForm
        )
        .then(() => {
          reset();
          getUsers();
          deselect();
        })
        .catch((error) => console.log(error.response));
    } else {
      alert("registering user");
      axios
        .post("https://users-crud1.herokuapp.com/users/", userForm)
        .then(() => {
          getUsers();
          reset();
        })
        .catch((error) => console.log(error.response));
    }
  };

  /** RESET */
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };

  /** */
  const clean = () => {
    reset();
    deselect();
  };

  /** */
  return (
    <div className="container__form">
      <div className="wrapper__form">
        <div>
          <h2 className="title">
            {userSelected !== null ? "Edit" : "Add"} User
          </h2>
        </div>
        <form onSubmit={submit} className="form">
          <div className="input">
            <label htmlFor="first_name">
              <i className="bx bx-user bx-sm bx-tada-hover"></i>
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="first name"
            />
          </div>

          <div className="input">
            <label htmlFor="last_name">
              <i className="bx bx-user bx-sm bx-tada-hover"></i>
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last name"
            />
          </div>

          <div className="input">
            <label htmlFor="email">
              <i className="bx bx-envelope bx-sm bx-tada-hover"></i>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>

          <div className="input">
            <label htmlFor="password">
              <i className="bx bx-lock-alt bx-sm bx-tada-hover"></i>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              minLength={5}
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <div className="input">
            <label htmlFor="birthday">
              <i className="bx bx-cake bx-sm bx-tada-hover"></i>
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={birthday}
              required
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div className="group__btn-register">
            <button className="btn success ">
              {userSelected !== null ? "Update" : "Register"}
              <i className="bx bx-check bx-xs bx-tada-hover "></i>
            </button>

            {userSelected !== null && (
              <button
                type="button"
                onClick={clean}
                className="btn delete clean"
              >
                Cancel <i className="bx bx-trash bx-xs bx-tada-hover"></i>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersForm;
