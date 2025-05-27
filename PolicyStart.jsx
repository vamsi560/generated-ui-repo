import React from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const PolicyStart = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField label="Path ID" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Policy Number" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Effective Date" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Expiration Date" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Rate Level" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Company Name" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Product Code" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Program" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="SIC" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="SIC Description" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Account Number" name="" fullWidth /></Grid>
        <Grid item><Button variant='contained' color='primary'>Next</Button></Grid>
        <Grid item><Button variant='contained' color='primary'>Cancel</Button></Grid>
      </Grid>
    </Container>
  );
};

export default PolicyStart;