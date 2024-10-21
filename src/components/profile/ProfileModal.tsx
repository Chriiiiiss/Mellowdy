import styled from 'styled-components';
import { Dialog, Flex, Heading } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { RegisterForm } from '../register/Form';

const HeadingIcon = styled(Heading)`
  display: flex;
  justify-content: right;
`;

const PlaylistAction = () => {
  return (
    <Dialog.Root>
      <HeadingIcon>
        <Dialog.Trigger>
          <Pencil1Icon />
        </Dialog.Trigger>
      </HeadingIcon>
      <Dialog.Content>
        <Dialog.Title>Modifier votre profil</Dialog.Title>
        <Flex justify={'center'}>
          <RegisterForm />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default PlaylistAction;
