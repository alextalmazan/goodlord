import { useFormikContext } from 'formik';
import { FormField, FormSection } from '../../../components';
import { FormFieldFeedback } from '../../../components/FormFeedback/FormFieldFeedback';
import { ReferencingFormData } from '../../../validationSchema/schema';
import './Employer.css';

export const Employer = () => {
    const { errors, touched } = useFormikContext<ReferencingFormData>();
    return (
        <FormSection title="Employer">
            <FormField
                formLabel="Employer name"
                htmlFor="employer_name"
                fieldName="employer_name"
            />
            <div className="date-container">
                <div className="feedback-field">
                    <FormField
                        formLabel="Employment start date"
                        htmlFor="employment_start_date"
                        fieldName="employment_start_date"
                        placeholder="20250301"
                    />
                    <FormFieldFeedback
                        errorMessage={errors.employment_start_date}
                        error={errors.employment_start_date}
                        touched={touched.employment_start_date}
                    />
                </div>
                <div className="feedback-field">
                    <FormField
                        formLabel="Employment end date"
                        htmlFor="employment_end_date"
                        fieldName="employment_end_date"
                        placeholder="20250301"
                    />
                    <FormFieldFeedback
                        errorMessage={errors.employment_end_date}
                        error={errors.employment_end_date}
                        touched={touched.employment_end_date}
                    />
                </div>
            </div>
        </FormSection>
    );
};
