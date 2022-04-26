import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Content Test', () => {
    it('should render content', async () => {
        render(<App />);
        const name = await screen.findByText(/^Name$/);
        const owner = await screen.findByText(/^Owner$/);
        const stars = await screen.findByText(/^Stars$/);
        expect(name).toBeInTheDocument();
        expect(owner).toBeInTheDocument();
        expect(stars).toBeInTheDocument();
    });
});

export {};
