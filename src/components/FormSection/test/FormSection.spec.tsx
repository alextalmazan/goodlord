import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormSection, FormSectionProps } from '../FormSection';

const defaultProps: FormSectionProps = {
    children: <div data-testid="hello">Hello World</div>,
    title: 'Test',
};
const setup = (ownProps?: Partial<FormSectionProps>) => {
    return render(<FormSection {...defaultProps} {...ownProps} />);
};
describe('FormSection', () => {
    it('renders children if the property is present', () => {
        setup();
        expect(screen.getByTestId('hello')).toBeInTheDocument();
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it("doesn't render children prop if not passed", () => {
        setup({ children: null });
        expect(screen.queryByTestId('hello')).not.toBeInTheDocument();
        expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    });
});
