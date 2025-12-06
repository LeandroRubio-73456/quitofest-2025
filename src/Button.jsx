export function Button({ text, section, onClick }) {
    const classMap = {
        rosa: 'bg-rosa border-rosa hover:bg-rosa-oscuro active:bg-rosa-claro focus:outline-rosa-oscuro',
        naranja: 'bg-naranja border-naranja hover:bg-naranja-oscuro active:bg-naranja-claro focus:outline-naranja-oscuro',
    };

    const colorClasses = classMap[section ? 'naranja' : 'rosa'];

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${colorClasses} text-white text-lg px-5 py-2 cursor-pointer rounded-4xl focus:outline-2 transition duration-200 ease-in-out hover:scale-105`}
        >
            {text}
        </button>
    );
}