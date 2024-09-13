import { ChevronLeftIcon, PlayIcon, PlusIcon } from '@radix-ui/react-icons';
import { MainLayout } from '../layout/MainLayout';
import {
  Avatar,
  Dialog,
  Flex,
  IconButton,
  Link,
  Section,
  Text,
} from '@radix-ui/themes';
import styled from 'styled-components';
import PlaylistInfo from '../components/PlaylistInfo';
import PlaylistActionDropDown from '../components/PlaylistActionDropDown';

const ImageStyled = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistListenerAvatar = styled(Avatar)`
  &:not(:first-child) {
    z-index: 1;
    margin-left: -15px;
  }
`;

const PlusButton = styled(IconButton)`
  width: 25px;
  height: 25px;
`;

const PlayButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const SongContainer = styled(Flex)`
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f9f9f9;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

export const PlaylistDetails = () => {
  return (
    <MainLayout>
      <Flex align={'center'} pb={'3'}>
        <ChevronLeftIcon />
        <Text>Groupes</Text>
      </Flex>
      <PlaylistInfo />

      <Flex align={'center'} justify={'between'} pt={'40px'} pb={'10px'}>
        <Flex align={'center'} gap={'2'}>
          <Text size={'2'}>4 morceaux</Text>
          <PlusButton variant="solid" radius="full" color="orange">
            <PlusIcon />
          </PlusButton>
          <PlaylistActionDropDown />
        </Flex>
        <PlayButton variant="solid" radius="full" color="orange">
          <PlayIcon />
        </PlayButton>
      </Flex>
      <Section pt={'0px'} pb={'0px'}>
        <Flex direction={'column'} gap={'1'}>
          <Dialog.Root>
            <Dialog.Trigger>
              <SongContainer justify={'between'} align={'center'}>
                <Flex align={'center'} gap={'5'}>
                  <ImageStyled
                    src={'https://picsum.photos/55/55'}
                    width={'55px'}
                    height={'55px'}
                    alt={'Playlist'}
                  />
                  <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'} weight={'bold'}>
                      Titre de la musique
                    </Text>
                    <Text size={'2'}>Artiste</Text>
                  </Flex>
                </Flex>
                <Link>
                  <PlaylistListenerAvatar
                    fallback="A"
                    radius="full"
                    size={'2'}
                    variant="solid"
                  />
                  <PlaylistListenerAvatar
                    src={'https://picsum.photos/25/25'}
                    fallback="A"
                    radius="full"
                    size={'2'}
                    variant="solid"
                  />
                  <PlaylistListenerAvatar
                    src={'https://picsum.photos/25/25'}
                    fallback="A"
                    radius="full"
                    size={'2'}
                    variant="solid"
                    color="green"
                  />
                </Link>
              </SongContainer>
            </Dialog.Trigger>
            <DialogContent>
              <Flex direction={'column'} gap={'3'} p={'5'}>
                <Text size={'2'} weight={'bold'}>
                  Titre de la musique
                </Text>
              </Flex>
            </DialogContent>
          </Dialog.Root>
        </Flex>
      </Section>
    </MainLayout>
  );
};
