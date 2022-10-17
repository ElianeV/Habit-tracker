export default function Habitcontainer({ habits }) {
  return (
    <>
      <div className="w-1/3 h-5/6 ml-10 border-neutral-200 border-solid border-2 border-r-0 rounded-3xl rounded-r-none shadow-lg flex flex-col overflow-hidden">
        <div className="h-20 pl-12 pr-4 flex justify-between items-center bg-gradient-to-r from-violet-500 to-violet-50">
          <div className="text-2xl text-neutral-800">My habits</div>
          <div>
            <p className="text-right text-xl text-neutral-800">
              {new Date().toLocaleString("default", { month: "long" })}
            </p>
            <p className="text-right font-bold text-neutral-700">
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="w-full grow p-3 flex items-center justify-between border-t"
          >
            <div className="w-8 h-8 mr-1 bg-black"></div>
            <div className="w-18 grow">
              <span className="bg-gradient-to-r from-amber-100 to-amber-100 bg-no-repeat bg-[length:100%_70%] bg-[center_top_0.5rem] text-neutral-800">
                {habit.name}
              </span>
            </div>
            <div className="text-neutral-300 mr-1">4/100 days</div>
          </div>
        ))}
      </div>
    </>
  );
}
