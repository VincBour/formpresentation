import { Grid, Paper, Typography } from "@talentsoft/design-system"
import React from "react"

export const Home = () => {
    return (
        <Grid container spacing={3} style={{width: '70%'}}>
            <Grid item xs={12}>
                <Paper elevation={6} style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', height: '400px'}}>
                    <Typography variant='h1' component='h1'>Forms</Typography>
                    <Typography component='span' variant='subtitle1'>Design and Implementation</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}