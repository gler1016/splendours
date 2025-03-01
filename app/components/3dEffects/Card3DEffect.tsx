import React, { useRef } from "react";
import { Box, BoxProps } from "@mui/material";
import styles from "../../styles/3dCardEffect.module.css"; // Import the CSS module

interface Card3DEffectProps extends BoxProps {
    children: React.ReactNode;
    rotationIntensity?: number; // Customize rotation intensity
    perspective?: number; // Customize perspective
}

const Card3DEffect: React.FC<Card3DEffectProps> = ({
    children,
    rotationIntensity = 20, // Default rotation intensity
    perspective = 1000, // Default perspective
    ...props
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5; // Normalize to -0.5 to 0.5
        const y = (e.clientY - top) / height - 0.5; // Normalize to -0.5 to 0.5

        card.style.transform = `rotateX(${y * -rotationIntensity}deg) rotateY(${x * rotationIntensity}deg)`; // Apply rotation
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;

        card.style.transform = "rotateX(0) rotateY(0)"; // Reset to default
    };

    return (
        <Box
            className={styles.card3dContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
                width: "100%", // Ensure the container takes full width
                height: "100%", // Ensure the container takes full height
                perspective: `${perspective}px`, // Customize perspective
            }}
            {...props}
        >
            <Box
                ref={cardRef}
                className={styles.card3d}
                sx={{
                    width: "100%", // Match the original card width
                    height: "100%", // Match the original card height
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Card3DEffect;