import { render, screen } from '@testing-library/react';
import Sidebar from '../components/sidebar/Sidebar';

describe('Sidebar Test', () => {
    it('should render sidebar', () => {
        render(<Sidebar />);
        expect(screen.queryByText(/^Home$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Creating Packages$/)).toBeInTheDocument();
        expect(screen.queryByText(/^API$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Configuration$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Pluggable Resolvers$/)).toBeInTheDocument();
        expect(screen.queryByText(/^Tools$/)).toBeInTheDocument();
        expect(screen.queryByText(/^About$/)).toBeInTheDocument();
    });
});

export {};
