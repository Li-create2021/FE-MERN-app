import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "pid1",
    title: "Millennium",
    description: "Iconic skyscrapers in Bangkok",
    imageUrl: "https://i.ibb.co/7Jy9F8Y/millenniumresidencesukhumvit-2opt.jpg",
    address:
      "Sukhumvit 20 Alley, Khwaeng Khlong Toei, Khet Khlong Toei, Bangkok 10110, Thailand",
    location: {
      lat: 13.7297181,
      lng: 100.5605296,
    },
    creator: "uid1",
  },
  {
    id: "pid2",
    title: "Millennium",
    description: "Iconic skyscrapers in Bangkok",
    imageUrl: "https://i.ibb.co/7Jy9F8Y/millenniumresidencesukhumvit-2opt.jpg",
    address:
      "Sukhumvit 20 Alley, Khwaeng Khlong Toei, Khet Khlong Toei, Bangkok 10110, Thailand",
    location: {
      lat: 13.7297181,
      lng: 100.5605296,
    },
    creator: "uid2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
