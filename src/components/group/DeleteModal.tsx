import { Dialog, Flex } from '@radix-ui/themes';
import { MellowdyButton } from '../Button';
import { useDeleteOrga } from '../../hooks/organization/deleteOrga';
import { useNavigate } from '@tanstack/react-router';

interface ProfileDialogProps {
  id?: number;
  open: boolean;
  onClose: () => void;
}

const DeleteModal = ({ open, onClose, id }: ProfileDialogProps) => {
  const deleteOrga = useDeleteOrga();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteOrga.mutateAsync(id.toString());

      onClose();
      navigate({ to: '/groupList' });
    } catch (error) {
      console.error('Error while deleting group: ', error);
    }
  };
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Suppression</Dialog.Title>
        <Dialog.Description>
          Êtes-vous sûr de vouloir supprimer ce groupe ?
        </Dialog.Description>
        <Flex justify="center" mt="4" gap={'8'} style={{ width: '100%' }}>
          <MellowdyButton onClick={handleDelete} size="medium" label="oui" />
          <Dialog.Close>
            <MellowdyButton
              onClick={() => onClose()}
              size="medium"
              label="non"
              variant="soft"
            />
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
export default DeleteModal;
