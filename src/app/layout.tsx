import { Box, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navigation } from "./components/Navigation";
import StickyFooter from "./components/StickyFooter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <Box
        component="body"
        id="__next"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navigation />
        {children}
        <StickyFooter />
      </Box>
    </html>
  );
}
