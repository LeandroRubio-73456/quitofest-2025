import { MdOutlineHome } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdEvent } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";

export function Menu() {
    const sections = ['Inicio', 'Bandas', 'Horarios', 'Audiciones', 'Ubicación'];
    const paths = ['#', '#bands', '#dates', '#auditions', '#location'];
    const icons = [
        <MdOutlineHome className="size-6" />,
        <HiOutlineUserGroup className="size-6" />,
        <MdEvent className="size-6" />,
        <BiMicrophone  className="size-6" />,
        <MdOutlineLocationOn   className="size-6" />
    ];

    return (
        <>
            <header className="sticky top-0 shadow-lg z-50">
                <p className="bg-rosa/85 backdrop-blur-sm text-gray-200 text-sm text-center flex justify-center gap-1">ESTO ES UNA **VERSIÓN DEMO DE PORTAFOLIO** - Hecha con React y Tailwind CSS - <a href="https://github.com/LeandroRubio-73456/quitofest-2025" target="_blank" rel="noopener noreferrer" className="underline flex gap-1">Ver el Código Fuente <IoOpenOutline /></a></p>
                <nav className="flex flex-col justify-between items-center px-10 py-2 bg-rosa-oscuro/75 backdrop-blur-sm text-white">
                    <h1 className="text-3xl font-semibold"><a href="#">QuitoFest2025</a></h1>
                    <ul className="flex flex-wrap gap-4 text-normal">
                        {sections.map((section, i) => {
                            const path = paths[i] || '#';
                            const icon = icons[i] || icons[0];
                            return (
                                <li key={section}>
                                    <a href={path} className="flex flex-row font-medium items-center gap-1 border-x-2 rounded-sm bg-rosa-transparente border-rosa-claro hover:bg-rosa-oscuro px-2 py-1 transition duration-200 ease-in-out">
                                        {icon}
                                        {section}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </>
    );
}