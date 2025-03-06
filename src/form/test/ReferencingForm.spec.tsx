import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ReferencingForm from '../ReferencingForm';

const setup = () => render(<ReferencingForm />);

beforeEach(() => {
    vi.clearAllMocks();
    window.alert = vi.fn();
});

describe('Referncing form', () => {
    it('renders a form with personal, employer and guarantor sections', () => {
        setup();
        // Check for fields rendered by Personal.
        expect(screen.getByLabelText('First name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last name')).toBeInTheDocument();
        expect(screen.getByLabelText('Address')).toBeInTheDocument();
        // Check for fields rendered by Employer.
        expect(screen.getByLabelText('Employer name')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Employment start date')
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Employment end date')
        ).toBeInTheDocument();
        // Check for fields rendered by Guarantor.
        expect(screen.getByLabelText('Guarantor name')).toBeInTheDocument();
        expect(screen.getByLabelText('Guarantor address')).toBeInTheDocument();
        // Check that FormAction buttons are rendered.
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('fills the form and call the submit', async () => {
        act(() => setup());
        await userEvent.type(
            screen.getByLabelText('First name'),
            'Goodlord First Name'
        );
        await userEvent.type(
            screen.getByLabelText('Last name'),
            'Goodlord Last Name'
        );
        await userEvent.type(
            screen.getByLabelText('Address'),
            '1 Example Road, A11 11A, Example City, United Kingdom'
        );

        await userEvent.type(
            screen.getByLabelText('Employer name'),
            'Example Company'
        );

        await userEvent.type(
            screen.getByLabelText('Employment start date'),
            '20180908'
        );

        await userEvent.type(
            screen.getByLabelText('Employment end date'),
            '20190908'
        );
        await userEvent.type(
            screen.getByLabelText('Guarantor name'),
            'Test Name'
        );
        await userEvent.type(
            screen.getByLabelText('Guarantor address'),
            '1 Guarantor Road, A11 11A, Example City, United Kingdom'
        );
        expect(screen.getByText('Submit')).toBeEnabled();
        await userEvent.click(screen.getByText('Submit'));
    });
});
