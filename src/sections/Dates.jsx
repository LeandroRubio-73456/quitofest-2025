import { Text } from "../components/Text"
import { TabDay } from "../components/TabDay"

export function Dates() {
    return (
        <section id="dates" className="flex flex-col items-center">
            <h3 className="text-5xl lg:text-7xl text-amarillo py-10">Horarios por Día</h3>
            <Text text={"El evento se llevará a cabo durante 3 días: viernes 28, sábado 29 y domingo 30 de noviembre. Cada día contará con múltiples presentaciones en diferentes escenarios, permitiéndote disfrutar de la mejor música independiente latinoamericana de forma continua."}></Text>
            <div className="flex flex-col justify-center items-center mb-10">
                <TabDay />
            </div>
        </section>
    )
}