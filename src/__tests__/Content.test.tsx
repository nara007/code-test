import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Content Test', () => {
    it('should render content', async () => {
        render(<App />);
        const bootstrap = await screen.findAllByText(/bootstrap/i);
        const fontAwesome = await screen.findAllByText(/font-awesome/i);
        expect(bootstrap).not.toEqual([]);
        expect(fontAwesome).not.toEqual([]);
    });
});

export {};
