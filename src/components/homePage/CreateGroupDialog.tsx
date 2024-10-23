import { Button, Dialog, Flex } from '@radix-ui/themes';
import { GroupCreateForm } from '../group/CreateForm';
import { useState } from 'react';

export const CreateGroupDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Créer un groupe</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Flex align={'center'} justify={'center'}>
          <GroupCreateForm setOpenDialog={setOpen} />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
