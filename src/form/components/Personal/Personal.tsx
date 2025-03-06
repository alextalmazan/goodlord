import { FormField, FormSection } from '../../../components';

export const Personal = () => {
    return (
        <FormSection title="Personal">
            <FormField
                formLabel="First name"
                htmlFor="first_name"
                fieldName="first_name"
            />

            <FormField
                formLabel="Last name"
                htmlFor="last_name"
                fieldName="last_name"
            />

            <FormField
                formLabel="Address"
                htmlFor="current_address"
                fieldName="current_address"
            />
        </FormSection>
    );
};
