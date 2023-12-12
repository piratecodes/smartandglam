import Link from 'next/link'
import Script from 'next/script'

function footer() {
  return (
    <footer className='bg-black/95 p-4 items-center'>
        <div className="space-y-9 md:space-y-0 flex flex-col md:flex-row justify-between lg:px-7 xl:px-14 xl:ml-16">
            <section className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
                <div className="flex justify-start md:mt-10">
                    <h4
                        className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                        Inform </h4> <span className="text-white font-sans uppercase font-normal tracking-wider">ation</span>
                </div>
                <p className={`lg:max-w-sm`}>Our shop is open every day from 9:00 AM to 9:30 PM. We are dedicated to providing our clients with the highest quality hair and beauty services in a convenient and welcoming environment.</p>
            </section>
            <section className="w-7/12 h-auto lg:px-4 flex flex-col justify-start">
                <label className={`text-white`} htmlFor={`map`}>Find us by Map</label>
                <iframe id={`map`} className="w-full h-full mt-1.5"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7730948285857!2d88.38701907592207!3d22.773800525564955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b007e84a3ef%3A0x73f822ca9fb28658!2sSmart%20And%20Glam%20Family%20Saloon!5e0!3m2!1sen!2sin!4v1702330675274!5m2!1sen!2sin"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </section>

            <section className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 flex-grow">
                <div className="flex justify-start">
                    <h4
                        className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                        get in t </h4> <span className="text-white font-sans uppercase font-normal tracking-wider">ouch</span>
                </div>
                <p className="space-x-3"><i className="fa fa-home text-[17px]"></i><strong
                    className="text-[#8b8b8b] text-[15px] tracking-wide">Our Shop</strong></p>
                <div className="leading-7">
                    <p>Purbasha Ln No. 2, Kalyani Highway, <br/> Barrackpore, Kolkata -700122, <br/> West Bengal, India</p>
                </div>
                <div className="leading-7 mt-4 text-[15px] font-[500]">
                    <p className="space-x-3 hover:text-[#cacaca]"><i className="fa fa-phone text-[17px]"></i> <a
                        href="#"> +91 9143491413</a></p>
                    <p className="space-x-3 hover:text-[#cacaca]"><i className="fa fa-envelope text-[16px]"></i> <a href="#">
                        contact@smartandglam.com</a></p>
                </div>
            </section>
        </div>
        <hr className={`my-2.5`} />
        <div className="container my-4 flex flex-col-reverse lg:flex-row justify-between text-[#afafaf] text-center text-xl">
            <section className={`mt-3 lg:mt-0`}>
                © 2023 Copyright: All rights are reserved.
            </section>
            <section className={`flex justify-center space-x-3`}>
                <p><Link href="https://www.facebook.com/SmartandGlam2018" target={`_blank`}
                      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"><i
                    className="fa fa-facebook"></i></Link></p>
                {/*<p><a href="#"*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-twitter"></i></a></p>*/}
                {/*<p><Link href="#" target={`_blank`}*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-instagram"></i></Link></p>*/}
                {/*<p><a href="#"*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-linkedin"></i></a></p>*/}
                {/*<p><a href="#"*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-youtube"></i></a></p>*/}
                {/*<p><a href="#"*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-pinterest"></i></a></p>*/}
                {/*<p><a href="#"*/}
                {/*      className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"><i*/}
                {/*    className="fa fa-telegram"></i></a></p>*/}
            </section>
        </div>
        <Script src="https://use.fontawesome.com/03f8a0ebd4.js" />
    </footer>
  )
}

export default footer
