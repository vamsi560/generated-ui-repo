import React from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const SystemArchitectureDiagram = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField label="Internet Explorer 8 Browser" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="ViewPage.asp HTML/Scripts" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Vb6/Migrated .NET Business Layer" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="AQS Database(s)" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Requests page" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="IncludeScripts" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Run Unit of Work Business Rules" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Acquire Data" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Xml Snapshot of Unit of Work" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Insert Xml Snapshot into XML Data Island" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Html page (with scripts, initial view state" name="" fullWidth /></Grid>
      </Grid>
    </Container>
  );
};

export default SystemArchitectureDiagram;