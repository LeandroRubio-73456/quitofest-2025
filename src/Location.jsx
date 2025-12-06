import { Text } from "./Text";
export function Location() {
    return (
        <section id='location' className="flex flex-col justify-center items-center pb-10">

            <h3 className="text-7xl text-rosa py-10">Ubicación</h3>
            <Text text={"Los conciertos se celebran en el icónico Parque Bicentenario de Quito. ¡Te esperamos!"}></Text>
            <iframe className="rounded-lg shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5642.4361276272775!2d-78.48897151851027!3d-0.14889448590975707!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1764958734800!5m2!1ses!2sec" width="850" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
}