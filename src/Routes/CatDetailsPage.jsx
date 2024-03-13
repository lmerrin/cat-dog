import React from "react";
import { cats } from "../data";
import { useParams } from "react-router";

export default function CatDetailsPage() {
  const params = useParams();
  const catId = Number(params.catId);

  const singleCat = cats.find((cat) => cat.id === catId);

  return (
    <div className="page">
      <h2>Cat Details</h2>
      <p>Name: {singleCat.name}</p>
      <p>Breed: {singleCat.breed}</p>
      <p>Age: {singleCat.age}</p>
    </div>
  );
}
