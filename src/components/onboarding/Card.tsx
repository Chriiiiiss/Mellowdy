import { Container } from '@radix-ui/themes';
import { styled } from 'styled-components';

interface OnboardingCardProps {
  children: React.ReactNode;
}

const CustomCard = styled(Container)`
  background-color: var(--mellowdy-white);
  color: var(--mellowdy-black);
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 345px;
  max-height: 688px;
  display: flex;
  justify-content: center;
`;

export const OnboardingCard = ({ children }: OnboardingCardProps) => {
  return <CustomCard>{children}</CustomCard>;
};
