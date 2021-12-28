import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  return;
  <ul>
    {props.item.map((user) => {
      return (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          placeCount={user.places}
        />
      );
    })}
  </ul>;
};

export default UsersList;
