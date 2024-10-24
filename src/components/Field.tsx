import * as Form from '@radix-ui/react-form';
import styled from 'styled-components';

interface FormFieldProps {
  label: string;
  type: 'email' | 'text' | 'password' | 'url';
  valueMissing?: string;
  name?: string;
  typeMismatch?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FormFieldContainer = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  gap: 10px;
`;

const FormControl = styled(Form.Control)`
  height: 25px;
  border-radius: 8px;
  border: 1px solid var(--mellowdy-orange);
  padding: 5px;
`;

const FormMessage = styled(Form.Message)`
  font-size: 13px;
  opacity: 0.8;
  color: var(--mellowdy-red);
`;

export const FormField = ({
  name,
  label,
  type,
  valueMissing,
  typeMismatch,
  required,
  placeholder,
  onChange,
}: FormFieldProps) => {
  const fieldName = name || label.toLowerCase();
  return (
    <FormFieldContainer name={fieldName}>
      <Form.Label>{label}</Form.Label>

      <FormControl
        type={type}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
      {valueMissing && (
        <FormMessage match="valueMissing">{valueMissing}</FormMessage>
      )}
      {typeMismatch && (
        <FormMessage match="typeMismatch">{typeMismatch}</FormMessage>
      )}
    </FormFieldContainer>
  );
};
