import * as Form from '@radix-ui/react-form';

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
    <Form.Field
      style={{
        display: 'grid',
        marginBottom: '15px',
      }}
      name={fieldName}
    >
      <Form.Label>{label}</Form.Label>

      <Form.Control
        type={type}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          height: '25px',
          borderRadius: '8px',
          border: '1px solid var(--mellowdy-orange)',
          padding: '5px',
        }}
      />
      {valueMissing && (
        <Form.Message
          match="valueMissing"
          style={{
            fontSize: '13px',
            opacity: '0.8',
            color: 'var(--mellowdy-red)',
          }}
        >
          {valueMissing}
        </Form.Message>
      )}
      {typeMismatch && (
        <Form.Message
          match="typeMismatch"
          style={{
            fontSize: '13px',
            opacity: '0.8',
            color: 'var(--mellowdy-red)',
          }}
        >
          {typeMismatch}
        </Form.Message>
      )}
    </Form.Field>
  );
};
