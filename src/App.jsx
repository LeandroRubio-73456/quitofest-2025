import data from './data.json';
import { BandCard } from './BandCard.jsx'
import { TabDay } from './TabDay.jsx'
import { Menu } from './Menu.jsx'
import { HeroBanner } from './HeroBanner.jsx'
import { ScrollIndicator } from './ScrollIndicator.jsx'
import { BackgroundMask } from './BackgroundMask.jsx';
import { Text } from './Text.jsx';
import { Button } from './Button.jsx';
import { Footer } from './Footer.jsx';
import { Location } from './Location.jsx';

export const App = () => {
    return (
        <>
            <BackgroundMask />
            <Menu />
            <HeroBanner />
            <ScrollIndicator />
            <section id="bands">
                <h3 className="text-5xl text-verde py-10">Bandas</h3>
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
            <hr className='text-white w-5/6 mx-auto' />
            <section id="dates">
                <h3 className="text-5xl text-amarillo py-10">Horarios por Día</h3>
                <Text text={"El evento se llevará a cabo durante 3 días: viernes 28, sábado 29 y domingo 30 de noviembre. Cada día contará con múltiples presentaciones en diferentes escenarios, permitiéndote disfrutar de la mejor música independiente latinoamericana de forma continua."}></Text>
                <div className="flex flex-col justify-center items-center mb-10">
                    <TabDay />
                </div>
            </section>
            <hr className='text-white w-5/6 mx-auto' />
            <section id="auditions">
                <h3 className="text-5xl text-wrap text-naranja py-10">Ganadores de las audiciones 2025</h3>
                <Text text={"¡Ya tenemos a las 12 bandas seleccionadas para el Quitofest 2025! Ellas serán las encargadas de encender los escenarios con lo mejor de la música independiente nacional."}></Text>
                <div className="p-5 flex flex-wrap justify-center gap-10 w-5/6 mx-auto mb-10">
                    {data.auditionsWinners.map((band) => (
                        <BandCard
                            key={band.name}
                            nameBand={band.name}
                            country={band.country}
                            gender={band.genre}
                            headliner={band.headliner}
                        ></BandCard>
                    ))}
                </div>
                <h4 className="text-4xl text-naranja mb-10">¿Quiénes pueden postular?</h4>
                <div className="w-fit rounded-xl mx-auto">
                    <Text text={"Proyectos ecuatorianos emergentes de 1 a 5 años y de mediana trayectoria hasta 12 años, repertorio original y una propuesta sólida en géneros como rock, pop, metal, cumbia, fusión, indie, rap y más."}></Text>
                </div>
                <h4 className="text-4xl text-naranja mb-10">Requisitos clave</h4>
                <div className="w-fit rounded-xl mx-auto mb-10">
                    <ul className='list-disc list-inside text-lg text-gray-300 mb-8 py-4 px-4 max-w-3xl mx-auto border-2 border-dashed rounded-xl'>
                        <li>Proyectos musicales ecuatorianos o con residencia legal en Ecuador.</li>
                        <li>Géneros admitidos: cumbia, música tropical, world music, música tradicional, fusión, rap, indie, pop, rock, post punk, new wave, metal, heavy metal, punk y hardcore.</li>
                        <li>Trayectoria comprobable: Emergentes: mínimo 5 años de actividad continua. Mediana trayectoria: entre 6 y 12 años de actividad continua.</li>
                        <li>Repertorio original. No se aceptan versiones ni covers.</li>
                        <li>Si es una agrupación, al menos el 50% de integrantes deben ser ecuatorianos o residentes legales.</li>
                        <li>Todos los integrantes deben ser mayores de edad.</li>
                        <li>La postulación debe hacerla un representante del proyecto o su manager.</li>
                    </ul>
                </div>
                <h4 className="text-4xl text-naranja mb-10">No pueden participar</h4>
                <div className="w-fit rounded-xl mx-auto mb-10">
                    <ul className='list-disc list-inside text-lg text-gray-300 mb-8 py-4 px-4 max-w-3xl mx-auto border-2 border-dashed rounded-xl'>
                        <li>Proyectos que ya hayan participado en ediciones anteriores del Quitofest.</li>
                        <li>Proyectos con integrantes menores de edad.</li>
                        <li>Proyectos que no cumplan con los requisitos o envíen documentación incompleta.</li>
                        <li>Proyectos con mensajes de odio, violencia o fines propagandísticos.</li>
                        <li>Proyectos vinculados directamente a la organización o el jurado (o sus familiares hasta segundo grado).</li>
                    </ul>
                </div>
                <h4 className="text-4xl text-naranja mb-10">¿Cómo postular?</h4>
                <div className="w-fit rounded-xl mx-auto">
                    <ol className='list-decimal list-inside text-lg text-gray-300 mb-8 py-4 px-4 max-w-3xl mx-auto border-2 border-dashed rounded-xl'>
                        <li>Llena el formulario con tu dossier, press kit, rider técnico y stage plot.</li>
                        <li>Asegúrate de cumplir con todos los requisitos</li>
                        <li>Postula del 4 al 25 de julio (¡no te pases de la fecha!).</li>
                    </ol>
                </div>
                <div className="grid grid-cols-2 gap-5 h-fit mx-auto w-fit justify-center items-center text-center pb-10">
                    <a href="https://www.musicajoven.org/basesquitofest2025.pdf" target='_blank' rel="noreferrer">
                        <Button text={"Leer las Bases"} section />
                    </a>
                    <a href="https://www.musicajoven.org/cronogramaconvocatoriaquitofest2025.pdf" target='_blank' rel="noreferrer">
                        <Button text={"Cronograma"} section />
                    </a>
                    <a href="#FormularioCerrado" className='col-start-1 col-end-3 w-fit mx-auto'>
                        <Button text={"Llenar Formulario"} section />
                    </a>
                </div>
            </section>
            <hr className='text-white w-5/6 mx-auto' />
            <Location />
            <Footer></Footer>

        </>
    );
};