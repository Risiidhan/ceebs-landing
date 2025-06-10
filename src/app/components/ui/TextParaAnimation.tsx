"use client"

import { motion } from 'framer-motion'
import React from 'react'

const TextParaAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            id="about-title"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1}} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.7 }} 
            className=''>
            {children}
        </motion.div>
    )
}

export default TextParaAnimation