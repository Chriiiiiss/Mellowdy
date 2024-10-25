import { Dialog, Flex } from '@radix-ui/themes';
import { RegisterForm } from '../register/Form';

interface ProfileDialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

const EditModal = ({ open, onClose }: ProfileDialogProps) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Content>
      <Dialog.Title>Modifier votre profil</Dialog.Title>
      <Flex justify={'center'}>
        <RegisterForm setModalOpen={onClose} />
      </Flex>
    </Dialog.Content>
  </Dialog.Root>
);

export default EditModal;
