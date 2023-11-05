import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import Diversity2 from "@mui/icons-material/Diversity2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link href="/">Hollo Molly Hierarchy</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      bgcolor="bisque"
      sx={{
        mt: "auto",
      }}
    >
      <Container
        sx={{
          py: 6,
        }}
      >
        <Grid container component="footer" spacing={2} maxWidth="lg">
          <Grid xs={12} sm={4}>
            <Diversity2 />
            <Copyright />
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Typography>
            <Typography>
              <Link href="/terms-of-service">Terms of Service</Link>
            </Typography>
            <Typography>
              <Link href="/careers">Careers</Link>
            </Typography>
            <Typography>
              <Link href="/copyright">Copyright</Link>
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Box sx={{ mb: 1 }}>
              <Link href="#">
                <FacebookIcon />
              </Link>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
