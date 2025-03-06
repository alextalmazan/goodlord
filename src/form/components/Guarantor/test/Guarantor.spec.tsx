import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    referecingSchema,
    referencingSchemaInitialValues,
} from '../../../../validationSchema/schema';
import { Guarantor } from '../Guarantor';

const setup = () => {
    return render(
        <Formik
            initialValues={referencingSchemaInitialValues}
            onSubmit={vi.fn()}
            validationSchema={referecingSchema}
        >
            <Guarantor />
        </Formik>
    );
};

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Guarantor', () => {
    it('renders guarantor name, guarantor address and guarantor relationshipt fields', () => {
        setup();
        expect(screen.getByLabelText('Guarantor address')).toBeInTheDocument();
        expect(screen.getByLabelText('Guarantor name')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Relationship to guarantor')
        ).toBeInTheDocument();
    });
});
