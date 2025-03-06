import { object, string, InferType } from 'yup';

export type Relation = 'Parent' | 'Sibling' | 'Employer' | 'Other';

const dateRegex = /^\d{4}(0[1-9]|1[0-2])([0-2]\d|3[01])$/;

export const referecingSchema = object({
    first_name: string().optional(),
    last_name: string().optional(),
    current_address: string().optional(),
    employer_name: string().optional(),
    employment_start_date: string()
        .optional()
        .matches(dateRegex, 'Must be in YYYYMMDD format'),
    employment_end_date: string()
        .optional()
        .matches(dateRegex, 'Must be in YYYYMMDD format'),
    guarantor_name: string().optional(),
    guarantor_address: string().optional(),
    guarantor_relation: string().oneOf([
        'Parent',
        'Sibling',
        'Employer',
        'Other',
    ]),
});

export const referencingSchemaInitialValues = {
    first_name: '',
    last_name: '',
    current_address: '',
    employer_name: '',
    employment_start_date: '',
    employment_end_date: '',
    guarantor_name: '',
    guarantor_address: '',
    guarantor_relation: '',
};

export type ReferencingFormData = Required<InferType<typeof referecingSchema>>;
