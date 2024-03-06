import { dogs } from "../../data";
import DogList from "../../Components/DogList";
import './Dogs.css';

export default function Dogs() {
  return (
    <div className="page dogs">
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
