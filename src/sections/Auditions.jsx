import data from '../data/data.json';
import { Text } from "../components/Text"
import { BandCard } from "../components/BandCard"
import { Button } from "../components/Button"
import { List } from '../components/List';

function stateForm(){
    alert('¡Formulario cerrado!');
}

const li1 = [
    "Proyectos musicales ecuatorianos o con residencia legal en Ecuador.",
    "Géneros admitidos: cumbia, música tropical, world music, música tradicional, fusión, rap, indie, pop, rock, post punk, new wave, metal, heavy metal, punk y hardcore.",
    "Trayectoria comprobable: Emergentes: mínimo 5 años de actividad continua. Mediana trayectoria: entre 6 y 12 años de actividad continua.",
    "Repertorio original. No se aceptan versiones ni covers.",
    "Si es una agrupación, al menos el 50% de integrantes deben ser ecuatorianos o residentes legales.",
    "Todos los integrantes deben ser mayores de edad.",
    "La postulación debe hacerla un representante del proyecto o su manager."
]

const li2 = [
    "Proyectos que ya hayan participado en ediciones anteriores del Quitofest.",
    "Proyectos con integrantes menores de edad.",
    "Proyectos que no cumplan con los requisitos o envíen documentación incompleta.",
    "Proyectos con mensajes de odio, violencia o fines propagandísticos.",
    "Proyectos vinculados directamente a la organización o el jurado(o sus familiares hasta segundo grado)."
]

const li3 = [
    "Llena el formulario con tu dossier, press kit, rider técnico y stage plot.",
    "Asegúrate de cumplir con todos los requisitos",
    "Postula del 4 al 25 de julio (¡no te pases de la fecha!)."
]

export function Auditions() {
    return (
        <section id="auditions">
            <h3 className="text-5xl lg:text-7xl not-last:text-wrap text-naranja py-10">Ganadores de las audiciones 2025</h3>
            <Text text={"¡Ya tenemos a las 12 bandas seleccionadas para el Quitofest 2025! Ellas serán las encargadas de encender los escenarios con lo mejor de la música independiente nacional."}></Text>
            <div className="p-5 flex flex-wrap justify-center gap-10 w-5/6 mx-auto mb-10">
                {data.auditionsWinners.map((band) => (
                    <BandCard
                        key={band.name}
                        nameBand={band.name}
                        country={band.country}
                        gender={band.genre}
                        headliner={band.headliner}
                        color={`naranja`}
                    ></BandCard>
                ))}
            </div>

            <h4 className="text-3xl lg:text-5xl text-naranja mb-10">¿Quiénes pueden postular?</h4>
            <div className="w-fit rounded-xl mx-auto">
                <Text text={"Proyectos ecuatorianos emergentes de 1 a 5 años y de mediana trayectoria hasta 12 años, repertorio original y una propuesta sólida en géneros como rock, pop, metal, cumbia, fusión, indie, rap y más."}></Text>
            </div>

            <h4 className="text-3xl lg:text-5xl text-naranja mb-10">Requisitos clave</h4>
            <List arrayElements={li1} isOrdered={false}></List>

            <h4 className="text-3xl lg:text-5xl text-naranja mb-10">No pueden participar</h4>
            <List arrayElements={li2} isOrdered={false}></List>

            <h4 className="text-3xl lg:text-5xl text-naranja mb-10">¿Cómo postular?</h4>
            <List arrayElements={li3} isOrdered={true}></List>

            <div className="grid grid-cols-2 gap-5 h-fit mx-auto w-fit justify-center items-center text-center pb-10 max-w-8/10">
                <a href="https://www.musicajoven.org/basesquitofest2025.pdf" target='_blank' rel="noreferrer">
                    <Button text={"Leer las Bases"} color={`naranja`}  />
                </a>
                <a href="https://www.musicajoven.org/cronogramaconvocatoriaquitofest2025.pdf" target='_blank' rel="noreferrer">
                    <Button text={"Cronograma"} color={`naranja`}  />
                </a>

                <a href="#FormularioCerrado" className='col-start-1 col-end-3 w-fit mx-auto'>
                    <Button text={"Llenar Formulario"} color={`naranja`} onClick={stateForm} />
                </a>
            </div>
        </section>
    )
}