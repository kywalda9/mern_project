import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire Sate Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Empire_State_Building_KA.jpg",
    address: "20 W 34th St, New York, NY 10001, Vereinigte Staaten",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Empire Sate Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Empire_State_Building_KA.jpg",
    address: "20 W 34th St, New York, NY 10001, Vereinigte Staaten",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },

  {
    id: "p3",
    title: "Drei Zinnen",
    description:
      "The Three Peaks are a striking mountain range in the Sesto Dolomites on the border between the Italian provinces of Belluno in the south and South Tyrol in the north. The highest point of the group is the 2999 m s.l.m. high Große Zinne.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/DreiZinnenP.jpg",
    address: "Schattenweg 2/I-39038 Innichen - Vierschach",
    location: {
      lat: 46.6181967,
      lng: 12.29490941,
    },
    creator: "u1",
    zoom: 11,
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
