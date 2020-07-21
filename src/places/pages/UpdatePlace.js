import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

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
  {
    id: "p4",
    title: "Geierlay Bridge",
    description:
      "TThe Geierlay is a suspension bridge in the low mountain range of the Hunsrück in central Germany. It was opened in 2015.[1] It has a span range of 360 metres (1,180 ft) and is up to 100 metres (330 ft) above ground.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DE-Geierlay-02.jpg/800px-DE-Geierlay-02.jpg",
    address: "56290 Mörsdorf",
    location: {
      lat: 50.0899875,
      lng: 7.3389717,
    },
    creator: "u1",
    zoom: 17,
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
