import data from '../assets/data/data.json';
import { BandCard } from '../components/BandCard';
import { Text } from '../components/Text';

export function Bands() {
    return (
        <section id="bands" className='flex flex-col items-center'>
            <h3 className="text-5xl lg:text-7xl text-verde py-10">Bandas</h3>
            <Text text={"Estas son todas las bandas que se presentarán en el QuitoFest 2025. Desde artistas nacionales hasta reconocidas agrupaciones internacionales, cada una traerá su mejor propuesta musical para hacer de este festival una experiencia inolvidable."}></Text>
            <div className="p-5 flex flex-wrap justify-center gap-10 w-5/6 mx-auto mb-10">
                {data.lineup.map((band) => (
                    <BandCard
                        key={band.name}
                        nameBand={band.name}
                        country={band.country}
                        gender={band.genre}
                    />
                ))}
            </div>
        </section>
    )
}
