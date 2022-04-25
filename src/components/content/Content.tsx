import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MuiPagination from '@mui/material/Pagination';
import IconButton from '@mui/material/IconButton';
import Sort from '@mui/icons-material/Sort';
import ItemList from '../item-list/ItemList';
import useDebounce from '../../hooks/useDebounce';
import { useGetLibrariesByNameQuery } from '../../store/slices/bowerSearch';
import { PAGE_SIZE, DEBOUNCE_TIME } from '../../constants/constants';

const ListContainer = styled.div`
    width: 100%;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
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
    const [sortParam, setSortParam] = useState('');
    const [debouncedValue] = useDebounce(searchValue, DEBOUNCE_TIME);
    const { data, error, isLoading } = useGetLibrariesByNameQuery(
        { name: debouncedValue, sortParam },
    );

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onPaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const onSort = () => {
        if (sortParam) {
            setSortParam('');
        } else {
            setSortParam('stars');
        }
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
            <FilterContainer>
                <SearchFilter label='Search' size='small' type='search' value={searchValue} onChange={onValueChange} />
                <IconButton onClick={onSort} sx={{ width: '2.5rem', height: '2.5rem' }} aria-label='sort-by-stars'>
                    <Sort />
                </IconButton>
            </FilterContainer>
            <ListContainer>
                {isLoading ? 'is loading...' : <ItemList items={items} />}
            </ListContainer>
            <Pagination count={pageCount} page={page} onChange={onPaginationChange} />
        </>
    );
}

export default Content;
