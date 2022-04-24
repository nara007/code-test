import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import ItemList from '../item-list/ItemList';
import useDebounce from '../../hooks/useDebounce';
import { useGetLibrariesByNameQuery } from '../../store/slices/bowerSearch';

const ListContainer = styled.div`
    width: 100%;
`;

const SearchFilter = styled(TextField)`
    margin: .5rem 0 !important;
    width: 100%;
`;

function Content(): JSX.Element {
    const [searchValue, setSearchValue] = useState('');
    const [debouncedValue] = useDebounce(searchValue, 700);
    const { data, error, isLoading } = useGetLibrariesByNameQuery(debouncedValue);
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const items = data ? data.map((item) => ({
        name: item.name,
        description: item.description,
        homepage: item.homepage,
        stars: item.stars,
        owner: item.repository_url?.split('/')?.[3] ?? '',
    })) : [];
    return (
        <>
            <SearchFilter size='small' type='search' value={searchValue} onChange={onValueChange} />
            <ListContainer>
                {isLoading ? 'is loading...' : <ItemList items={items} />}
            </ListContainer>
        </>
    );
}

export default Content;
