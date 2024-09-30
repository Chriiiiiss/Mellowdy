import * as Form from '@radix-ui/react-form';

interface FormFieldProps {
  label: string;
  type: 'email' | 'text' | 'password' | 'url';
  valueMissing?: string;
  typeMismatch?: string;
  required: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({
  label,
  type,
  valueMissing,
  typeMismatch,
  required,
  onChange,
  placeholder,
}: FormFieldProps) => {
  const name = label.toLowerCase();
  return (
    <Form.Field
      style={{
        display: 'grid',
        marginBottom: '15px',
      }}
      name={name}
      aria-placeholder={placeholder}
    >
      <Form.Label>{label}</Form.Label>

      <Form.Control
        type={type}
        required={required}
        onChange={onChange}
        style={{
          height: '25px',
          borderRadius: '8px',
          border: '1px solid var(--mellowdy-orange)',
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