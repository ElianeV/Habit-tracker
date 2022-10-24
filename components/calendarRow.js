import { useEffect, useState } from "react";

export default function CalendarRow({ habit, dates }) {
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/habit/${habit.id}`
      );
      const data = await res.json();
      setCompletedDays(data);
    }
    fetchData();
  }, [habit]);

  const toggleDay = async (date) => {
    // console.log(date.toUTCString());

    const day = {
      // Date was stored in db by one day off, needed to offset timezone (Prisma's fault!!!)
      date: new Date(
        Date.parse(date.toUTCString()) - date.getTimezoneOffset() * 60000
      ),
      habitId: habit.id,
    };
    console.log(day);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/days`, {
      method: "POST",
      body: JSON.stringify(day),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
  };

  return (
    <div className="w-800 flex justify-around text-center items-center grow border-t">
      {dates.map((date) => (
        <div className="w-16" key={date.getDate()}>
          <div
            className="w-16 h-12 m-auto border-neutral-200 border-solid border rounded-xl"
            onClick={() => toggleDay(date)}
          ></div>
        </div>
      ))}

      {/* {dates.map((day) =>
        completedDays.map((completedDay) => (
          <div className="w-10 p-1 border-l border-r" key={day.getDate()}>
            {new Date(completedDay.date).toDateString() ===
            day.toDateString() ? (
              <div className="w-full h-4 bg-red-200"></div>
            ) : (
              ""
            )}
          </div>
        ))
      )} */}
    </div>
  );
}
