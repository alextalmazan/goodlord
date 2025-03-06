import { describe, expect, it } from 'vitest';
import { ReferenceData } from '../types';
import { referencingSchemaInitialValues } from '../validationSchema/schema';
import { buildReferencingValues } from './utils';

describe('buildReferencingValues', () => {
    it('should correctly map values to ReferenceData structure', () => {
        const mockValues = {
            first_name: 'John',
            last_name: 'Doe',
            current_address: '123 Main St',
            employer_name: 'Tech Corp',
            employment_start_date: '2023-01-01',
            employment_end_date: '2024-01-01',
            guarantor_name: 'Jane Doe',
            guarantor_address: '456 Elm St',
            guarantor_relation: 'Parent',
        };

        const expectedResult: ReferenceData = {
            personal: {
                first_name: 'John',
                last_name: 'Doe',
                current_address: '123 Main St',
            },
            employer: [
                {
                    name: 'Tech Corp',
                    start_date: '2023-01-01',
                    end_date: '2024-01-01',
                },
            ],
            guarantor: {
                name: 'Jane Doe',
                address: '456 Elm St',
                relation: 'Parent',
            },
        };

        const result = buildReferencingValues(mockValues);
        expect(result).toEqual(expectedResult);
    });

    it('should handle empty values gracefully', () => {
        const result = buildReferencingValues(referencingSchemaInitialValues);

        expect(result).toEqual({
            personal: {
                first_name: referencingSchemaInitialValues.first_name,
                last_name: referencingSchemaInitialValues.last_name,
                current_address: referencingSchemaInitialValues.current_address,
            },
            employer: [
                {
                    name: referencingSchemaInitialValues.employer_name,
                    start_date:
                        referencingSchemaInitialValues.employment_start_date,
                    end_date:
                        referencingSchemaInitialValues.employment_end_date,
                },
            ],
            guarantor: {
                name: referencingSchemaInitialValues.guarantor_name,
                address: referencingSchemaInitialValues.guarantor_address,
                relation: referencingSchemaInitialValues.guarantor_relation,
            },
        });
    });
});
