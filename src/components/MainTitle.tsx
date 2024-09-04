import { Heading } from '@radix-ui/themes';
import styled from 'styled-components';

interface MainTitleProps {
  variant?: 'primary' | 'secondary';
}

const CustomHeading = styled(Heading)<MainTitleProps>`
  font-family: var(--heading-font-family);
  align-self: center;
  font-size: 54px;
  font-weight: 400;
  text-shadow: -2px 2px 0px rgba(0, 0, 0, 0.25);

  ${({ variant }) =>
    variant === 'primary' &&
    `
      color: var(--mellowdy-white);
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      color: var(--mellowdy-orange);
    `}
`;

export const MainTitle = ({ variant = 'primary' }: MainTitleProps) => {
  return (
    <CustomHeading as={'h1'} variant={variant}>
      Mellowdy
    </CustomHeading>
  );
};
