import data from '../data/data.json';
import { BandCard } from './BandCard.jsx'
import { Button } from './Button.jsx';
import { useState } from "react";

export function TabDay() {
    const days = ['Viernes', 'Sábado', 'Domingo'];
    const colors = { "Viernes": "amarillo", "Sábado": "rosa", "Domingo": "verde" }
    const [activeDay, setActiveDay] = useState(days[0]);
    const filteredBands = data.lineup.filter(band => band.day === activeDay)
        .sort((a, b) => a.time.localeCompare(b.time))

    function DayButtons({ days, colors }) {
        return (
            <>
                {days.map((day) => {
                    return (
                        <Button
                            key={day}
                            text={day}
                            onClick={() => setActiveDay(day)}
                            color={colors[day]}
                            textWhite={false}
                            isActive={activeDay === day ? true : false}
                        >
                        </Button>
                    )
                })}
            </>
        );
    }

    function BandFiltered() {
        return (
            <>
                {
                    filteredBands.map((band) => {
                        return (
                            <BandCard
                                key={band.name}
                                nameBand={band.name}
                                country={band.country}
                                gender={band.genre}
                                time={band.time}
                                color={colors[activeDay]}
                            />
                        )
                    })}
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-center bg-amarillo-transparente w-fit py-4 px-6 mb-5 rounded-br-lg rounded-tl-lg">
                <DayButtons days={days} colors={colors} />
            </div>
            <div className='p-5 flex flex-wrap justify-center gap-10 w-3/4 mx-auto'>
                <BandFiltered />
            </div>
        </>
    );
}