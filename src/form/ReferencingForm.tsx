import { Form, Formik } from 'formik';
import {
    referecingSchema,
    referencingSchemaInitialValues,
} from '../validationSchema/schema';

import { useExecutePostReference } from '../hooks/useExecutePostReference';
import { Personal } from './components/Personal/Personal';
import { Employer } from './components/Employer/Employer';
import { Guarantor } from './components/Guarantor/Guarantor';
import { FormAction } from './components/FormAction/FormAction';
import { buildReferencingValues } from '../utils/utils';

const ReferencingForm = () => {
    const { postRefernce, response, loading, error } =
        useExecutePostReference();

    const handleSubmit = async (
        values: typeof referencingSchemaInitialValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        // Optionally transform the values if needed.
        const formData = buildReferencingValues(values);
        await postRefernce(formData);
        alert(JSON.stringify(response, null, 2));
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={referencingSchemaInitialValues}
            validationSchema={referecingSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, isSubmitting }) => (
                <Form>
                    <Personal />
                    <Employer />
                    <Guarantor />
                    <FormAction
                        disabled={!isValid || loading || isSubmitting}
                        isLoading={loading || isSubmitting}
                    />
                    {error && <p className="form-submit-error">{error}</p>}
                </Form>
            )}
        </Formik>
    );
};

export default ReferencingForm;
