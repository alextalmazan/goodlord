import { FormField, FormSection } from '../../../components';
import RelationshipDropdown from './components/RelationshipDropdown';

export const Guarantor = () => {
    return (
        <FormSection title="Guarantor">
            <FormField
                formLabel="Guarantor name"
                htmlFor="guarantor_name"
                fieldName="guarantor_name"
            />
            <FormField
                formLabel="Guarantor address"
                htmlFor="guarantor_address"
                fieldName="guarantor_address"
            />
            <RelationshipDropdown />
        </FormSection>
    );
};
