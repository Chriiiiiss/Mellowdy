import { Button, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { CreateGroupDialog } from './CreateGroupDialog';

export const EmptyGroupState = () => {
  return (
    <Container>
      <Flex direction={'column'} gap={'2'}>
        <Heading>Vous ne possedez pas encore de groupe</Heading>
        <Text>
          Créez un groupe pour commencer à écouter de la musique ensemble.
        </Text>
        <Flex gap={'2'}>
          <CreateGroupDialog />
          {/* WIP not implemented */}
          <Button disabled variant="soft">
            Rejoindre un groupe
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
