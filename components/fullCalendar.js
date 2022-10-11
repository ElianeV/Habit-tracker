import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

export default function FullCalendar({ habits }) {
  const startOfMonth = moment().startOf("month").add(-1, "days");
  const endOfMonth = moment().endOf("month");
  const options = { weekday: "short" };

  const dates = [];
  const currDate = moment(startOfMonth).startOf("day");
  const lastDate = moment(endOfMonth).startOf("day");
  while (currDate.add(1, "days").diff(lastDate) <= 0) {
    dates.push(currDate.clone().toDate());
  }

  return (
    <>
      <div className="w-2/3 h-5/6 overflow-x-scroll">
        <div className="w-400 h-5/6 ">
          <div className="h-16 p-1 border-b flex justify-around">
            {dates.map((date) => (
              <div key={date.getDate()}>
                <div>{date.toLocaleString(undefined, options)}</div>
                <div>{date.getDate()}</div>
              </div>
            ))}
          </div>
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
