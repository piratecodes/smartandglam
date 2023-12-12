
import Image from 'next/image'
export default function CallToAction(){
  return(
      <div className="relative py-16 scroll-mt-16">
        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <Image
                width="400"
                height="400"
                src="/images/avatars/avatar.webp"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
            />
            <Image
                width="200"
                height="200"
                src="/images/avatars/avatar-2.webp"
                alt="member photo"
                className="h-12 w-12 rounded-full object-cover"
            />
            <Image
                width="200"
                height="200"
                src="/images/avatars/avatar-3.webp"
                alt="member photo"
                className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <Image
                width="200"
                height="200"
                src="/images/avatars/avatar-4.webp"
                alt="member photo"
                className="relative h-12 w-12 rounded-full object-cover"
            />
            <Image
                width="200"
                height="200"
                src="/images/avatars/avatar-1.webp"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h5 className="text-center text-4xl font-bold text-gray-800 md:text-5xl">Turn Heads and Feel Radiant: Book Your Appointment Today!</h5>
            <p className="text-center text-xl text-gray-600">
              Ready to unleash your inner beauty and turn heads wherever you go? Look no further than Smart and Glam! Our team of expert stylists and beauticians is here to help you achieve your hair and beauty goals.
            </p>

          </div>
        </div>
      </div>
  )
}