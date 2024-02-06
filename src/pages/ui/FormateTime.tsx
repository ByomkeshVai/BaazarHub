import { useEffect, useState } from "react";
import { formatTime } from "../../utils/formateTime";

type CountdownState = number;
type SetCountdown = React.Dispatch<React.SetStateAction<CountdownState>>;
const FormateTime = () => {
  const [countdown, setCountdown]: [CountdownState, SetCountdown] = useState(0);

  const calculateTimeLeft = (): number => {
    const now: Date = new Date();
    const targetTime: Date = new Date(now);
    targetTime.setHours(24, 0, 0, 0); // Set target time to the next day at 00:00:00
    const timeLeft: number = targetTime.getTime() - now.getTime();
    return timeLeft;
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      const timeLeft: number = calculateTimeLeft();
      setCountdown(timeLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex items-center justify-center ">
      <h2 className="p-2 mr-5 font-semibold lg:text-xl text-xm bg-gradient-to-r text-slate-900 rounded-xl">
        Offer Ends In
      </h2>
      <div className="flex items-center justify-center gap-2 lg:gap-5">
        <div className="p-2 bg-red-600 border-2 text-slate-50 rounded-xl">
          <span className="font-mono countdown text-md lg:text-2xl">
            {formatTime(countdown).split(":")[0]}
          </span>
        </div>
        <div className="p-2 bg-red-600 border-2 text-slate-50 rounded-xl">
          <span className="font-mono countdown text-md lg:text-2xl">
            {formatTime(countdown).split(":")[1]}
          </span>
        </div>
        <div className="p-2 bg-red-600 border-2 text-slate-50 rounded-xl">
          <span className="font-mono countdown text-md lg:text-2xl">
            {formatTime(countdown).split(":")[2]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormateTime;
