'use client'
import { useRef as Ref, useState as State, useEffect as Effect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.svg'
function nav() {
    const [isToggled, setIsToogled] = State(false)
    const navlinks = Ref();
    const hamburger = Ref();
    const navLayer = Ref();
    const toolRef = Ref();
    const links = [
        {
            to: "/#features",
            label: "Features",
        },
        {
            to: "/#solution",
            label: "Solution",
        },
        {
            to: "/#reviews",
            label: "Reviews",
        },
        {
            to: "/contact-us",
            label: "Contact Us",
        },
    ];
    function toggleNavlinks() {
        if (!isToggled) {
            navlinks.current.classList.add("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
            hamburger.current.classList.add("toggled");
            setIsToogled(true)
        } else {
            navlinks.current.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
            hamburger.current.classList.remove("toggled");
            setIsToogled(false)
        }
    }
    Effect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isToggled && toolRef.current && toolRef.current.contains(e.target)) {
                return null
            }

            else if (isToggled) {
                navlinks.current.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
                hamburger.current.classList.remove("toggled");
                setIsToogled(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }

    }, [isToggled])
  return (
      <nav className='relative sticky z-50 backdrop-blur-sm bg-stone-800/80 top-0 left-0 flex flex-wrap items-center justify-between gap-6 px-5 lg:px-10 md:gap-0'>
          <div className="relative w-full z-20 flex justify-between md:px-0 lg:w-max">
              <Link href="/" aria-label="logo" className={`p-1 flex flex-row space-x-1.5 items-center text-2xl h-full w-full`}>
                  <Image className={`h-12 w-auto`} alt={`SG Logo`} src={logo} height="0" width="0" sizes="100vw" />
                  <span className={`font-bold text-neutral-200`}>Smart & Glam</span>
              </Link>
              <div className="relative flex max-h-10 items-center lg:hidden" ref={toolRef}>
                  <button ref={hamburger} aria-label="humburger" id="hamburger" className="relative -mr-6 p-6" onClick={toggleNavlinks}>
                      <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
                      <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
                  </button>
              </div>
          </div>
          <div id="navlinks" ref={navlinks} className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
              <div className="w-full text-gray-300 lg:w-auto lg:pr-4 lg:pt-0">
                  <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                      {
                          links.map((link) => (
                              <li key={link}>
                                  <Link href={link.to}
                                     className="hover:text-primary block transition md:px-4">
                                      <span>{link.label}</span>
                                  </Link>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </nav>

  )
}

export default nav