import BackToTop from "./back to top"
import Links from "../header/links"
import Social from "./social"


export default function Footer() {
  return (
    <div className={`w-full bg-black absolute  selection:bg-textColor selection:text-secColor`}>
      <div className={`max-w-screen-2xl m-auto`}>
        <div className={`p-4 md:px-6 lg:px-8 pt-12 md:pt-20 text-sm text-textColor`}>
          <div className={`flex flex-col gap-6 md:flex-row md:gap-0 justify-between font-mono`}>
            
            <Social />

            <div className="flex justify-between items-end md:gap-12">
                
              <div className="flex flex-col md:flex-row-reverse justify-between items-baseline md:w-full">
                <div className={`text-xs text-mainGray`}>
                  <Links />
                </div>
              </div>

              <div className={`min-w-max`}>
                <BackToTop />
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  )
}
