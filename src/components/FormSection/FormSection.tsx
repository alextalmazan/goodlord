import './FormSection.css';

export interface FormSectionProps {
    children?: React.ReactNode;
    title: string;
}

export const FormSection = ({ children, title }: FormSectionProps) => {
    return (
        <fieldset className="form-section">
            <legend className="form-section-title">{title}</legend>
            {children ?? null}
        </fieldset>
    );
};
