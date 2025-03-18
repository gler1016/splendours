// Import necessary dependencies
import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

// Define the component's props with TypeScript types
interface CustomButtonProps {
    isMobile?: boolean
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, isMobile, iconSrc, onClick }) => {
    return (
        <Button
            className="font-semibold px-4"
            variant="outlined"
            endIcon={
                <Box
                    sx={isMobile ?
                        {
                            width: { xs: "35px", md: '1vw' },
                            height: { xs: "35px", md: '1vw' },
                            paddingRight: "2px",
                            backgroundSize: "cover",
                            backgroundImage: `url(${iconSrc})`,
                            filter: "brightness(0) saturate(100%) invert(28%) sepia(14%) saturate(589%) hue-rotate(100deg) brightness(93%) contrast(81%)",
                        } : {
                            width: { xs: "30px", md: '30px' },
                            height: { xs: "30px", md: '30px' },
                            paddingRight: "10px",
                            backgroundImage: `url(${iconSrc})`,
                            backgroundSize: "cover",
                            filter: "brightness(0) saturate(100%) invert(28%) sepia(14%) saturate(589%) hue-rotate(100deg) brightness(93%) contrast(81%)",
                        }
                    } />

            }
            onClick={onClick}
            style={{ "lineHeight": "1" }}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: { xs: "170px", sm: "170px", md: "170px", lg: "170px" }, // Responsive width
                height: { xs: "60px", sm: "60px", md: "60px", lg: "60px" }, // Responsive height
                borderRadius: "50px",
                color: "#283C28",
                fontSize: { xs: "20px", sm: "20px" }, // Responsive font size
                fontWeight: 400,
                fontFamily: "inherit",
                fontSynthesisWeight: 600,
                backgroundColor: "#DBC6BC", // Default background color
                borderColor: "transparent", // Border color
                textTransform: "none",
                px: { xs: "15px", sm: "20px" }, // Responsive padding
                "&:hover": {
                    backgroundColor: "#283C28", // Hover background color
                    color: "#DBC6BC", // Hover font color
                    borderColor: "#283C28", // Hover border matches hover background
                },
            }}
        >
            {label}
        </Button>
    );
};

export default WhiteCustomButton;
