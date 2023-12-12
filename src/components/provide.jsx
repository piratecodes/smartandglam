"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useReportWebVitals } from 'next/web-vitals'
import {onCLS, onFID, onLCP} from 'web-vitals'

export default function Providers({ children }) {
    const router = useRouter()

    useReportWebVitals((metric) => {
        onCLS(console.log);
        onFID(console.log);
        onLCP(console.log);
    })

    React.useEffect(()=>{

        //Prevent Right Click
        // document.addEventListener('contextmenu', (e) => e.preventDefault());

        //Prevent Passive listener
        // document.addEventListener('touchstart', (e) => e.preventDefault(), {passive: true});
        // document.addEventListener('touchmove', (e) => e.preventDefault(), {passive: true});
        // document.addEventListener('wheel', (e) => e.preventDefault(), {passive: true});

    },[router.reload])

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_Recaptcha_Site_Key} scriptProps={{ async: false, defer: false, appendTo: "head", nonce: undefined, }} >
            {children}
        </GoogleReCaptchaProvider>
    )
}
