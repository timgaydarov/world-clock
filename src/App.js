import './App.css';
import {useState} from "react";
import {nanoid} from 'nanoid'
import Form from "./components/Form";
import Clock from "./components/Clock";


export default function App() {
  const [clocks, setClocks] = useState([]);

  const addClock = (clock) => {
    setClocks(prevState => [...prevState, {
      id: nanoid(),
      city: clock.city,
      timezone: clock.timezone,
    }]);
  };

  const deleteClock = (id) => {
    setClocks(clocks.filter((workout) => workout.id !== id));
  };

  return (
    <div className="App">
      <Form addClock={addClock}/>
      <div className="clock-wrapper">
        {clocks.map((clock) => {
          return (
            <Clock
              key={clock.id}
              id={clock.id}
              city={clock.city}
              timezone={clock.timezone}
              deleteClock={deleteClock}
            />
          );
        })}
      </div>
    </div>
  );
}

