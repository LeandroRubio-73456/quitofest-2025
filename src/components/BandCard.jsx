import { useState } from "react";

export function BandCard({ nameBand, country, gender, time, headliner }) {
  const classMap = {
    amarillo: 'bg-amarillo-transparente border-amarillo text-amarillo',
    verde: 'bg-verde-transparente border-verde text-verde',
    naranja: 'bg-naranja-transparente border-naranja text-naranja'
  };
  const [color, setColor] = useState('verde');
  function determineColor() {
    if (headliner) {
      return 'naranja';
    } else if (time) {
      return 'amarillo';
    } else {
      return 'verde';
    }
  }
  const colorClasses = classMap[determineColor()];
  return (
    <div className={`${colorClasses} text-white relative w-fit h-fit p-4 rounded-br-lg rounded-tl-lg flex flex-col justify-center items-center text-center gap-2 border-t-8 oswald transition duration-200 ease-in-out hover:scale-110`}>
      {time && (
        <div className="absolute -top-4 bg-amarillo-oscuro text-xs font-semibold px-3 py-1 rounded-sm">
          Hora: {time}
        </div>
      )}
      <div className="flex flex-row items-end gap-1 uppercase">
        <h4 className="text-2xl font-semibold max-w-75">{nameBand}</h4>
        <p className="text-gray-300 oswald">({country})</p>
      </div>
      <span className={`${colorClasses} font-black text-normal px-10 py-1 border-2 rounded-full`}>
        {gender}
      </span>
    </div>
  );
}
