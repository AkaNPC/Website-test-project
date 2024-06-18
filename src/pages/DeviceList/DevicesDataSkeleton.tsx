import { Grid, Skeleton } from "@mui/material/";


export default function DevicesDataSkeleton() {
    return (
        <>
            <Grid item xs={1}>
                <Skeleton width={'100%'} animation="wave" variant="rectangular" height={'4vh'} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton width={'100%'} animation="wave" variant="rectangular" height={'4vh'} />
            </Grid>
            <Grid item xs={2}>
                <Skeleton width={'100%'} animation="wave" variant="rectangular" height={'4vh'} />
            </Grid>
            <Grid item xs={2}>
                <Skeleton width={'100%'} animation="wave" variant="rectangular" height={'4vh'} />
            </Grid>
            <Grid item xs={4}>
                <Skeleton width={'100%'} animation="wave" variant="rectangular" height={'4vh'} />
            </Grid>
        </>
    );
}