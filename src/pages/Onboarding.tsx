import { OnboardingLayout } from '../layout/OnboardingLayout';
import { Heading } from '@radix-ui/themes';
import styled from 'styled-components';
import { OnboardingCard } from '../components/OnboardingCard';
import { MainTitle } from '../components/MainTitle';

export const OnboardingPage = () => {
  return (
    <OnboardingLayout>
      <MainTitle />
    </OnboardingLayout>
  );
};
