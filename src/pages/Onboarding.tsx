import { OnboardingLayout } from '../layout/OnboardingLayout';
import { OnboardingCard } from '../components/onboarding/Card';
import { MainTitle } from '../components/MainTitle';
import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import { styled } from 'styled-components';
import { OnboardingStep } from '../components/onboarding/Step';
import { MellowdyButton } from '../components/Button';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';

const CustomText = styled(Text)`
  font-family: var(--default-font-family);
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--mellowdy-black);
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
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3200); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate({ to: '/login' });
  };

  return (
    <OnboardingLayout>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
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
                <Container align={'center'} minHeight={'530px'}>
                  <Grid columns={'1'} gap={'8'} justify={'center'}>
                    <Flex justify={'center'} align={'center'}>
                      <MainTitle variant="secondary" />
                    </Flex>

                    {StepList.map((step, index) => (
                      <Flex key={index} justify={'center'} align={'center'}>
                        <OnboardingStep
                          label={step.label}
                          icon={step.icon as 'playlist' | 'friends' | 'music'}
                        />
                      </Flex>
                    ))}
                    <Flex justify={'center'} align={'center'}>
                      <MellowdyButton
                        onClick={handleClick}
                        label="Commencer"
                        iconEnd="ic:round-chevron-right"
                      />
                    </Flex>
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
