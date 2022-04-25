import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../style/Theme';
import Header from '../components/header/Header';

describe('Header Test', () => {
    it('should render header', () => {
        render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>,
        );
        expect(screen.queryByText(/^Bower Search$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Docs$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Search packages$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Blog$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Stats$/)).toBeInTheDocument();
    });
});

export { };
