import { Button } from "./Button";
export function HeroBanner() {
    
    return (
        <>
            <section id="hero-banner">
                <div
                    className="bg-oscuro-transparente bg-[url(/src/assets/images/hero-banner.jpg)] bg-blend-multiply bg-cover bg-center">
                    <div className=" text-white py-46 flex justify-center">
                        <div
                            className="bg-oscuro-transparente p-5 px-10 rounded-xl flex flex-col justify-center items-center text-center w-fit">
                            <h2 className="text-7xl">QuitoFest</h2>
                            <p className="text-xl text-wrap mb-5">XXII FESTIVAL INTERNACIONAL DE MÚSICA INDEPENDIENTE</p>
                            <a href="#dates">
                                <Button text={"Ver Horarios por Día"} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}