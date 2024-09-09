import React, { useState } from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import { navigateToUrl } from "single-spa";
import { useGetItemByIdQuery } from './apiSlice';

const MortgageApplication = ()  => {

   // Always call hooks at the top level
  const { data, error, isLoading } = useGetItemByIdQuery(5);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setCurrentSection(section);
    navigateToUrl(section);
  };

  // Conditional rendering based on the state and query status
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (currentSection) return null; // Return null if a section is selected, the MFE will load


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "80%", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Residential Mortgage Application
        </Typography>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/your-details")}
            >
              Your Details
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/client-details")}
            >
              Client Details
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={() => handleSectionClick("/barclays-mortgage")}
            >
              Barclays Mortgage to be Changed
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MortgageApplication;
