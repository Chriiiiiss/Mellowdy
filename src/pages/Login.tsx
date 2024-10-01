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
    url: `${import.meta.env.VITE_API_URL}/v1/oauth/login/spotify`,
  },
  {
    label: 'Apple Music',
    icon: 'simple-icons:applemusic',
    url: `${import.meta.env.VITE_API_URL}/v1/oauth/login/apple`,
  },
];

export const LoginPage = () => {
  const handleLogin = (label: string, url: string) => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popup = window.open(
      url,
      label,
      `width=${width},height=${height},top=${top},left=${left}`
    );

    window.addEventListener('message', (event) => {
      console.log(event);
      if (event.origin === import.meta.env.VITE_API_URL && popup) {
        console.log(event.data);
        popup.close();
      }
    });
  };

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
                    onClick={() => handleLogin(provider.label, provider.url)}
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
