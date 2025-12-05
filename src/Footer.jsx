import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export function Footer() {
    return (
        <footer className='bg-rosa-oscuro flex flex-col gap-5 items-center justify-center text-gray-200 p-5'>
            <div className="flex justify-around items-start w-full">


                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-4xl text-white">QuitoFest</h4>
                    <p className="mb-3">Música independiente, pasión inagotable.</p>
                    <div className="flex gap-5">
                        <a href="" className="w-fit h-fit rounded-full p-2 bg-oscuro/75">
                            <FaFacebookF className="size-8 fill-gray-200 " />
                        </a>
                        <a href="" className="w-fit h-fit rounded-full p-2 bg-oscuro/75">
                            <FaInstagram className="size-8 fill-gray-200 " />
                        </a>
                        <a href="" className="w-fit h-fit rounded-full p-2 bg-oscuro/75">
                            <FaXTwitter className="size-8 fill-gray-200 " />
                        </a>
                        <a href="" className="w-fit h-fit rounded-full p-2 bg-oscuro/75">
                            <FaTiktok className="size-8 fill-gray-200 " />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-2xl text-white">Enlaces</h4>
                    <a href="#">Inicio</a>
                    <a href="#bands">Bandas</a>
                    <a href="#dates">Horarios</a>
                    <a href="#auditions">Audiciones</a>
                    <a href="#location">Ubicacion</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-2xl text-white">Tecnología del Demo</h4>
                    <p className="flex items-center gap-2"> <FaReact className="size-6"/>Framework: React JS</p>
                    <p className="flex items-center gap-2"> <RiTailwindCssFill className="size-6"/>Estilos: Tailwind CSS</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-2xl text-white">Contacto</h4>
                    <p>Proyecto de Portafolio por Leandro Rubio</p>
                    <p>Email: leandrorubio456@gmail.com</p>
                </div>
            </div>
            <hr className='text-white w-9/10 mx-auto' />
            <p>© 2025 Quito Fest. Concepto de Portafolio.</p>
        </footer>
    )

}
