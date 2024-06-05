import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { getDeviceById } from '../../services/apiData';
import { useState, useContext, useEffect } from 'react';
import DataContext from '../../context/DataProvider';
import AlertModal from '../../components/modal/AlertModal';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function SearchField() {
    const { email, password, devicesData, toggleShowModal, setDevicesData, setErrorMsg, setLoading } = useContext(DataContext);
    const [id, setId] = useState(0);

    useEffect(() => {
    }, [devicesData])

    const fetchDeviceData = async () => {
        try {
            setLoading(true);
            const response = await getDeviceById(id, email, password);
            if (!response.id) {
                setLoading(false);
                setErrorMsg('Устройства с данным id нет в базе. Проверьте еще раз id');
                toggleShowModal(true);
            } else {
                setLoading(false);
                setDevicesData([response]);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetchDeviceData()
    }


    return (
        <Box component="form" name="search" onSubmit={handleSubmit}>
            <AlertModal />
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Type id and press Enter..."
                    inputProps={{ 'aria-label': 'search' }}
                    value={id}
                    onChange={(e) => {
                        const value = e.currentTarget.value;
                        const reg = /^[0-9\b]+$/;

                        if (reg.test(value)) {
                            setId(+value)
                        } else {
                            setId(0)
                        }
                    }}
                />
            </Search>
        </Box>
    );
}
