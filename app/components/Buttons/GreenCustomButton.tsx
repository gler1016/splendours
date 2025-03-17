import { Button, SxProps, Theme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import React from "react";

interface GreenCustomButtonProps {
  label: string;
  iconSrc: string;
  styles?: SxProps<Theme>;
  borderColor?: string;
}

const GreenCustomButton: React.FC<GreenCustomButtonProps> = ({
  label,
  iconSrc,
  styles,
  borderColor = "white",
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    // 👇 WRAPPER DIV WITH "group" FOR HOVER EFFECT
    <div className="relative inline-block group">
      <Button
        className="px-6 overflow-hidden transition-all duration-300"
        variant="outlined"
        endIcon={
          <Image
            src={iconSrc}
            alt="Button Icon"
            width={isMobile ? 25 : 31.67}
            height={isMobile ? 25 : 31.67}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(320%) hue-rotate(15deg) brightness(93%) contrast(90%)",
            }}
          />
        }
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "160px", sm: "20vw", md: "13vw", lg: "13vw" },
          height: { xs: "42px", sm: "4.5vw", md: "3.1vw", lg: "3.1vw" },
          borderRadius: "1.5rem",
          color: borderColor,
          fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem", lg: "1.25rem" },
          fontWeight: 400,
          fontFamily: "Hanken Grotesk",
          backgroundColor: "#283C28",
          borderColor: borderColor,
          textTransform: "none",
          overflow: "hidden",
          position: "relative",
          "&:hover": {
            backgroundColor: "white",
            color: "blue.500",
            borderColor: "white",
          },
          ...styles,
        }}
      >
        {/* Default text (Fades out on hover) */}
        <span
          className="absolute left-0 w-full text-center transition-opacity duration-300 group-hover:opacity-0"
          style={{ color: borderColor }}
        >
          {label}
        </span>

        {/* Hover text (Slides in from left) */}
        <span
          className="absolute left-0 w-full text-center transition-all duration-300 group-hover:translate-x-0 translate-x-full opacity-0 group-hover:opacity-100"
          style={{ color: borderColor }}
        >
          View All
        </span>
      </Button>
    </div>
  );
};

export default GreenCustomButton;