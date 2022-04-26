import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Sort Test', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render sorted results', async () => {
        userEvent.click(screen.getByLabelText('sort-by-stars'));
        await new Promise((r) => { setTimeout(r, 2000); });
        const reactResults = screen.queryAllByLabelText(/^stars$/);
        expect(Number(reactResults[0].innerHTML))
            .toBeGreaterThanOrEqual(Number(reactResults[1].innerHTML));
        expect(Number(reactResults[1].innerHTML))
            .toBeGreaterThanOrEqual(Number(reactResults[2].innerHTML));
        expect(Number(reactResults[2].innerHTML))
            .toBeGreaterThanOrEqual(Number(reactResults[3].innerHTML));
        expect(Number(reactResults[3].innerHTML))
            .toBeGreaterThanOrEqual(Number(reactResults[4].innerHTML));
    });
});

export { };
