import { ReferenceData } from '../types';
import { referencingSchemaInitialValues } from '../validationSchema/schema';

export const buildReferencingValues = (
    values: typeof referencingSchemaInitialValues
): ReferenceData => {
    return {
        personal: {
            first_name: values.first_name,
            last_name: values.last_name,
            current_address: values.current_address,
        },
        employer: [
            {
                name: values.employer_name,
                start_date: values.employment_start_date,
                end_date: values.employment_end_date,
            },
        ],
        guarantor: {
            name: values.guarantor_name,
            address: values.guarantor_address,
            relation: values.guarantor_relation,
        },
    };
};
