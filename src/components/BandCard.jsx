export function BandCard({ nameBand, country, gender, time, color}) {

  const colorClass = `bg-${color}-transparente border-${color} text-${color}`;
  const colorClassTime = `bg-${color}-oscuro`

  return (
    <div className={`${colorClass} text-white relative w-fit h-fit p-4 rounded-br-lg rounded-tl-lg flex flex-col justify-center items-center text-center gap-2 border-t-8 oswald transition duration-200 ease-in-out hover:scale-110`}>
      {time && (
        <div className={`${colorClassTime} absolute -top-4 text-xs font-semibold px-3 py-1 rounded-sm text-white`}>
          Hora: {time}
        </div>
      )}
      <div className="flex flex-row items-end gap-1 uppercase">
        <h4 className="text-2xl font-semibold max-w-75">{nameBand}</h4>
        <p className="text-gray-300 oswaldd">({country})</p>
      </div>
      <span className={`${colorClass} font-black text-normal px-10 py-1 border-2 rounded-full`}>
        {gender}
      </span>
    </div>
  );
}
