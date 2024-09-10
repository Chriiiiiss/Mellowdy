import { OnboardingLayout } from '../layout/OnboardingLayout';
import { OnboardingCard } from '../components/onboarding/Card';
import { MainTitle } from '../components/MainTitle';
import { Box, Container, Grid, Text } from '@radix-ui/themes';
import { styled } from 'styled-components';
import { OnboardingStep } from '../components/onboarding/Step';
import { OnboardingButton } from '../components/onboarding/Button';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomText = styled(Text)`
  font-family: var(--default-font-family);
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--mellowdy-black);
`;

const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepList = [
  {
    label: 'Créez vos playlists',
    icon: 'playlist',
  },
  {
    label: 'Ajoutez des amis',
    icon: 'friends',
  },
  {
    label: 'Ecoutez vos musiques',
    icon: 'music',
  },
];

export const OnboardingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5500); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <OnboardingLayout>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
            key="mainTitle"
          >
            <MainTitle />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            key="onboardingCard"
          >
            <Box>
              <OnboardingCard>
                <CustomText as="p">Bienvenue sur</CustomText>
                <Container align={'center'}>
                  <Grid columns={'1'} gap={'8'} justify={'center'}>
                    <CustomBox>
                      <MainTitle variant="secondary" />
                    </CustomBox>

                    {StepList.map((step, index) => (
                      <CustomBox key={index}>
                        <OnboardingStep
                          label={step.label}
                          icon={step.icon as 'playlist' | 'friends' | 'music'}
                        />
                      </CustomBox>
                    ))}
                    <CustomBox>
                      <OnboardingButton
                        onClick={() => console.log('click')}
                        label="Commencer"
                        iconEnd="ic:round-chevron-right"
                      />
                    </CustomBox>
                  </Grid>
                </Container>
              </OnboardingCard>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </OnboardingLayout>
  );
};
