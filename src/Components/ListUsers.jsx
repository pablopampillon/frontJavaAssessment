import React from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./ListUsers.css";

const ListUsers = (props) => {
  let [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/users")
      .then((res) => {
        console.log("DATOS");
        setListUsers(res.data);
      })
      .catch((err) => console.log("datos"));
  }, []);

  return (
    <div className="listUsers">
      {listUsers.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default ListUsers;
