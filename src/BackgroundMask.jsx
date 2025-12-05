export const BackgroundMask = () => {

    const volt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzI2MjYyNiIgc3Ryb2tlPSJub25lIj48cGF0aCBkPSJNMTMgM3Y4aDdsLTggMTJ2LThoLTd6Ii8+PC9zdmc+";

    return (
        // Aplicamos posicionamiento absoluto y -z-index para enviarlo al fondo.
        <div 
            className="absolute inset-0 w-full h-full -z-10" 
            style={{
                backgroundColor: '#13090CFF', 
                minHeight: '100%',

                maskImage: `url('${volt}')`, 
                WebkitMaskImage: `url('${volt}')`,
                maskRepeat: 'repeat',
                WebkitMaskRepeat: 'repeat',
                maskSize: '50px 50px',
                WebkitMaskSize: '50px 50px',
            }}
        />
    );
};