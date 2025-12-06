export function Text({text}) {
    return (
        <>
            <p className="text-lg text-center text-gray-300 mb-8 py-4 px-4 max-w-8/10 mx-auto border-2 border-dashed rounded-xl">
                {text}
            </p>
        </>
    );
}