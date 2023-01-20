import React from 'react'
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import mongoose from "mongoose";
import Product from "../../Models/Product";

function allproducts({products}) {
  
  
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    <>
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
    <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <ProductPerfomance products={products} />
            </Grid>
          </Grid>
      </>
    </FullLayout>
    </ThemeProvider>
  )
}

export default allproducts



export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  return {props:{products:JSON.parse(JSON.stringify(products)) }}
}