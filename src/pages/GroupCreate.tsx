import { Box, Container, Flex, Grid, Heading } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { GroupCreateForm } from '../components/group/CreateForm';

export const GroupCreate = () => {
  return (
    <MainLayout>
      <Box>
        <Container align={'center'} minHeight={'100%'}>
          <Grid columns={'1'} gap={'5'} justify={'center'}>
            <Heading>Créer un groupe</Heading>
            <Flex justify={'center'}>
              <GroupCreateForm />
            </Flex>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};
