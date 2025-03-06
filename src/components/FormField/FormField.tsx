import { useFormikContext } from 'formik';
import './FormField.css';
import { ReferencingFormData } from '../../validationSchema/schema';

export interface FormFieldProps {
    formLabel: string;
    htmlFor: string;
    fieldName: string;
    placeholder?: string;
    className?: string;
}

export const FormField = ({
    formLabel,
    htmlFor,
    fieldName,
    placeholder,
    className,
}: FormFieldProps) => {
    const { setFieldError, handleChange, handleBlur, values } =
        useFormikContext<ReferencingFormData>();

    return (
        <div className="form-field">
            <label htmlFor={htmlFor}>{formLabel}</label>
            <input
                type="text"
                id={htmlFor}
                name={fieldName}
                onFocus={() => {
                    if (true) {
                        setFieldError(fieldName, '');
                    }
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldName as keyof typeof values]}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};
