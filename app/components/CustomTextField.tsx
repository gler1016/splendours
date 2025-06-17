import * as React from "react";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from '@mui/material';

interface CustomTextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomTextField({ value, onChange }: CustomTextFieldProps) {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
  return (
    <TextField
      id="standard-basic"
      label="EMAIL"
      variant="standard"
      className="flex w-full text-[12px]"
      value={value}
      onChange={onChange}
      sx={{
        input: {
          color: "white",
          fontSize: isMobile ? "12px" : "12px",
          fontWeight: 200,
          fontFamily: "var(--font-montserrat)",
        },
        fontSize: isMobile ? "12px" : "12px",
        "& .MuiInputLabel-root": {
          color: "#FFFFFF", // Default color
          fontSize: isMobile ? "12px" : "12px", // Custom font size
          fontWeight: 200, // Optional: Adjust weight
          fontFamily: "var(--font-montserrat)", // Optional: Custom font
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#FFFFFF", // Change label color when focused
          fontWeight: 200, // Optional: Bold when focused
        },
        "& .MuiInput-underline:before": { borderBottomColor: "#DCC5BD" }, // Default
        "& .MuiInput-underline:hover:before": { borderBottomColor: "#DCC5BD" }, // Hover
        "& .MuiInput-underline:after": { borderBottomColor: "#DCC5BD" }, // Focused
      }}
    />
  );
}
