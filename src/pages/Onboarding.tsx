import { OnboardingLayout } from '../layout/OnboardingLayout';
import { Heading } from '@radix-ui/themes';

export const OnboardingPage = () => {
  return (
    <OnboardingLayout>
      <Heading align={'center'} as={'h1'} size={'9'} weight={'bold'}>
        Mellowdy
      </Heading>
    </OnboardingLayout>
  );
};
