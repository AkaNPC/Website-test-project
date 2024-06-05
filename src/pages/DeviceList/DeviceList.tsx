import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid, Skeleton, Box } from '@mui/material';
import DevicesNavBar from './DevicesNavBar';
import DataContext from '../../context/DataProvider';
import { useContext } from 'react';
import { formatDate } from '../../utils/formatDate';
import AlertModal from '../../components/modal/AlertModal';


export default function DeviceList() {

    const { devicesData, loading } = useContext(DataContext);

    const columns: GridColDef<(typeof devicesData)[number]>[] = [
        {
            field: 'id',
            headerName: 'Id',
            type: 'number',
            editable: false,
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 70
        },
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 150
        },
        {
            field: 'uniqueId',
            headerName: 'Unique Id',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 120
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 100
        },
        {
            field: 'lastUpdate',
            valueGetter: (value) => {
                if (value !== "") {
                    return formatDate(value);
                }
            },
            headerName: 'Last Update',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 170
        }
    ];

    function SkeletonRow() {
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

    const dataLoadingSkeleton = () => (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={1}>
                    <SkeletonRow />
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <>
            <DevicesNavBar />
            <AlertModal />
            <Box sx={{ height: '80vh', width: '100%' }}>
                <DataGrid
                    rows={loading ? [] : devicesData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnMenu
                    slots={{
                        loadingOverlay: dataLoadingSkeleton
                    }}
                    loading={loading}
                ></DataGrid>
            </Box>
        </>
    );
}