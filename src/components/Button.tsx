import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  label: string;
  // use the iconify icon names only for the iconStart and iconEnd props
  iconStart?: string;
  iconEnd?: string;
}

const CustomButton = styled(Button)`
  background-color: var(--mellowdy-orange);
  color: var(--mellowdy-white);
  padding: 22px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 200px;
  font-weight: 600;
  border-radius: 8px;
`;

export const MellowdyButton = ({
  onClick,
  label,
  iconStart,
  iconEnd,
}: ButtonProps) => {
  return (
    <CustomButton onClick={onClick}>
      {iconStart && <Icon icon={iconStart} height="24" />}
      {label}
      {iconEnd && <Icon icon={iconEnd} height="24" />}
    </CustomButton>
  );
};
