const getColorClasses = (color, isActive) => {
    const baseClasses = `hover:bg-${color}-oscuro active:bg-${color}-claro focus:outline-${color}-oscuro`;
    return isActive
        ? `bg-${color} border-${color} ${baseClasses}`
        : `bg-${color}-transparente border-${color}-transparente ${baseClasses}`;
};

export function Button({ text, onClick, color, textWhite=true, isActive=true}) {

    const colorClasses = getColorClasses(color, isActive);

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