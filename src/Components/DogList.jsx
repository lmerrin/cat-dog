function DogCard({ dog }) {
    return (
      <div className="dog-card">
        <h2>{dog.name}</h2>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
      </div>
    );
  }
  
  export default function DogList({ dogs }) {
    return (
      <div className="dog-list">
        {dogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </div>
    );
  }