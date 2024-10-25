import { Button, Dialog, Flex } from '@radix-ui/themes';
import { useDeleteOrga } from '../../hooks/organization/deleteOrga';
import { useNavigate } from '@tanstack/react-router';
import { DialogContent } from './ImportPlaylistDialog';

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
      <DialogContent>
        <Dialog.Title>Suppression</Dialog.Title>
        <Dialog.Description>
          Êtes-vous sûr de vouloir supprimer ce groupe ?
        </Dialog.Description>
        <Flex justify="center" mt="4" gap={'8'} style={{ width: '100%' }}>
          <Button onClick={handleDelete} size={'4'}>
            oui
          </Button>
          <Dialog.Close>
            <Button size={'4'} onClick={() => onClose()} variant="soft">
              Non
            </Button>
          </Dialog.Close>
        </Flex>
      </DialogContent>
    </Dialog.Root>
  );
};
export default DeleteModal;
