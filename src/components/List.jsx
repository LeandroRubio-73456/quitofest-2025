export function List({ arrayElements = [], isOrdered = true } = {}) {
    const listType = isOrdered ? 'list-decimal' : 'list-disc';

    return (
        <ul className={`${listType} list-inside text-lg gap-1 text-center text-gray-300 mb-8 py-4 px-4 max-w-8/10 lg:max-w-4/10 mx-auto border-2 border-dashed rounded-xl`}>
            {arrayElements.map((element, i) => (
                <li key={i} >
                    {element}
                </li>
            ))}
        </ul>
    );
}