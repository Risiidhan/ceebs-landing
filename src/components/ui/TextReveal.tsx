"use client"

import { motion } from 'framer-motion'
import React from 'react'

const TextReveal = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            id="about-title"
            initial={{ opacity: 0, y: 50 }} // Start from below
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }} // Ensures it triggers when 70% visible
            className=''>
            {children}
        </motion.div>
    )
}

export default TextReveal