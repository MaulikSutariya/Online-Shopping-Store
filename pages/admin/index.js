import { Grid } from "@mui/material";

import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
       <style jsx global>{`
        .footer-area {
          display:none;
        }
        .copyright-area {
          display:none;
        }
        #mainnavbar{
          display:none;
        }
       
      `}</style>
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        
      </Grid>
    </Grid>
    </FullLayout>
      </ThemeProvider>
  );
}
