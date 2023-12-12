
import Image from 'next/image'

export default function Testimonials(){
  return(
      <div className="text-gray-600 scroll-mt-16" id="reviews">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h3 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
            We have some fans.
          </h3>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width="400"
                   height="400"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Daniella Doe</h6>
                </div>
            </div>
            <p className="mt-8">I&apos;ve been coming to Smart and Glam for years and I&apos;m always happy with the service. The staff is friendly and professional, and they always do a great job on my hair. I highly recommend Smart and Glam to anyone looking for a great salon experience.</p>
          </div>
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar-1.webp" alt="user avatar" width="200"
                   height="200"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Jane doe</h6>
                </div>
            </div>
            <p className="mt-8"> I recently went to Smart and Glam for a haircut and beard trim, and I was very impressed. The stylist took the time to listen to what I wanted and gave me a great haircut that I love. I will definitely be back!</p>
          </div>
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar-2.webp" alt="user avatar" width="200"
                   height="200"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Yanick Doe</h6>
                </div>
            </div>
            <p className="mt-8">I took my daughter to Smart and Glam for her first haircut, and they were amazing with her. They made her feel comfortable and relaxed, and she loves her new haircut. I will definitely be bringing her back for all her future hair cuts.</p>
          </div>
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar-3.webp" alt="user avatar" width="200"
                   height="200"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Jane Doe</h6>
                </div>
            </div>
            <p className="mt-8">I don&apos;t have a lot of time to spend on getting my hair done, but I always know I can count on Smart and Glam to do a great job in a short amount of time. They are always accommodating and flexible with my schedule.</p>
          </div>
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar-4.webp" alt="user avatar" width="200"
                   height="200"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Andy Doe</h6>
                </div>
            </div>
            <p className="mt-8"> I&apos;m on a tight budget, but I still want to look and feel my best. Smart and Glam offers great prices on their services, and they always have special promotions and discounts. I never feel like I&apos;m overpaying.</p>
          </div>
          <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4">
              <Image className="w-12 h-12 rounded-full" src="/images/avatars/avatar-2.webp" alt="user avatar" width="400"
                   height="400"/>
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Yanndy Doe</h6>
                </div>
            </div>
            <p className="mt-8">I&apos;ve been a loyal customer of Smart and Glam for over 4 years, and I can&apos;fill-rulet imagine going anywhere else. They are like family to me, and I always know I can count on them to make me look and feel my best.</p>
          </div>
        </div>
      </div>
  )
}