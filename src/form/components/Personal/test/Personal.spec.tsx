import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    referecingSchema,
    referencingSchemaInitialValues,
} from '../../../../validationSchema/schema';
import { Personal } from '../Personal';

const setup = () => {
    return render(
        <Formik
            initialValues={referencingSchemaInitialValues}
            onSubmit={vi.fn()}
            validationSchema={referecingSchema}
        >
            <Personal />
        </Formik>
    );
};

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Personal', () => {
    it('renders First Name, Last Name and Address Fields', () => {
        setup();
        expect(screen.getByLabelText('First name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last name')).toBeInTheDocument();
        expect(screen.getByLabelText('Address')).toBeInTheDocument();
    });
});
