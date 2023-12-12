"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { toast, ToastContainer } from "react-toastify";

function Mode_Change() {
   const router = useRouter()
   const { systemTheme, theme, setTheme } = useTheme()
   const [mounted, setmounted] = React.useState(false)
   React.useEffect(() => {
      setmounted(true)
      if (location.pathname === '/' && location.reload) { toast("Welcome to Subham's Sanctuary.!!! ", { position: "bottom-center", toastId: 1 }) }
   }, [router.refresh])

   const renderThemeChanger = () => {
      if (!mounted) return null
      const currentTheme = theme === 'system' ? systemTheme : theme
      if (currentTheme === 'dark') {
         return ( <MdDarkMode className='w-5 h-5 cursor-pointer' onClick={() => setTheme('light')} /> )
      } else {
         return ( <MdLightMode className='w-5 h-5 cursor-pointer' onClick={() => setTheme('dark')} /> )
      }
   }

   function tostifie() {
      if (!mounted) return null
      const currentTheme = theme === 'system' ? systemTheme : theme
      return <ToastContainer autoClose={1800} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover toastStyle={currentTheme === 'dark' ? { background: "linear-gradient(to right bottom, #607d81, #567888, #58708c, #66668b, #79597f, #75577e, #71547e, #6d527d, #4a5a85, #225f7f, #08616f, #21605a)", color: "white" } : { background: "linear-gradient(to right bottom, #81deea, #9cdefb, #bddcff, #dadbfd, #eeddf5, #eadaf2, #e5d6f0, #e1d3ed, #bfcbee, #93c6e7, #67c0d1, #51b7ad)", color: "black" }} />
   }

   return (
       <React.Fragment>
          {tostifie()}
          <div className={`fixed bottom-9 left-4 md:bottom-10 lg:left-8 p-1.5 md:p-2.5 justify-center rounded-full bg-slate-100 dark:bg-slate-900`}>
            <span className={`w-fit text-sm sm:text-base md:text-lg lg:text-xl text-black dark:text-white`}>
               {renderThemeChanger()}
            </span>
          </div>
       </React.Fragment>
   )
}

export default Mode_Change
