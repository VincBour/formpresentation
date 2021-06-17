import { Card, CardContent, Grid, makeStyles } from "@talentsoft/design-system"
import React from "react";

const useStyles = makeStyles((theme) => ({
    grid: {
        justifyContent: 'center',
        width: '70%'
    },
    card: {
        width: 'inherit'
    }
}));
export const Layout:React.FC = ({ children }) => {
    const styles = useStyles();
    return(
        <Grid container spacing={3} className={styles.grid}>
            <Card className={styles.card}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </Grid>
    )
}