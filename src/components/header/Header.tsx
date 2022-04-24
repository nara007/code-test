import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import LogoIcon from '../../assets/bower-logo.png';

const Container = styled.div`
    background-color: #ffcc2f;
    display: flex;
`;
const PageTitle = styled.h1`
    font-weight: bold;
    color: #543729;
    white-space: nowrap;
    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 4rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h4`
    font: 1rem "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    color: #543729;
    ${(props) => props.theme.breakpoints.down('sm')} {
        display: none;
    }
`;

const Logo = styled.img`
    ${(props) => props.theme.breakpoints.up('sm')} {
        width: 8rem;
        margin-right: 4rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        width: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    position: relative;
    z-index: 1;
    padding: .5rem 0;

    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 1rem;
        padding-right: 1.5rem;
        justify-content: flex-end;
        margin-bottom: -3rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: .5rem;
        padding-right: 0;
        justify-content: space-around;
        margin: 0 0 -.5rem;
        border-bottom: 1px solid #f1c03e;
        padding-bottom: .2rem;
    }
`;

const ListItem = styled.li`
    padding: .5rem 1rem;
    color: #00ACEE;
    font-weight: bold;
    &:hover {
        background-color: #F5F5F5;
        border-radius: 5px;
    }
`;

const TitleContainer = styled.div`
    ${(props) => props.theme.breakpoints.up('sm')} {
        padding: 2rem 0;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 1.2rem 0;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    ${(props) => props.theme.breakpoints.up('sm')} {
        justify-content: end;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        justify-content: center;
    }
`;
function Header(): JSX.Element {
    return (
        <Container>
            <Grid container spacing={0}>
                <Grid item xs={12} xl={12}>
                    <List>
                        <ListItem>Docs</ListItem>
                        <ListItem>Search packages</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Stats</ListItem>
                    </List>
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                    <LogoContainer>
                        <Logo alt='logo' src={LogoIcon} />
                    </LogoContainer>
                </Grid>
                <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
                    <TitleContainer>
                        <PageTitle>
                            Bower Search
                        </PageTitle>
                        <Subtitle>Powered by libraries.io</Subtitle>
                    </TitleContainer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;
