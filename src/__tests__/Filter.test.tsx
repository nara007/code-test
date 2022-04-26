import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Filter Test', () => {
    it('should render filtered results', async () => {
        render(<App />);
        userEvent.type(screen.getByTestId('search'), 'react');
        const bootstrapResult = await screen.findAllByText(/react/i, {}, { timeout: 3000 });
        expect(bootstrapResult.length).toBeGreaterThanOrEqual(5);
    });
});

export { };
