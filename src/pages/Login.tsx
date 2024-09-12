import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import { OnboardingLayout } from '../layout/OnboardingLayout';
import { MainTitle } from '../components/MainTitle';
import { OnboardingCard } from '../components/onboarding/Card';
import { OnboardingButton } from '../components/onboarding/Button';

const CustomText = styled(Text)`
  font-family: var(--default-font-family);
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  color: var(--mellowdy-black);
  text-align: center;
`;

const ProviderList = [
  {
    label: 'Spotify',
    icon: 'mdi:spotify',
  },
  {
    label: 'Apple Music',
    icon: 'simple-icons:applemusic',
  },
];

export const LoginPage = () => {
  return (
    <OnboardingLayout>
      <Box>
        <OnboardingCard>
          <Container align={'center'} minHeight={'530px'}>
            <Grid columns={'1'} gap={'8'} justify={'center'}>
              <Flex justify={'center'}>
                <MainTitle variant="secondary" />
              </Flex>
              <CustomText>Connectez votre appli de musique préférée</CustomText>
              {ProviderList.map((provider, index) => (
                <Flex key={index} justify={'center'}>
                  <OnboardingButton
                    onClick={() => console.log(provider.label)}
                    label={provider.label}
                    iconStart={provider.icon}
                  />
                </Flex>
              ))}
            </Grid>
          </Container>
        </OnboardingCard>
      </Box>
    </OnboardingLayout>
  );
};
