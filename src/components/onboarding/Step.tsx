import { Text } from '@radix-ui/themes';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

interface OnboardingStepProps {
  label: string;
  icon: 'playlist' | 'friends' | 'music';
}

const CustomContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const StepText = styled(Text)`
  font-family: var(--default-font-family);
  font-size: 24px;
  font-weight: 500;
  color: var(--mellowdy-black);
  text-align: center;
  width: max-content;
`;

const ThickIcon = styled(Icon)`
  stroke-width: 1.5 !important;
`;

export const OnboardingStep = ({ label, icon }: OnboardingStepProps) => {
  return (
    <CustomContainer>
      <IconContainer>
        {icon === 'playlist' && (
          <ThickIcon icon="hugeicons:playlist-02" height="36" />
        )}
        {icon === 'friends' && <ThickIcon icon="iconoir:group" height="36" />}
        {icon === 'music' && (
          <ThickIcon icon="lets-icons:music-light" height="36" />
        )}
      </IconContainer>
      <StepText>{label}</StepText>
    </CustomContainer>
  );
};
