import {useState, useEffect} from "react";

export default function Clock(props) {

  const createClock = (timezone) => {
    const parsedUserTimezone = +Number.parseFloat(timezone);
    const hoursUserTimezone = Math.trunc(parsedUserTimezone);
    const minutesUserTimezone = (parsedUserTimezone % 1).toFixed(2) * 100;
    const date = new Date();
    const timezoneOffset = date.getTimezoneOffset();
    const hoursTimezoneOffset = Math.floor(timezoneOffset / 60);
    const minutesTimezoneOffset = timezoneOffset % 60;

    date.setHours(date.getHours() + hoursTimezoneOffset);
    date.setMinutes(date.getMinutes() + minutesTimezoneOffset);
    date.setHours(date.getHours() + hoursUserTimezone);
    date.setMinutes(date.getMinutes() + minutesUserTimezone);

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return [h, m, s]
  }

  const [time, setTime] = useState(createClock(props.timezone));

  useEffect(() => {
    setInterval(() => {
      setTime(createClock(props.timezone))
    }, 1000)
  }, [])

  return (
    <div className="clocks">
      <div className="clock" key={props.id}>
        <div className="clock-container">
          <div className="city">{props.city}</div>
          <div className="time">{`${time[0]}:${time[1]}:${time[2]}`}</div>
        </div>
        <span
          className="btn-delete"
          onClick={() => props.deleteClock(props.id)}
        >
              ✘
            </span>
      </div>
    </div>
  );
}
