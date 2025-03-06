import { FormikErrors } from 'formik';
import './FormFieldFeedback.css';

export type FormFeedbackProps = {
    error?: string | FormikErrors<Date>;
    touched?: boolean | FormikErrors<Date>;
    errorMessage: string | undefined;
};

export const FormFieldFeedback = ({
    error,
    touched,
    errorMessage,
}: FormFeedbackProps) => {
    return (
        <>
            {touched && error ? (
                <div className="feedback-container" role="alert">
                    {errorMessage ?? ''}
                </div>
            ) : null}
        </>
    );
};
