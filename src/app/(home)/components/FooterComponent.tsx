import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
  return (
     <footer className="w-full glass-effect text-white text-sm rounded-[12px]">
      <div className=" content-section mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link href={"/terms-and-condition"} className="!text-white !no-underline hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link href={"/privacy-policy"} className="!text-white !no-underline hover:text-white transition">
            Privacy Policy
          </Link>
          <div className="hover:text-white transition">
            info@ceebs.com
          </div>
        </div>
        <p>&copy; 2025 CEEBS. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterComponent