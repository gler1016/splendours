import { Typography, Box } from "@mui/material";

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "inline-block", // Ensure the Box only takes up as much space as the content
        transition: "transform 0.3s ease", // Smooth transition for the hover effect
        "&:hover": {
          transform: "translateX(10px)", // Move 10px to the right on hover
        },
      }}
    >
      <Typography
        variant="h3"
        color="#283C28"
        sx={{
          fontWeight: 400,
          alignContent: "flex-start",
          fontFamily: "Chronicle Display",
          fontStyle: "italic",
          fontSize: {
            xs: "12px",
            sm: "25px", // Small screens
            md: "30px", // Medium screens
            lg: "50px", // Large screens
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default FooterLink;