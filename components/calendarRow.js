import { useEffect, useState } from "react";

export default function CalendarRow({ habit, dates }) {
  const [completedDays, setCompletedDays] = useState([]);
  useEffect(() => {
    console.log(habit);

    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/habit/${habit.id}`
      );
      const data = await res.json();
      setCompletedDays(data);
      console.log(data);
    }
    fetchData();
  }, [habit]);

  return (
    <div className="w-400 flex justify-between grow border-t">
      {dates.map((day) =>
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
      )}
    </div>
  );
}
