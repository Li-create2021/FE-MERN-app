import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Liana van Zyl",
      image: "https://i.ibb.co/F6hQS70/IMG-0974-opt-1.jpg",
      places: 3,
    },
  ]; //dummy data until we have our API
  return <UsersList items={USERS} />;
};

export default Users;
