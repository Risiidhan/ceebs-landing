import React from 'react'

const FooterComponent = () => {
  return (
     <footer className="w-full glass-effect text-white text-sm rounded-[12px]">
      <div className=" content-section mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <div className="hover:text-white transition">
            Terms & Conditions
          </div>
          <div className="hover:text-white transition">
            Privacy Policy
          </div>
          <div className="hover:text-white transition">
            Contact
          </div>
        </div>
        <p>&copy; 2025 CEEBS. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterComponent