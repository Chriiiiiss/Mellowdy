import styled from 'styled-components';
import { Dialog, Flex, Heading } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { RegisterForm } from '../register/Form';
import { useState } from 'react';

const HeadingIcon = styled(Heading)`
  display: flex;
  justify-content: right;
`;

const PencilIcon = styled(Pencil1Icon)`
  width: 20px;
  height: 20px;
`;

const PlaylistAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <HeadingIcon>
        <Dialog.Trigger>
          <PencilIcon />
        </Dialog.Trigger>
      </HeadingIcon>
      <Dialog.Content>
        <Dialog.Title>Modifier votre profil</Dialog.Title>
        <Flex justify={'center'}>
          <RegisterForm setModalOpen={setOpen} />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default PlaylistAction;
