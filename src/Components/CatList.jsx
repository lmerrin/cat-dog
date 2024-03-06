function CatCard({ cat }) {
    return (
      <div className="cat-card">
        <h2>{cat.name}</h2>
        <p>Age: {cat.age}</p>
        <p>Breed: {cat.color}</p>
      </div>
    );
  }
  
  export default function CatList({ cats }) {
    return (
      <div className="cat-list">
        {cats.map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
    );
  }