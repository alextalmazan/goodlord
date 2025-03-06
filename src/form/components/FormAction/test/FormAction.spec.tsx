import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { FormAction, FormActionProps } from '../FormAction';

const mockOnSubmit = vi.fn();

const defaultProps: FormActionProps = {
    disabled: false,
    isLoading: false,
};

const setup = (ownProps?: Partial<FormActionProps>) => {
    return render(<FormAction {...defaultProps} {...ownProps} />);
};
describe('FormAction', () => {
    it('renders Cancel and Submit button', () => {
        setup();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('shows "Submitting..." text when isLoading is true', () => {
        setup({ isLoading: true });
        expect(screen.getByText('Submitting...')).toBeInTheDocument();
        expect(screen.queryByText('Submit')).not.toBeInTheDocument();
    });

    it('disables the submit button when disabled is true', () => {
        setup({ disabled: true });
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeDisabled();
    });

    it('enables the submit button when disabled is false', () => {
        setup({ disabled: false });
        const submitButton = screen.getByText('Submit');
        expect(submitButton).not.toBeDisabled();
    });

    it('does not call onSubmit when button is disabled', () => {
        setup({ disabled: false });
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});
