export function MenuResponsive({ activeMenu, sections, paths, icons }) {
    const classNameUl = {
        desk: "hidden lg:grid grid-cols-5 text-xl justify-center divide-x-[2px] divide-white",
        mobile: `absolute inset-x-0 top-full flex flex-col gap-4 text-normal lg:hidden transform origin-top transition-transform duration-300 ease-in-out ${activeMenu ? 'scale-y-100' : 'scale-y-0'}  bg-rosa-oscuro/75 p-4`
    }

    const classNameA = {
        desk: "flex font-medium justify-center items-center gap-1 rounded-sm border-rosa-claro hover:bg-rosa-oscuro px-2 py-1 transition duration-200 ease-in-out",
        mobile: "flex font-medium justify-center gap-1 border-x-2 rounded-sm bg-rosa/25 border-rosa-claro backdrop-blur-sm px-2 py-1"
    }

    return (
        <>
            <ul className={activeMenu ? classNameUl.mobile : classNameUl.desk}>
                {sections.map((section, i) => {
                    const path = paths[i];
                    const icon = icons[i];
                    return (

                        <li key={section}>
                            <a href={path} className={activeMenu ? classNameA.mobile : classNameA.desk}>
                                {icon}
                                {section}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}