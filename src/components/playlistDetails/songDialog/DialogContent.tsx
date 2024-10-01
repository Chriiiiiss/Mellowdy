import { Flex, Text } from '@radix-ui/themes';

const SongDialog = () => {
  return (
    <Flex direction={'column'} gap={'3'} p={'5'}>
      <Text size={'2'} weight={'bold'}>
        Titre de la musique
      </Text>
      <Flex gap={'2'} direction={'column'}>
        <Text size={'2'}>Ecouté par</Text>
        <Flex justify="between" align={'center'}>
          <Flex align={'center'} gap={'2'}>
            {/* <Avatar radius="full"></Avatar> */}
            <Text>Artiste</Text>
          </Flex>
          <Text size={'1'}>Actuellement</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SongDialog;
