import data from '../assets/data/data.json';
import { BandCard } from './BandCard.jsx'
import { useState } from "react";

export function TabDay() {
    const days = ['Viernes', 'Sábado', 'Domingo'];
    const [activeDay, setActiveDay] = useState(days[0]);
    const buttomActiveClassName = "cursor-pointer text-xl text-oscuro font-medium px-5 py-2 bg-amarillo rounded-4xl hover:bg-amarillo-oscuro active:bg-amarillo-claro focus:outline-2 focus:outline-amarillo-oscuro transition duration-300 ease-in-out hover:scale-105";
    const buttonInactiveClassName = "cursor-pointer text-xl text-oscuro/75 font-medium px-5 py-2 bg-amarillo-transparente rounded-4xl hover:text-oscuro/90 hover:bg-amarillo-oscuro active:bg-amarillo-claro focus:outline-2 focus:outline-amarillo-oscuro transition duration-300 ease-in-out hover:scale-105";
    const filteredBands = data.lineup.filter(band => band.day === activeDay)
        .sort((a, b) => a.time.localeCompare(b.time))

    function DayButtons({ days }) {
        return (
            <>
                {days.map((day) => (
                    <button
                        key={day}
                        type="button"
                        className={activeDay === day ? buttomActiveClassName : buttonInactiveClassName}
                        onClick={() => setActiveDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </>
        );
    }

    function BandFiltered() {
        return (
            <>
                {
                    filteredBands.map((band) => (
                            <BandCard
                                key={band.name}
                                nameBand={band.name}
                                country={band.country}
                                gender={band.genre}
                                time={band.time}
                            />
                    ))}
            </>
        )
    }
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-center bg-amarillo-transparente w-fit py-4 px-6 mb-5 rounded-br-lg rounded-tl-lg">
                <DayButtons days={days} />
            </div>
            <div className='p-5 flex flex-wrap justify-center gap-10 w-3/4 mx-auto'>
                <BandFiltered />
            </div>
        </>
    );
}