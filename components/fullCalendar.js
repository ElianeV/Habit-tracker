import moment from "moment";
import { useEffect } from "react";

export default function FullCalendar({ habits }) {
  const startOfMonth = moment().startOf("month").add(-1, "days");
  const endOfMonth = moment().endOf("month");

  const enumerateDaysBetweenDates = function (startDate, endDate) {
    const dates = [];

    const currDate = moment(startDate).startOf("day");
    const lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) <= 0) {
      dates.push(currDate.clone().toDate());
    }

    return dates;
  };

  useEffect(() => {
    console.log(enumerateDaysBetweenDates(startOfMonth, endOfMonth));
  }, []);
  return (
    <>
      <div className="w-2/3 h-5/6 overflow-x-scroll">
        <div className="w-400 h-5/6 ">
          <div className="h-16 p-1 border-b flex justify-around"></div>
          <div className="h-5/6 flex flex-col">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="w-full grow p-3 flex items-center justify-between border-b"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
