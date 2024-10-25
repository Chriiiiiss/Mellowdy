import { Button, Dialog, Flex } from '@radix-ui/themes';
import { useUserState } from '../../stores/useUserState';
import { useNavigate } from '@tanstack/react-router';
import { DialogContent } from '../group/ImportPlaylistDialog';

interface ProfileDialogProps {
  open: boolean;
  onClose: () => void;
}

const LogoutModal = ({ open, onClose }: ProfileDialogProps) => {
  const userState = useUserState();
  const navigate = useNavigate();

  const handleLogout = () => {
    return () => {
      userState.logout();
      navigate({ to: '/login' });
    };
  };
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <DialogContent>
        <Dialog.Title>Déconnection</Dialog.Title>
        <Dialog.Description>
          Êtes-vous sûr de vouloir vous déconnecter ?
        </Dialog.Description>
        <Flex justify="center" mt="4" gap={'8'} style={{ width: '100%' }}>
          <Button onClick={handleLogout()} size="4">
            Oui
          </Button>
          <Dialog.Close>
            <Button onClick={onClose} size="4" variant="soft">
              Non
            </Button>
          </Dialog.Close>
        </Flex>
      </DialogContent>
    </Dialog.Root>
  );
};
export default LogoutModal;
