import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const SearchFilter = styled(TextField)`
    margin: .5rem 0 !important;
    width: 100%;
`;

function Filter() {
    return (
        <SearchFilter id='outlined-search' size='small' type='search' />
    );
}

export default Filter;
