import styled from 'styled-components';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';

const Container = styled.div`
    display: flex;
    position: relative;
    ${(props) => props.theme.breakpoints.down('md')} {
        justify-content: flex-start !important;
        padding: 0 .5rem;
    };
    ${(props) => props.theme.breakpoints.up('md')} {
        justify-content: center !important;
    };
`;

const SidebarContainer = styled.div`
    ${(props) => props.theme.breakpoints.down('md')} {
        width: 2rem;
        min-width: 2rem;
        overflow-x: hidden;
    };
    ${(props) => props.theme.breakpoints.up('md')} {
        width: 13rem;
    }; 
`;

const ContentContainer = styled.div`
    ${(props) => props.theme.breakpoints.down('md')} {
        flex-grow: 1;
    };
    ${(props) => props.theme.breakpoints.up('md')} {
        width: 40rem;
    };  
`;

function MainPage(): JSX.Element {
    return (
        <div>
            <Header />
            <Container>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <ContentContainer>
                    <Content />
                </ContentContainer>
            </Container>
            <Container>
                <SidebarContainer />
                <ContentContainer>
                    <Footer />
                </ContentContainer>
            </Container>
        </div>
    );
}

export default MainPage;
