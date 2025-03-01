'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'

const FloatingDock = () => {
    const icons = [
        { icon: <Facebook size={24} />, link: 'http://facebook.com' },
        { icon: <Twitter size={24} />, link: 'http://twitter.com' },
        { icon: <Linkedin size={24} />, link: 'http://linkedin.com' },
        { icon: <Youtube size={24} />, link: 'http://youtube.com' },
        { icon: <Instagram size={24} />, link: 'http://instagram.com' },
    ]

    return (
        <motion.div
            className="flex items-center justify-center w-6/12 gap-4 p-3 bg-white/10 backdrop-blur-lg rounded-full shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {icons.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    whileHover={{ y: -10 }} // Move icon up on hover
                    transition={{ type: 'spring', stiffness: 300 }} // Smooth spring animation
                >
                    {item.icon}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default FloatingDock