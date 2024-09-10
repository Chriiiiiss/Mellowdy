import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

interface OnboardingButtonProps {
  onClick: () => void;
  label: string;
  // use the iconify icon names only for the iconStart and iconEnd props
  iconStart?: string;
  iconEnd?: string;
}

const CustomButton = styled(Button)`
  background-color: var(--mellowdy-orange);
  color: var(--mellowdy-white);
  padding: 20px 20px;
  max-width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OnboardingButton = ({
  onClick,
  label,
  iconStart,
  iconEnd,
}: OnboardingButtonProps) => {
  return (
    <CustomButton onClick={onClick}>
      {iconStart && <Icon icon={iconStart} height="24" />}
      {label}
      {iconEnd && <Icon icon={iconEnd} height="24" />}
    </CustomButton>
  );
};
