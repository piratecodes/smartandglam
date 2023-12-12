import React from "react";

export const metadata = {
    title: 'Contact Us'
}
export default function Contact(){
    return(
        <main className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                    <p className="mt-4 text-lg text-stone-600">We invite you to come visit us today and experience the Smart & Glam&apos;s difference!</p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe id={`map`} className="w-full h-full mt-1.5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7730948285857!2d88.38701907592207!3d22.773800525564955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b007e84a3ef%3A0x73f822ca9fb28658!2sSmart%20And%20Glam%20Family%20Saloon!5e0!3m2!1sen!2sin!4v1702330675274!5m2!1sen!2sin"
                                    referrerPolicy="no-referrer-when-downgrade"/>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p>Purbasha Ln No. 2, Kalyani Highway, <br/> Barrackpore, Kolkata -700122, <br/> West Bengal, India</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">Monday - Sunday: 9am - 9:30pm</p>
                                    <p className="mt-1 text-gray-600">Open 7 days a week: We are open 7 days a week to accommodate your busy schedule.</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="mt-1 text-gray-600">Email: contact@smartandglam.com</p>
                                    <p className="mt-1 text-gray-600">Phone: +91 9143491413</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
)
}