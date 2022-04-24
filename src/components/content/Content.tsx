import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MuiPagination from '@mui/material/Pagination';
import ItemList from '../item-list/ItemList';
import useDebounce from '../../hooks/useDebounce';
import { useGetLibrariesByNameQuery } from '../../store/slices/bowerSearch';
import { PAGE_SIZE, DEBOUNCE_TIME } from '../../constants/constants';

const ListContainer = styled.div`
    width: 100%;
`;

const SearchFilter = styled(TextField)`
    margin: .5rem 0 !important;
    width: 100%;
`;

const Pagination = styled(MuiPagination)`
    & .MuiPagination-ul {
        display: flex;
        justify-content: center;
        margin-top: .5rem;
    }
`;

function Content(): JSX.Element {
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [debouncedValue] = useDebounce(searchValue, DEBOUNCE_TIME);
    const { data, error, isLoading } = useGetLibrariesByNameQuery(debouncedValue);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const items = data ? data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((item) => ({
        name: item.name,
        description: item.description,
        homepage: item.homepage,
        stars: item.stars,
        owner: item.repository_url?.split('/')?.[3] ?? '',
    })) : [];
    const pageCount = data ? Math.ceil(data.length / PAGE_SIZE) : 1;
    return (
        <>
            <SearchFilter size='small' type='search' value={searchValue} onChange={onValueChange} />
            <ListContainer>
                {isLoading ? 'is loading...' : <ItemList items={items} />}
            </ListContainer>
            <Pagination count={pageCount} page={page} onChange={handleChange} />
        </>
    );
}

export default Content;
