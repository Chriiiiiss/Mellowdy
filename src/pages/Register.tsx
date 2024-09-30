import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import { OnboardingLayout } from '../layout/OnboardingLayout';
import { OnboardingCard } from '../components/onboarding/Card';
import { MainTitle } from '../components/MainTitle';
import { RegisterForm } from '../components/register/Form';
import styled from 'styled-components';

const CustomText = styled(Text)`
  font-family: var(--default-font-family);
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  color: var(--mellowdy-black);
  text-align: center;
`;

export const RegisterPage = () => {
  return (
    <OnboardingLayout>
      <Box>
        <OnboardingCard>
          <Container align={'center'} minHeight={'530px'}>
            <Grid columns={'1'} gap={'5'} justify={'center'}>
              <Flex justify={'center'}>
                <MainTitle variant="secondary" />
              </Flex>
              <CustomText>Créez votre compte Mellowdy</CustomText>
              <Flex justify={'center'}>
                <RegisterForm />
              </Flex>
            </Grid>
          </Container>
        </OnboardingCard>
      </Box>
    </OnboardingLayout>
  );
};
