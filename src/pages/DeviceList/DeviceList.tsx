import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DevicesNavBar from './DevicesNavBar';
import DataContext from '../../context/DataProvider';
import { useContext, useEffect } from 'react';
import { formatDate } from '../../utils/formatDate';
import AlertModal from '../../components/modal/AlertModal';


export default function DeviceList() {

    const { devicesData } = useContext(DataContext);

    useEffect(() => {
    }, [devicesData])

    const columns: GridColDef<(typeof devicesData)[number]>[] = [
        {
            field: 'id',
            headerName: 'Id',
            type: 'number',
            editable: false,
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'uniqueId',
            headerName: 'UniqueId',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            editable: false,
            headerAlign: 'left',
            align: 'left',
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
        }
    ];


    return (
        <>
            <DevicesNavBar />
            <AlertModal />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    // disableColumnSorting
                    rows={devicesData}
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
                />
            </Box>
        </>
    );
}