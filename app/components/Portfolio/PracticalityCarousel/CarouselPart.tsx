'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import styles from './Carousel.module.css'
import Card3DEffect from '../../3dEffects/Card3DEffect' // Import the Card3DEffect component

interface TouchCarouselProps {
    images: { src: string; alt: string }[]
    options?: EmblaOptionsType
}

const TouchCarousel: React.FC<TouchCarouselProps> = ({ images, options }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, ...options })

    return (
        <div className={`${styles.embla} overflow-hidden relative`} ref={emblaRef}>
            <div className={`${styles.emblaContainer} flex`}>
                {/* Duplicating images for infinite scrolling effect */}
                {[...images, ...images].map((image, index) => (
                    <div className={`${styles.emblaSlide} flex-shrink-0`} key={index}>
                        <Card3DEffect>
                            <Image
                                src={image.src}
                                width={1136}
                                height={461}
                                alt={image.alt}
                                className={styles.emblaImage}
                            />
                        </Card3DEffect>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TouchCarousel