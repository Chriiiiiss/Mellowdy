import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@radix-ui/themes';
import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  label: string;
  // use the iconify icon names only for the iconStart and iconEnd props
  iconStart?: string;
  iconEnd?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'soft';
  size?: 'small' | 'medium' | 'large';
}

const primaryStyle = css`
  background-color: var(--mellowdy-orange);
  color: var(--mellowdy-white);
`;

const secondaryStyle = css`
  background-color: var(--mellowdy-white);
  color: var(--mellowdy-orange);
`;

const CustomButton = styled(Button)<{
  variant?: 'primary' | 'secondary' | 'soft';
  size?: 'small' | 'medium' | 'large';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 200px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--mellowdy-orange);

  ${({ variant }) => (variant === 'primary' ? primaryStyle : secondaryStyle)}
  ${({ size }) =>
    size === 'small'
      ? 'padding: 10px 8px; min-width: 120px; font-size: 12px;'
      : size === 'medium'
        ? 'padding: 16px 14px; min-width: 160px; font-size: 14px;'
        : 'padding: 22px 20px; min-width: 200px; font-size: 16px;'}
`;

export const MellowdyButton = ({
  onClick,
  label,
  iconStart,
  iconEnd,
  isLoading,
  variant = 'primary',
  size = 'large',
}: ButtonProps) => {
  return (
    <CustomButton
      onClick={onClick}
      loading={isLoading}
      variant={variant}
      size={size}
    >
      {iconStart && <Icon icon={iconStart} height="24" />}
      {label}
      {iconEnd && <Icon icon={iconEnd} height="24" />}
    </CustomButton>
  );
};
