import * as Form from '@radix-ui/react-form';
import { useState } from 'react';

interface TextAreaProps {
  label: string;
  valueMissing?: string;
  required?: boolean;
  maxLength?: number;
}

export const TextArea = ({
  label,
  valueMissing,
  required,
  maxLength,
}: TextAreaProps) => {
  const [charCount, setCharCount] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length);
  };
  return (
    <Form.Field
      style={{
        display: 'grid',
        marginBottom: '15px',
      }}
      name={label.toLowerCase()}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        asChild
        style={{
          minHeight: '60px',
          borderRadius: '8px',
          border: '1px solid var(--mellowdy-orange)',
          padding: '5px',
        }}
      >
        <textarea
          required={required}
          maxLength={maxLength}
          onChange={handleChange}
        />
      </Form.Control>
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
      {maxLength && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            bottom: '5px',
            right: '10px',
            fontSize: '12px',
            color: 'var(--mellowdy-black)',
          }}
        >
          {charCount}/{maxLength}
        </div>
      )}
    </Form.Field>
  );
};
