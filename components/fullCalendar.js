import moment from "moment";
import CalendarRow from "./calendarRow";

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
      <div className="w-2/3 h-5/6 mr-10 border-neutral-200 border-solid border-2 border-l-0 rounded-3xl rounded-l-none flex flex-col overflow-x-scroll">
        <div className="h-20 w-800 flex justify-around items-center text-center bg-violet-50">
          {dates.map((date) => (
            <div className="w-16" key={date.getDate()}>
              <div className="font-bold">
                {date.toLocaleString(undefined, options)}
              </div>
              <div className="text-xl">{date.getDate()}</div>
            </div>
          ))}
        </div>
        {habits.map((habit) => (
          <CalendarRow key={habit.id} habit={habit} dates={dates} />
        ))}
      </div>
    </>
  );
}
