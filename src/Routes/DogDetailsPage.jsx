import React from 'react'
import { dogs } from '../data';
import { useParams } from "react-router";

export default function DogDetailsPage() {
const params = useParams();
const dogId = Number(params.dogId);

const singleDog = dogs.find((dog) => dog.id === dogId);
  return (
    <div className="page">
    <h2>Cat Details</h2>
    <p>Name: {singleDog.name}</p>
    <p>Breed: {singleDog.breed}</p>
    <p>Age: {singleDog.age}</p>
  </div>
  )
}


