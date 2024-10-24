import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import { OnboardingLayout } from '../layout/OnboardingLayout';
import { MainTitle } from '../components/MainTitle';
import { OnboardingCard } from '../components/onboarding/Card';
import { MellowdyButton } from '../components/Button';
import { useUserState } from '../stores/useUserState';
import { JwtPayload, TAuthMessage } from '../types/auth';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '../interfaces/user';
import { useNavigate } from '@tanstack/react-router';
import { PROVIDER } from '../constants/app';
import { useState } from 'react';

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
  const { login } = useUserState();
  const navigate = useNavigate();

  const [loadingButton, setLoading] = useState<{ [key: string]: boolean }>({});

  const handleLogin = (label: string, url: string) => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    setLoading((prev) => ({ ...prev, [label]: true }));

    const popup = window.open(
      url,
      label,
      `width=${width},height=${height},top=${top},left=${left}`
    );

    if (!popup) {
      console.error('popup could not be opened');
      setLoading((prev) => ({ ...prev, [label]: false }));
      return;
    }

    const handleMessage = async (event: MessageEvent) => {
      // Delete the second condition for the production build
      if (event.origin === import.meta.env.VITE_API_URL && popup) {
        const data = event.data as TAuthMessage;
        popup.close(); // Just in case the popup is still open
        const decodedToken = jwtDecode<JwtPayload>(data.token);
        const user: IUser = {
          username: decodedToken.displayName,
        };

        if (decodedToken.providerName === PROVIDER.APPLE) {
          // Apple workaround to retrieve the user token

          try {
            const musicKitInstance = MusicKit.getInstance();
            const userToken = await musicKitInstance.authorize();

            user.appleMusicToken = userToken;
          } catch (error) {
            console.error('Error during MusicKit authorization:', error);
            // TODO: Proc un toast d'erreur
          }
        } else {
          window.removeEventListener('message', handleMessage);
        }

        login(user, data.token, decodedToken.providerID);
        setLoading((prev) => ({ ...prev, [label]: false }));
        if (data.newUser) navigate({ to: '/register' });
        else navigate({ to: '/homePage' });
      }
    };

    window.addEventListener('message', handleMessage);

    const interval = setInterval(() => {
      if (popup.closed) {
        clearInterval(interval);
        setLoading((prev) => ({ ...prev, [label]: false }));
        window.removeEventListener('message', handleMessage);
      }
    }, 500);

    return () => {
      console.log('Removing listener, if not redirected an error occured');
      window.removeEventListener('message', handleMessage);
    };
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
                  <MellowdyButton
                    onClick={() => handleLogin(provider.label, provider.url)}
                    label={provider.label}
                    iconStart={provider.icon}
                    isLoading={loadingButton[provider.label] || false}
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
