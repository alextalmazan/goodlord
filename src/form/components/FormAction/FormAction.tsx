import './FormAction.css';

export interface FormActionProps {
    disabled: boolean;
    isLoading: boolean;
}

export const FormAction = ({ disabled, isLoading }: FormActionProps) => {
    return (
        <div className="form-buttons">
            <button className="cancel-button" type="button">
                Cancel
            </button>
            <button className="submit-button" type="submit" disabled={disabled}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    );
};
