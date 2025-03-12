import Image from 'next/image';
import React, { useRef, MouseEvent } from 'react';

interface MagnifierProps {
    src: string; // Path to the image
    alt: string; // Alternative text for the image
    width: number; // Width of the image container
    height?: number; // Optional height of the image container
    zoom?: number; // Zoom level for the magnifier
}

const Magnifier: React.FC<MagnifierProps> = ({
    src,
    alt,
    height,
    zoom = 2, // Default zoom level
}) => {
    const magnifierRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const glass = magnifierRef.current;
        const img = imgRef.current;

        if (!glass || !img) return;

        const rect = img.getBoundingClientRect();
        const x = e.pageX - rect.left - window.pageXOffset;
        const y = e.pageY - rect.top - window.pageYOffset;

        const zoomLevel = zoom;
        const glassSize = 200;
        console.log("PageX", e.pageX, ": PageY", e.pageY)

        if (x > img.width || x < 0 || y > img.height || y < 0) {
            glass.style.display = 'none';
            return;
        }

        glass.style.display = 'block';
        glass.style.left = `${x - glassSize / 2}px`;
        glass.style.top = `${y - glassSize / 2}px`;
        glass.style.backgroundImage = `url(${src})`;
        glass.style.backgroundRepeat = 'no-repeat';
        glass.style.backgroundSize = `${img.width * zoomLevel}px ${img.height * zoomLevel}px`;
        glass.style.backgroundPosition = `-${x * zoomLevel - glassSize / 2}px -${y * zoomLevel - glassSize / 2}px`;
    };

    const handleMouseLeave = () => {
        if (magnifierRef.current) magnifierRef.current.style.display = 'none';
    };

    return (
        <div
            style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: "400px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                ref={imgRef}
                src={src}
                alt={alt}
                height={400}
                width={300}
                style={{ width: '100%', height: height ? `${height}px` : 'auto' }}
            />
            <div
                ref={magnifierRef}
                style={{
                    display: 'none',
                    position: 'absolute',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    width: '200px',
                    height: '200px',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
                    cursor: 'none',
                }}
            ></div>
        </div>
    );
};

export default Magnifier;
