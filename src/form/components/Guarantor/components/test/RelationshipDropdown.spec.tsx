import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Formik } from 'formik';
import {
    referecingSchema,
    referencingSchemaInitialValues,
} from '../../../../../validationSchema/schema';
import { describe, expect, it, vi } from 'vitest';
import RelationshipDropdown from '../RelationshipDropdown';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setup = () => {
    return render(
        <Formik
            initialValues={referencingSchemaInitialValues}
            onSubmit={vi.fn()}
            validationSchema={referecingSchema}
        >
            <RelationshipDropdown />
        </Formik>
    );
};

describe('RelationshipDropdown', () => {
    it('renders a select element', () => {
        setup();
        expect(
            screen.getByRole('combobox', {
                name: 'Relationship to guarantor',
            })
        ).toBeInTheDocument();
        expect(
            screen.getByText('Relationship to guarantor')
        ).toBeInTheDocument();
    });

    it('selects Parent element from the dropdown', async () => {
        await act(() => setup());
        const selectElement = screen.getByText('Select...');
        fireEvent.mouseDown(selectElement);

        await waitFor(() => {
            expect(screen.getByText('Sibling')).toBeInTheDocument();
            expect(screen.getByText('Employer')).toBeInTheDocument();
            expect(screen.getByText('Other')).toBeInTheDocument();
        });

        await userEvent.click(screen.getByText('Sibling'));
        expect(screen.queryByText('Select...')).not.toBeInTheDocument();
        expect(screen.getByText('Sibling')).toBeVisible();
    });
});
