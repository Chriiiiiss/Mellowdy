import { Button, Dialog, Flex } from '@radix-ui/themes';
import { useUserState } from '../../stores/useUserState';
import { useNavigate } from '@tanstack/react-router';

interface ProfileDialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
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
      <Dialog.Content>
        <Dialog.Title>Déconnection</Dialog.Title>
        <Dialog.Description>
          Êtes-vous sûr de vouloir vous déconnecter ?
        </Dialog.Description>
        <Flex justify="between" mt="4" style={{ width: '100%' }}>
          <Button onClick={handleLogout()} variant="soft" size="3">
            oui
          </Button>
          <Dialog.Close>
            <Button onClick={() => onClose} size="3">
              non
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
export default LogoutModal;
