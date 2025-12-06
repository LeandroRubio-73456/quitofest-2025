import { NavBar } from './NavBar.jsx'
import { HeroBanner } from './HeroBanner.jsx'
import { ScrollIndicator } from './ScrollIndicator.jsx'
import { BackgroundMask } from './BackgroundMask.jsx';
import { Footer } from './Footer.jsx';
import { Location } from './Location.jsx';
import { Bands } from './Bands.jsx';
import { Dates } from './Dates.jsx';
import { Auditions } from './Auditions.jsx';

export const App = () => {
    return (
        <>
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