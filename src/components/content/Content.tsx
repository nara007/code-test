import styled from 'styled-components';
import Filter from '../filter/Filter';
import ItemList from '../item-list/ItemList';

const item = {
    name: 'bootstrap',
    link: 'https://getbootstrap.com/',
    description: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
    owner: 'twbs',
    stars: 156557,
};

const item2 = {
    name: 'Font-Awesome',
    link: 'http://fontawesome.io',
    description: 'Font Awesome',
    owner: 'FortAwesome',
    stars: 69021,
};

const item3 = {
    name: 'moment',
    link: 'http://momentjs.com',
    description: 'Parse, validate, manipulate, and display dates in javascript.',
    owner: 'moment',
    stars: 46381,
};

const ListContainer = styled.div`
    width: 100%;
`;

function Content(): JSX.Element {
    return (
        <>
            <Filter />
            <ListContainer>
                <ItemList items={[item, item2, item3]} />
            </ListContainer>
        </>
    );
}

export default Content;
