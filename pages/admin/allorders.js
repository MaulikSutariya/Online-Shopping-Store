import React from "react";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";

function allorders() {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <>
          <style jsx global>{`
            .footer-area {
              display: none;
            }
            .copyright-area {
              display: none;
            }
            #mainnavbar {
              display: none;
            }
          `}</style>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <ProductPerfomance />
            </Grid>
          </Grid>
        </>
      </FullLayout>
    </ThemeProvider>
  );
}

export default allorders;
