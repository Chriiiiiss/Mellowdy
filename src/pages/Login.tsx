import { Button, Flex, Heading } from '@radix-ui/themes';
import { LoginLayout } from '../layout/LoginLayout';
import { PersonIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const SSOButton = styled(Button).attrs({ size: '4' })``;

export const LoginPage = () => {
  return (
    <LoginLayout>
      <Heading align={'center'} as={'h1'}>
        Mellowdy
      </Heading>
      <Flex gap="3" direction={'column'} align={'center'} justify={'center'}>
        <SSOButton>
          <PersonIcon /> Sign in with Spotify
        </SSOButton>
        <SSOButton>
          <PersonIcon /> Sign in with Deezer
        </SSOButton>
      </Flex>
      <Button>Submit</Button>
    </LoginLayout>
  );
};
