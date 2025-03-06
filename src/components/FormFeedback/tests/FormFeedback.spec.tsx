import { describe, expect, it } from 'vitest';
import { FormFeedbackProps, FormFieldFeedback } from '../FormFieldFeedback';
import { render, screen } from '@testing-library/react';

const defaultProps: FormFeedbackProps = {
    touched: false,
    error: 'Some error',
    errorMessage: 'Error message',
};
const setup = (ownProps?: Partial<FormFeedbackProps>) => {
    return render(<FormFieldFeedback {...defaultProps} {...ownProps} />);
};

describe('FormFeedback', () => {
    it('does not render when touched is false', () => {
        setup();
        expect(screen.queryByRole('alert')).toBeNull();
    });

    it("does not render feedback when 'error' os fa;sy evem of 'touched' is true", () => {
        setup({ touched: true, error: undefined });
        expect(screen.queryByRole('alert')).toBeNull();
    });

    it("renders feedback when both 'touched' and 'error' are truthy", () => {
        setup({ touched: true, error: 'Some error' });
        const feedback = screen.getByRole('alert');
        expect(feedback).toBeInTheDocument();
        expect(feedback).toHaveTextContent('Error message');
    });

    it('renders an empty string when errorMessage is undefined', () => {
        setup({ touched: true, error: 'Some error', errorMessage: undefined });
        const feedback = screen.getByRole('alert');
        expect(feedback).toBeInTheDocument();
        expect(feedback.textContent).toBe('');
    });
});
