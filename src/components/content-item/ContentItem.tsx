import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Home from '@mui/icons-material/Home';

export type ItemProps = {
    name: string,
    link: string,
    description: string,
    owner: string,
    stars: number,
};

const NameContainer = styled.span`
    margin-top: 2rem;
    color: #008ec4;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 1rem;
        margin-top: 1rem;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        display: flex;
    }
`;

const LinkContainer = styled.span`
    display: flex;
    align-items: center;
    color: #008ec4;
    font-size: .5rem;
    margin-top: .5rem;
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: .25rem;
        margin-top: .25rem;
    }
`;

const DescriptionContainer = styled.span`
    font-size: 1rem;
    margin: 1rem 0;
    color: #543729;
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: .5rem;
        margin: .5rem 0;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    color: #543729;
    ${(props) => props.theme.breakpoints.down('md')} {
        display: none;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        display: flex;
    }
`;

const SmallInfoContainer = styled.div`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .5rem;
    color: #543729;
    ${(props) => props.theme.breakpoints.down('md')} {
        display: flex;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        display: none;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: .5rem;
        padding: 0 .25rem;
    }
`;

const OwnerStarContainer = styled.span`
    background-color: #cecece;
    margin-right: .5rem;
`;

const PrimaryInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 .5rem;
    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 0 .25rem;
    }
`;

function ContentItem({
    name, link, description, owner, stars,
}: ItemProps): JSX.Element {
    return (
        <Grid container sx={{ borderTop: '1px solid #F5F5F5' }}>
            <Grid sm={12} md={8}>
                <PrimaryInfoContainer>
                    <NameContainer>{name}</NameContainer>
                    <LinkContainer>
                        <Home sx={{ color: 'black' }} />
                        {link}
                    </LinkContainer>
                    <DescriptionContainer>{description}</DescriptionContainer>
                </PrimaryInfoContainer>
            </Grid>
            <Grid sm={12} md={4} container>
                <InfoContainer>
                    <span>{owner}</span>
                    <span>{stars}</span>
                </InfoContainer>
                <SmallInfoContainer>
                    <OwnerStarContainer>{`Owner: ${owner}`}</OwnerStarContainer>
                    <OwnerStarContainer>{`Stars: ${stars}`}</OwnerStarContainer>
                </SmallInfoContainer>
            </Grid>
        </Grid>
    );
}

export default ContentItem;
