import React from "react";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Stack, TextField, Button } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useState } from "react";

function addproducts() {
  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let bodyContent = JSON.stringify([
      {
        "title": form.title,
        "slug": form.slug,
        "desc": form.description,
        // img: "top-products-6.jpg",
        "category": form.category,
        "Price": form.price,
        "AvailableQty": form.availableqty,
      },
    ]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: bodyContent,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/addproducts", requestOptions);
  };

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
              <BaseCard title="Add Products">
                <Stack spacing={3}>
                  <TextField
                    name="title"
                    onChange={onChange}
                    value={form.title ? form.title : ""}
                    label="Title"
                    variant="outlined"
                  />
                  <TextField
                    name="price"
                    onChange={onChange}
                    value={form.price ? form.price : ""}
                    label="Price"
                    variant="outlined"
                  />
                  <TextField
                    name="category"
                    onChange={onChange}
                    value={form.category ? form.category : ""}
                    label="Category"
                    variant="outlined"
                  />
                  <TextField
                    name="slug"
                    onChange={onChange}
                    value={form.slug ? form.slug : ""}
                    label="Slug"
                    variant="outlined"
                  />
                  <TextField
                    name="availableqty"
                    onChange={onChange}
                    value={form.availableqty ? form.availableqty : ""}
                    label="Available-Qty"
                    variant="outlined"
                  />
                  <TextField
                    name="description"
                    multiline
                    rows={4}
                    onChange={onChange}
                    value={form.description ? form.description : ""}
                    label="Description"
                    variant="outlined"
                  />
                </Stack>
                <br />
                <Button onClick={submitForm} variant="contained" mt={2}>
                  Add Product
                </Button>
              </BaseCard>
            </Grid>
          </Grid>
        </>
      </FullLayout>
    </ThemeProvider>
  );
}

export default addproducts;
