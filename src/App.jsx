import { NavBar } from './sections/NavBar.jsx'
import { HeroBanner } from './sections/HeroBanner.jsx'
import { ScrollIndicator } from './components/ScrollIndicator.jsx'
import { BackgroundMask } from './components/BackgroundMask.jsx';
import { Footer } from './sections/Footer.jsx';
import { Location } from './sections/Location.jsx';
import { Bands } from './sections/Bands.jsx';
import { Dates } from './sections/Dates.jsx';
import { Auditions } from './sections/Auditions.jsx';
import { ColorVariants } from './components/ColorsVariants.jsx';

export const App = () => {
    return (
        <>
            <ColorVariants></ColorVariants>
            <BackgroundMask />
            <NavBar />
            <HeroBanner />
            <ScrollIndicator />
            <Bands/>
            <hr className='text-white w-5/6 mx-auto' />
            <Dates/>
            <hr className='text-white w-5/6 mx-auto' />
            <Auditions/>
            <hr className='text-white w-5/6 mx-auto' />
            <Location />
            <Footer></Footer>
        </>
    );
};