const colorMappings = {
    amarillo: {
        active: 'bg-amarillo border-amarillo hover:bg-amarillo-oscuro active:bg-amarillo-claro focus:outline-amarillo-oscuro',
        inactive: 'bg-amarillo-transparente border-amarillo-transparente hover:bg-amarillo-oscuro active:bg-amarillo-claro focus:outline-amarillo-oscuro'
    },
    naranja: {
        active: 'bg-naranja border-naranja hover:bg-naranja-oscuro active:bg-naranja-claro focus:outline-naranja-oscuro',
        inactive: 'bg-naranja-transparente border-naranja-transparente hover:bg-naranja-oscuro active:bg-naranja-claro focus:outline-naranja-oscuro'
    },
    rosa: {
        active: 'bg-rosa border-rosa hover:bg-rosa-oscuro active:bg-rosa-claro focus:outline-rosa-oscuro',
        inactive: 'bg-rosa-transparente border-rosa-transparente hover:bg-rosa-oscuro active:bg-rosa-claro focus:outline-rosa-oscuro'
    },
    verde: {
        active: 'bg-verde border-verde hover:bg-verde-oscuro active:bg-verde-claro focus:outline-verde-oscuro',
        inactive: 'bg-verde-transparente border-verde-transparente hover:bg-verde-oscuro active:bg-verde-claro focus:outline-verde-oscuro'
    }
};

export function Button({ text, onClick, color, textWhite=true, isActive=true}) {

    const colorClasses = colorMappings[color]?.[isActive ? 'active' : 'inactive'] || '';

    const textColor = textWhite ? `text-white` : `text-oscuro`

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${colorClasses} ${textColor} lg:text-lg px-5 py-2 cursor-pointer rounded-4xl focus:outline-2 transition duration-200 ease-in-out hover:scale-105`}
        >
            {text}
        </button>
    );
}