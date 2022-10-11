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
      <div className="w-2/3 h-5/6 flex flex-col overflow-x-scroll">
        <div className="h-16 w-400 flex justify-between p-1 border-b">
          {dates.map((date) => (
            <div className="w-10" key={date.getDate()}>
              <div>{date.toLocaleString(undefined, options)}</div>
              <div>{date.getDate()}</div>
            </div>
          ))}
        </div>
        {habits.map((habit) => (
          <div key={habit.id} className="w-400 grow border-b"></div>
        ))}
      </div>
    </>
  );
}
