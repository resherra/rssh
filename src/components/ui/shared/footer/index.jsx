import ContactForm from "./form"
import BackToTop from "./back to top"
import Links from "../header/links"
import Social from "./social"

import Image from "next/image"
import copyrightIcon from "../../../ui/icons/copyright-icon.svg"

export default function Footer() {
  return (
    <div className={`w-full bg-black absolute border-t border-transparent dark:border-mainGray selection:bg-textColor selection:text-secColor`}>
      <div className={`max-w-screen-2xl m-auto`}>
        <div className={`p-4 md:px-6 lg:px-8 pt-12 md:pt-20 text-sm text-textColor`}>
          <div className={`flex flex-col font-mono justify-center`}>
            <p className={`font-sans font-medium text-3xl pb-12`}>Stay in touch</p>
            <div className={`flex items-baseline gap-4 pb-6`}>
              <p>You can find me on:</p>
              <Social />
            </div>
            <div className={`flex flex-col gap-4 pb-20 md:pb-28`}>
              <p>Or submit your email to stay updated:</p>
              <div>
                <ContactForm />
              </div>
            </div>
            <div className="flex justify-between items-end md:gap-12">
              <div className="flex flex-col md:flex-row-reverse justify-between items-baseline md:w-full">
                <div className={`pb-6 md:pb-0 text-xs text-mainGray`}>
                  <Links />
                </div>
                <div className={`flex items-baseline gap-2`}>
                  <div>rssh 2023</div>
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
