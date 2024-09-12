import { Flex } from '@radix-ui/themes';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/backgrounds/OnboardingBg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Flex
        align={'center'}
        direction={'column'}
        gap={'8'}
        justify={'center'}
        minHeight={'100vh'}
      >
        {children}
      </Flex>
    </div>
  );
};
