"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Upper Header */}
      <AppBar position="relative" sx={{ backgroundColor: "#1f2a1f", height: "40px", display: "flex",marginTop: "40px", justifyContent: "center", paddingX: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "40px", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
          <Typography variant="body2" sx={{ color: "#e6d5c3", fontSize: "14px" }}>
            REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU!
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" sx={{ backgroundColor: "#d4bda8", color: "#1f2a1f", borderRadius: "20px", textTransform: "none", fontSize: "12px" }}>
              Click here
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#d4bda8", color: "#e6d5c3", borderRadius: "20px", textTransform: "none", fontSize: "12px" }}>
              Trade Credit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1f2a1f", paddingY: 1, paddingX: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
          {/* Left Section */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                HOME
              </Typography>
            </Link>

            <Link href="/walling" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                WALLING
              </Typography>
            </Link>

            <Link href="/paving" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                PAVING
              </Typography>
            </Link>

            <Link href="/cobblestone" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                COBBLESTONE
              </Typography>
            </Link>

            <Link href="/bricks" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                BRICKS
              </Typography>
            </Link>
          </Box>

          {/* Center Section (Logo) */}
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Link href="/" passHref>
              <Image src="/images/Header/main-common-logo.svg" alt="Logo" width={250} height={70} />
            </Link>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Link href="/about" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                ABOUT
              </Typography>
            </Link>

            <Link href="/gallery" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                GALLERY
              </Typography>
            </Link>

            <Link href="/contact" passHref>
              <Typography
                variant="body1"
                sx={{
                  color: "#e6d5c3",
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "white", textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                CONTACT
              </Typography>
            </Link>

            <Button variant="contained" sx={{ backgroundColor: "#d4bda8", color: "#1f2a1f", borderRadius: "20px", textTransform: "none" }}>
              FREE MEASURE & QUOTE!
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
