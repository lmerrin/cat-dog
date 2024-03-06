import { cats } from "../../data";
import CatList from "../../Components/CatList";
import './Cats.css';

export default function Cats() {
  return (
    <div className="page students">
      <h1>Cats</h1>
      <CatList cats={cats} />
    </div>
  );
}
