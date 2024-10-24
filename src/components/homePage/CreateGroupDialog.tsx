import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import { GroupCreateForm } from '../group/CreateForm';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react/dist/iconify.js';

const AddButton = styled(Flex)`
  width: 96px;
  height: 96px;
  background-image: url('/images/backgrounds/AddBg.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

interface CreateGroupDialogProps {
  isFull?: boolean;
}

export const CreateGroupDialog = ({
  isFull = false,
}: CreateGroupDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        {isFull ? (
          <Flex align={'center'} direction={'column'} gap={'2'}>
            <AddButton justify={'center'} align={'center'}>
              <Icon
                icon={'ph:plus'}
                fontSize={'50px'}
                color="var(--mellowdy-white)"
              />
            </AddButton>
            <Flex maxWidth={'104px'}>
              <Text as={'p'} size={'1'} color="gray" truncate>
                Créer un groupe
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Button>Créer un groupe</Button>
        )}
      </Dialog.Trigger>
      <Dialog.Content>
        <Flex align={'center'} justify={'center'}>
          <GroupCreateForm setOpenDialog={setOpen} />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
