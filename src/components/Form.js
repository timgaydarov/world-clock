import {useState} from "react";

export default function Form(props) {
  const initialFormState = {id: null, city: "", timezone: "", time: ""}
  const [clock, setClock] = useState(initialFormState);

  const handleInputChange = (event) => {
    const {name, value} = event.currentTarget;
    setClock({...clock, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    setClock(initialFormState);
    props.addClock(clock);
  }


  return (<form className="form-container" onSubmit={handleSubmit}>
      <div>
        <div className="title">Название</div>
        <input
          className="input-style"
          type="text"
          name="city"
          value={clock.city}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <div className="title">Временная зона</div>
        <input
          className="input-style"
          type="number"
          name="timezone"
          value={clock.timezone}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="ok-btn">Добавить</button>
    </form>);
}

