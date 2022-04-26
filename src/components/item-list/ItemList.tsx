import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import ContentItem, { ItemProps } from '../content-item/ContentItem';

type Props = {
    items: ItemProps[],
};

const NameContainer = styled.div`
    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 1rem;
        margin: 1rem .5rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: .5rem;
        margin: .5rem .25rem;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    ${(props) => props.theme.breakpoints.down('md')} {
        display: none;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        display: flex;
    }
`;

const Container = styled.div`
    border: 1px solid #F5F5F5;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 0 1px #ccc;
`;

/**
 * Item list component
 * @param {Array} items
 * @returns {JSX.Element}
 */
function ItemList({ items }: Props) {
    return (
        <Container>
            <Grid container sx={{ color: '#008ec4', fontWeight: 'bold' }}>
                <Grid item sm={12} md={8}>
                    <NameContainer>Name</NameContainer>
                </Grid>
                <Grid item sm={0} md={4} container>
                    <InfoContainer>
                        <span>Owner</span>
                        <span>Stars</span>
                    </InfoContainer>
                </Grid>
            </Grid>
            {items.map((item) => (
                <ContentItem
                    key={`${item.name}-${item.homepage}`}
                    name={item.name}
                    homepage={item.homepage}
                    description={item.description}
                    owner={item.owner}
                    stars={item.stars}
                />
            ))}
        </Container>
    );
}

export default ItemList;
