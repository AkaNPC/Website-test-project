import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        headerName: 'Id',
        type: 'number',
        editable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        editable: false,
    },
    {
        field: 'uniqueId',
        headerName: 'UniqueId',
        type: 'string',
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'string',

        editable: false,
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        type: 'string',
        editable: false,
    }
];

const rows = [
    { id: 1, name: 'Иван', uniqueId: 'asd', status: 14, lastUpdate: 'date' },
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}