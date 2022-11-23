import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Link from 'next/link';

const Landing = () => {
    if(isBrowser){
        return (
            <BrowserView>
                <div>
                    <Link href={'/es'}>
                    Bienvenido Browser
                    </Link>
                </div>
            </BrowserView>
        )
    }
    else {
        return (
            <MobileView>
                <div>
                    <Link href={'/es'}>
                    Bienvenido Mobile
                    </Link>
                </div>
            </MobileView> 
         );
    }
}
 
export default Landing;