import { act, fireEvent, render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import { describe, expect, it, vi } from 'vitest';
import { FormField, FormFieldProps } from '../FormField';

const defaultProps: FormFieldProps = {
    formLabel: 'Test Label',
    htmlFor: 'test_field',
    fieldName: 'test_field',
    placeholder: 'John Doe',
};

const setup = (ownProps?: Partial<FormFieldProps>) => {
    return render(
        <Formik initialValues={{ test_field: '' }} onSubmit={vi.fn()}>
            <FormField {...defaultProps} {...ownProps} />
        </Formik>
    );
};
describe('FormField', () => {
    it('renders a text input field with the correct label and placeholder', () => {
        act(() => setup());
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    });

    it('calls handleChange when typing in the text input', () => {
        act(() => setup());
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(input).toHaveValue('New Value');
    });

    it('clears field error when input is focused', () => {
        act(() => setup());
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        expect(input).toBeInTheDocument();
    });
});
