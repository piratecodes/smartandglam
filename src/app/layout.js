import '@/style/globals.css'

import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { SpeedInsights } from "@vercel/speed-insights/next"

const corGar = Cormorant_Garamond({ subsets: ['latin'], weight: "400" })

import Provider from '@/components/provide'

import Header from '@/components/nav'
import Footer from '@/components/footer'

export const metadata = {
  metadataBase: new URL("https://smartandglam.com"),
  charSet: 'UTF-8',
  title: {
    template: 'Smart and Glam - %s',
    default: 'Smart and Glam - Unleash your inner beauty, one style at a time.',
  },
  description: 'Smart and Glam Family Salon is your one-stop shop for all your beauty needs! We offer a wide range of services for the whole family, from haircuts and hairdressing to hair straightening, braidal makeup, hair spa, party makeup, botox treatment, and much more.',
  manifest: '/manifest.webmanifest',
  keywords: "Family Salon, unisex Salon, Makeup, Facial, Smart and Glam, Family Beauty Parlour, Hair dreasser",
  alternates: {
    canonical: `https://www.smartandglam.com`,
  },
  openGraph: {
    locale: "en_US",
    url: 'https://smartandglam.com',
    title: 'Smart and Glam Family Salon',
    type: 'website',
    siteName: "Smart and Glam",
    description: 'Smart and Glam Family Salon is your one-stop shop for all your beauty needs! We offer a wide range of services for the whole family, from haircuts and hairdressing to hair straightening, braidal makeup, hair spa, party makeup, botox treatment, and much more.',
    images: [
      {url: "https://smartandglam.com/icon-192x192.png", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"192x192", fetchPriority: "auto"},
      {url: "https://smartandglam.com/icon-512x512.png", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"512x512", fetchPriority: "auto"}
    ],
  },
  // twitter:{
  //   card: "@SeoCandle1",
  //   title: 'Smart and Glam Family Salon',
  //   creator: "Subham Sarkar",
  //   description: 'Smart and Glam Family Salon is your one-stop shop for all your beauty needs! We offer a wide range of services for the whole family, from haircuts and hairdressing to hair straightening, braidal makeup, hair spa, party makeup, botox treatment, and much more.',
  //   images: [
  //     {url: "https://smartandglam.com/icons/icon-192x192.png", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"192x192", fetchPriority: "auto"},
  //     {url: "https://smartandglam.com/icons/icon-512x512.png", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"512x512", fetchPriority: "auto"}
  //   ],
  // },
  icons:{
    icon: [
      {url: '/favicon.ico', type: "image/x-icon", rel:"icon", fetchPriority: "auto"},
    ],
    shortcut: [
      {url: '/favicon.ico', type: "image/x-icon", rel:"icon", fetchPriority: "high"},
      {url: 'icon-192x192.png', type: "image/png", sizes:"192x92", rel:"icon", fetchPriority: "auto"},
      {url: 'icon-256x256.png', type: "image/png", sizes:"256x256", rel:"icon", fetchPriority: "auto"},
      {url: 'icon-1384x384.png', type: "image/png", sizes:"384x384", rel:"icon", fetchPriority: "auto"},
      {url: 'icon-512x512.png', type: "image/png", sizes:"512x512", rel:"icon", fetchPriority: "auto"},
    ],
  }

}

export const viewport = {
  themeColor: '#e5e5e5',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: 'yes',
}

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "http://www.schema.org",
    "@type": "BeautySalon",
    "name": "Smart and Glam",
    "url": "https://smartandglam.com",
    "logo": "https://smartandglam.com/icon-256x256.png",
    "priceRange": "$",
    "image": "https://smartandglam.com/assets/cover.webp",
    "description": "Smart and Glam Family Salon is your one-stop shop for all your beauty needs! We offer a wide range of services for the whole family, from haircuts and hairdressing to hair straightening, braidal makeup, hair spa, party makeup, botox treatment, and much more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Purbasha Ln No.2, Kalyani Highway,",
      "addressLocality": "Barrackpore",
      "addressRegion": "West Bengal",
      "postalCode": "700122",
      "addressCountry": "IN"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Subham Sarkar"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.773796",
      "longitude": "88.389594"
    },
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7730948285857!2d88.38701907592207!3d22.773800525564955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b007e84a3ef%3A0x73f822ca9fb28658!2sSmart%20And%20Glam%20Family%20Saloon!5e0!3m2!1sen!2sin!4v1702330675274!5m2!1sen!2sin",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
      "opens": "09:30",
      "closes": "21:00"
    },
    "telephone": "+91 9143491413",
    "sameAs": "https://www.facebook.com/Smartandglam2018"

  }
  return (
      <html lang="en">
      <head>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <Script id="tag_manager_index" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MeasurementId_ga}`} />
        <Script id="tag_manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTMId}');`}} />


        {/*jsonLd*/}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>


        {/*Browser update Setup*/}
        <Script id={`browser-update`} dangerouslySetInnerHTML={{__html: `
            let $buoop = {required:{e:-2,f:-2,o:-2,s:-1,c:-2},insecure:true,style:"bottom",api:2023.12 }; 
            function $buo_f(){ 
             let e = document.createElement("script"); 
             e.src = "//browser-update.org/update.min.js"; 
             document.body.appendChild(e);
            };
            try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
            catch(e){window.attachEvent("onload", $buo_f)}
        `}} />

        {/* Meta Pixel Install  */}
        <Script id={`meta-pixel-install`} dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '180743698099406');
          fbq('track', 'PageView'); 
        `}} />
        <noscript><Image className={`hidden`} height="1" width="1" src="https://www.facebook.com/tr?id=180743698099406&ev=PageView&noscript=1"/></noscript>

      </head>
      <body className={"bg-gradient-to-r from-green-600 via-neutral-300 to-green-700 overflow-x-hidden scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-blue-gray-100 scroll-smooth " + corGar.className}>
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe loading="lazy" src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTMId}`} className='hidden invisible' height="0" width="0"></iframe></noscript>

      {/* Google Analitics */}
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MeasurementId_ga}`} />
      <Provider>
        <NextTopLoader   color="#46CB18"   initialPosition={0.08}   crawlSpeed={200}   height={3}   crawl={true}   showSpinner={false}   easing="ease"   speed={200}   shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <Header />
        <SpeedInsights/>
        {children}
        <Footer />
      </Provider>
      </body>
      </html>
  )
}
