import Header from '@/components/HeroSection'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-10">
            <Header />
            <Features />
            <Stats />
            <Testimonials />
            <CallToAction />
        </main>
        {/*<Footer />*/}
    </>
  )
}
