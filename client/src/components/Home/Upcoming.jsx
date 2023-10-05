import { useEffect, useState } from "react";

const Upcoming = () => {
  const eventTime = new Date("10/24/2023").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "",
    minutes: "",
    hours: "",
    seconds: "",
  });

  useEffect(() => {
    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const interval = eventTime - currentTime;
      const days = Math.floor(interval / (1000 * 3600 * 24));
      const hours = Math.floor((interval % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((interval % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((interval % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="upcoming bg-cover h-72 px-10 py-5 flex justify-between">
      <div className="flex flex-col justify-center h-full">
        <div className="text-7xl font-bold py-5">
          <h1>Upcoming</h1>
          <h1>Event</h1>
        </div>
        <button className="primary-btn">Explore →</button>
      </div>

      <div className="flex justify-center items-center w-52">
        <a href="#">
          <img
            src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1696503592/cblpu/rhxqxqednjpk6hadf42z.png"
            alt="CodingBlocksLPU logo"
            className="rounded-full animate-pulse"
          />
        </a>
      </div>

      <div className="flex flex-col items-center h-full">
        <p className="text-5xl font-bold p-4">Pagal ka birthday</p>
        <div className="flex justify-center w-96 h-3/5">
          <div className="timeContainer">
            <div className="timeBox">
              <p className="time">{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <p>:</p>
          </div>
          <div className="timeContainer">
            <div className="timeBox">
              <p className="time">{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <p>:</p>
          </div>
          <div className="timeContainer">
            <div className="timeBox">
              <p className="time">{timeLeft.minutes}</p>
              <p>Minutes</p>
            </div>
            <p>:</p>
          </div>
          <div className="timeContainer">
            <div className="timeBox">
              <p className="time">{timeLeft.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
