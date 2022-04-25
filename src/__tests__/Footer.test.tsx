import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../style/Theme';
import Footer from '../components/footer/Footer';

describe('Footer Test', () => {
    it('should render footer', () => {
        render(
            <ThemeProvider theme={theme}>
                <Footer />
            </ThemeProvider>,
        );
        expect(screen.queryByText(/Our supporters:/)).toBeInTheDocument();
    });
});

export { };
