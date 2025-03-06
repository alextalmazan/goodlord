import { useFormikContext } from 'formik';
import Select, { StylesConfig } from 'react-select';
import { ReferencingFormData } from '../../../../validationSchema/schema';
import './RelationshipDropdown.css';
interface OptionType {
    value: string;
    label: string;
}

const RelationshipDropdown = () => {
    const ctx = useFormikContext<ReferencingFormData>();

    const options: OptionType[] = [
        { value: 'Parent', label: 'Parent' },
        { value: 'Sibling', label: 'Sibling' },
        { value: 'Employer', label: 'Employer' },
        { value: 'Other', label: 'Other' },
    ];

    const customStyles: StylesConfig<OptionType, false> = {
        container: (provided) => ({
            ...provided,
            width: '8rem',
            height: '3rem',
        }),
        control: (provided) => ({
            ...provided,
            border: '1px solid black',
            borderRadius: '0',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid black',
            },
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: '0',
            borderRadius: '0',
            border: '1px solid black',
            borderTop: 'none',
            boxShadow: 'none',
        }),
        menuList: (provided) => ({
            ...provided,
            padding: '0',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#f0f0f0' : 'white',
            color: 'black',
            padding: '8px 12px',
            '&:hover': {
                backgroundColor: '#f0f0f0',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'black',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '8px 12px',
        }),
    };

    return (
        <div className="relationship-dropdown-container">
            <label htmlFor="guarantor_relation" className="guarantor-label">
                Relationship to guarantor
            </label>
            <Select<OptionType>
                {...ctx.getFieldProps('guarantor_relation')}
                aria-label="Relationship to guarantor"
                inputId="guarantor_relation"
                id="guarantor-select-container"
                options={options}
                styles={customStyles}
                placeholder="Select..."
                isSearchable={false}
                name="guarantor_relation"
                value={options.find(
                    (option) => option.value === ctx.values.guarantor_relation
                )}
                onChange={(option) =>
                    ctx.setFieldValue('guarantor_relation', option?.value)
                }
                onBlur={() => ctx.setFieldTouched('guarantor_relation')}
            />
        </div>
    );
};

export default RelationshipDropdown;
