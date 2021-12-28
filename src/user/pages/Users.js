import React from "react";
import UsersList from "../UsersList";

const Users = () => {
  const USERS = [
    {
      id: "uid1",
      name: "Liana van Zyl",
      image:
        "https://drive.google.com/drive/u/1/folders/1kaqabtIwSWOkFZnDY-sVPkrQ4axctsi8",
    },
  ]; //dummy data until we have our API
  return <UsersList items={USERS} />;
};

export default Users;
