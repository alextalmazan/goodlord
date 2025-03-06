import { act, render, screen, within } from '@testing-library/react';
import { Formik } from 'formik';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    referecingSchema,
    referencingSchemaInitialValues,
} from '../../../../validationSchema/schema';

import userEvent from '@testing-library/user-event';
import { Employer } from '../Employer';

const setup = () => {
    return render(
        <Formik
            initialValues={referencingSchemaInitialValues}
            onSubmit={vi.fn()}
            validationSchema={referecingSchema}
        >
            <Employer />
        </Formik>
    );
};

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Employer', () => {
    it('renders employer name, employment start date and employment end date fields', () => {
        setup();
        expect(screen.getByLabelText('Employer name')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Employment start date')
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Employment end date')
        ).toBeInTheDocument();
    });

    it('renders required fields errors when validation fails', async () => {
        await act(() => setup());
        expect(
            screen.getByLabelText('Employment start date')
        ).toBeInTheDocument();
        await userEvent.type(
            screen.getByLabelText('Employment start date'),
            'Test name'
        );
        await userEvent.tab();
        const alert = await screen.findAllByRole('alert');
        expect(alert[0]).toBeInTheDocument();
        expect(
            within(alert[0]).getByText('Must be in YYYYMMDD format')
        ).toBeInTheDocument();
    });
});
