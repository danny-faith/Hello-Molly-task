"use client";

import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="h-screen"
      >
        <Grid item>
          <Typography variant="h5" maxWidth={500} mb={3}>
            Something went wrong! Probably with our company hierarchy, please
            try again.
          </Typography>
          <Button variant="contained" onClick={() => reset()}>
            Try again
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
