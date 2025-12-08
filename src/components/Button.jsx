const colorVariants = {
    rosa: {
        active: "bg-rosa border-rosa",
        inactive: "bg-rosa-transparente border-rosa-transparente",
        hover: "hover:bg-rosa-oscuro",
        activeState: "active:bg-rosa-claro",
        outline: "focus:outline-rosa-oscuro"
    },

    amarillo: {
        active: "bg-amarillo border-amarillo",
        inactive: "bg-amarillo-transparente border-amarillo-transparente",
        hover: "hover:bg-amarillo-oscuro",
        activeState: "active:bg-amarillo-claro",
        outline: "focus:outline-amarillo-oscuro"
    },

    naranja: {
        active: "bg-naranja border-naranja",
        inactive: "bg-naranja-transparente border-naranja-transparente",
        hover: "hover:bg-naranja-oscuro",
        activeState: "active:bg-naranja-claro",
        outline: "focus:outline-naranja-oscuro"
    },

    verde: {
        active: "bg-verde border-verde",
        inactive: "bg-verde-transparente border-verde-transparente",
        hover: "hover:bg-verde-oscuro",
        activeState: "active:bg-verde-claro",
        outline: "focus:outline-verde-oscuro"
    },

};

const getColorClasses = (color, isActive) => {

    const v = colorVariants[color] || colorVariants["rosa"];

    const main = isActive ? v.active : v.inactive;

    return `${main} ${v.hover} ${v.activeState} ${v.outline}`;
};

export function Button({text, onClick, color, textWhite = true, isActive = true}) {

    const colorClasses = getColorClasses(color, isActive);
    const textColor = textWhite ? "text-white" : "text-oscuro";

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                ${colorClasses}
                ${textColor}
                lg:text-lg px-5 py-2 cursor-pointer rounded-4xl 
                focus:outline-2 transition duration-200 ease-in-out 
                hover:scale-105
            `}
        >
            {text}
        </button>
    );
}