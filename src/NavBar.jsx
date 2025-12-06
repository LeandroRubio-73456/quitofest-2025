import { MdOutlineHome } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdEvent } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoOpenOutline, IoClose, IoMenu } from "react-icons/io5";

import { useState } from "react";

import { Button } from "./Button";
import { ElementMenu } from "./ElementMenu";

export function NavBar() {
    const sections = ['Inicio', 'Bandas', 'Horarios', 'Audiciones', 'Ubicación'];
    const paths = ['#', '#bands', '#dates', '#auditions', '#location'];
    const icons = [
        <MdOutlineHome className="size-6" />,
        <HiOutlineUserGroup className="size-6" />,
        <MdEvent className="size-6" />,
        <BiMicrophone className="size-6" />,
        <MdOutlineLocationOn className="size-6" />
    ];

    const [activeMenu, setActiveMenu] = useState(false);

    function activatedMenu() {
        setActiveMenu(!activeMenu)
    }

    return (
        <header className="sticky top-0 shadow-lg z-50">
            <p className="bg-rosa/85 backdrop-blur-sm text-gray-200 text-xs text-center flex justify-center gap-1 py-0.5">ESTO ES UNA **VERSIÓN DEMO DE PORTAFOLIO** - Hecha con React y Tailwind CSS - <a href="https://github.com/LeandroRubio-73456/quitofest-2025" target="_blank" rel="noopener noreferrer" className="underline flex gap-1">Ver el Código Fuente <IoOpenOutline className="size-10 lg:size-4"/></a></p>
            <nav className="flex flex-row justify-between items-center px-2 lg:px-10 py-2 bg-rosa-oscuro/75 backdrop-blur-sm text-white">
                <h1 className="text-3xl font-semibold"><a href="#">QuitoFest2025</a></h1>
                <div className="lg:hidden">
                    <Button text={activeMenu ? <IoClose className="size-6" /> : <IoMenu className="size-6" />} onClick={activatedMenu} />
                </div>
                <ElementMenu activeMenu={activeMenu} sections={sections} paths={paths} icons={icons}></ElementMenu>
            </nav>
        </header>
    );
}