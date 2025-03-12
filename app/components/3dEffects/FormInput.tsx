"use client";
import * as React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const CustomTextField: React.FC<TextFieldProps> = (props) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { currentTarget, clientX, clientY } = event;
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #283C28,
            transparent 80%
          )
        `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group/input"
        >
            <TextField
                {...props}
                variant="outlined"
                sx={{
                    "& .MuiInputBase-root": { borderRadius: 2 },
                    ...props.sx,
                }}
            />
        </motion.div>
    );
};

export default CustomTextField;