export function Text({text}) {
    return (
        <>
            <p className="text-lg text-gray-300 mb-8 py-4 px-4 max-w-2/3 mx-auto border-2 border-dashed rounded-xl">
                {text}
            </p>
        </>
    );
}